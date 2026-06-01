import { terms } from "../data/terms.js";
import { learningPaths } from "../data/learning-paths.js";
import {
  buildInlineTermDetail,
  injectTagStyles,
  slug,
  copyToClipboard,
} from "../app/render.js";

injectTagStyles();

// ---- Progress persistence ----

const STORAGE_KEY = "gtm-completed-paths";

function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function markComplete(pathSlug) {
  const data = getCompleted();
  data[pathSlug] = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function unmarkComplete(pathSlug) {
  const data = getCompleted();
  delete data[pathSlug];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function isComplete(pathSlug) {
  return !!getCompleted()[pathSlug];
}

// ---- Step-level read tracking ----

const READ_KEY = "gtm-path-progress";

function getReadProgress() {
  try {
    return JSON.parse(localStorage.getItem(READ_KEY) || "{}");
  } catch {
    return {};
  }
}

function markStepRead(pathSlug, stepIndex) {
  const data = getReadProgress();
  if (!data[pathSlug]) data[pathSlug] = { read: [], total: 0 };
  if (!data[pathSlug].read.includes(stepIndex)) {
    data[pathSlug].read.push(stepIndex);
  }
  localStorage.setItem(READ_KEY, JSON.stringify(data));
}

// ---- App ----

const CATEGORY_META = {
  fundamentals: "Getting Started",
  procurement: "Procurement",
  cosell: "Co-sell",
  billing: "Billing & Revenue",
  operations: "Marketplace Ops",
  advanced: "Channel & Partner",
  onboarding: "Role-Based Onboarding",
};

const params = new URLSearchParams(location.search);
const pathSlug = params.get("p");
const path = learningPaths.find((p) => p.slug === pathSlug);
const content = document.getElementById("pathContent");

if (!path) {
  document.title = "Path not found — Cloud GTM Reference";
  content.innerHTML = `
        <div class="path-not-found">
            <p>Path not found.</p>
            <p><a href="index.html">← Browse all learning paths</a></p>
        </div>
    `;
} else {
  document.title = `Cloud GTM Reference — ${path.title}`;
  renderPath(path);
}

function renderPath(path) {
  let currentStep = -1; // -1 = overview
  const catLabel = CATEGORY_META[path.category] || path.category;

  const nextPath =
    (path.next ? learningPaths.find((p) => p.slug === path.next) : null) ||
    learningPaths.find(
      (p) => p.category === path.category && p.slug !== path.slug,
    ) ||
    null;

  const overviewDot = `<button class="progress-dot progress-dot--overview" data-step="-1" type="button" aria-label="Overview"></button>`;
  const dotsHtml =
    overviewDot +
    path.steps
      .map(
        (_, i) =>
          `<button class="progress-dot" data-step="${i}" type="button" aria-label="Go to step ${i + 1}"></button>`,
      )
      .join("");

  let prereqWarningHtml = "";
  if (path.prereqs && path.prereqs.length) {
    const unmetPrereqs = path.prereqs
      .map((s) => learningPaths.find((p) => p.slug === s))
      .filter((p) => p && !isComplete(p.slug));
    if (unmetPrereqs.length) {
      const links = unmetPrereqs
        .map(
          (p) =>
            `<a href="path.html?p=${p.slug}" class="prereq-link">${p.title}</a>`,
        )
        .join(", ");
      prereqWarningHtml = `
        <div class="path-prereq-warning">
          ⚠ For the best experience, complete ${links} before starting this one.
        </div>`;
    }
  }

  let continuesFromHtml = "";
  if (path.continuesFrom) {
    const prev = learningPaths.find((p) => p.slug === path.continuesFrom);
    if (prev) {
      const prevDone = isComplete(path.continuesFrom);
      continuesFromHtml = prevDone
        ? `<div class="path-continues-callout path-continues-done">
            ✓ You completed <a href="path.html?p=${prev.slug}">${prev.title}</a>. This path picks up where that left off.
           </div>`
        : `<div class="path-continues-callout path-continues-hint">
            For the best experience, complete <a href="path.html?p=${prev.slug}">${prev.title}</a> first.
           </div>`;
    }
  }

  content.innerHTML = `
    ${prereqWarningHtml}
    <a href="index.html" class="path-back">← All paths</a>
    <div class="path-hdr-meta">
      <span class="level-badge l-${path.level}">${path.level}</span>
      <span class="path-cat-label">${catLabel}</span>
    </div>
    <h1 class="path-hdr-title">${path.title}</h1>
    <p class="path-hdr-desc">${path.description}</p>
    <p class="path-hdr-meta-text">${path.meta} &nbsp;·&nbsp; <button class="path-export-btn" id="exportPathBtn" type="button">Print / Export PDF</button></p>
    ${continuesFromHtml}
    <div class="path-progress" id="pathProgress">${dotsHtml}</div>
    <div class="path-carousel">
      <button class="path-nav-btn path-carousel-btn" id="prevStepBtn" type="button" aria-label="Previous step">‹</button>
      <div id="pathStepContent" class="path-carousel-content" aria-live="polite"></div>
      <button class="path-nav-btn path-nav-btn--next path-carousel-btn" id="nextStepBtn" type="button" aria-label="Next step">›</button>
    </div>
    <div class="path-footer" id="pathFooter"></div>
  `;

  function renderStep(index) {
    currentStep = index;
    const isLast = index >= 0 && index === path.steps.length - 1;
    const stepContent = document.getElementById("pathStepContent");

    if (index === -1) {
      const stepsList = path.steps
        .map(
          (s, i) => `
          <li class="overview-step-item">
            <span class="overview-step-num">${i + 1}</span>
            <span class="overview-step-name">${s.name}</span>
          </li>`,
        )
        .join("");

      stepContent.innerHTML = `
        <section class="path-overview">
          <div class="step-counter">Overview · ${path.steps.length} steps</div>
          <ol class="overview-steps">${stepsList}</ol>
          <button class="overview-start-btn" id="startPathBtn" type="button">Begin path →</button>
        </section>
      `;

      document
        .getElementById("startPathBtn")
        ?.addEventListener("click", () => renderStep(0));
    } else {
      const step = path.steps[index];
      const term = terms.find((t) => slug(t.name) === step.slug);

      stepContent.innerHTML = `
        <section class="path-step">
          <div class="step-counter">Step ${index + 1} of ${path.steps.length}</div>
          <div class="step-why-callout">${step.why}</div>
          ${
            term
              ? buildInlineTermDetail(term)
              : `<p style="color:var(--gray-400);font-size:13px;padding:1rem 0;">Term "${step.name}" not found in glossary.</p>`
          }
        </section>
      `;

      markStepRead(path.slug, index);
    }

    // Dots: compare by data-step value, not forEach index
    document.querySelectorAll(".progress-dot").forEach((dot) => {
      const s = parseInt(dot.dataset.step, 10);
      dot.classList.toggle("active", s === currentStep);
      dot.classList.toggle(
        "done",
        s >= 0 && s < currentStep && currentStep >= 0,
      );
    });

    const prevBtn = document.getElementById("prevStepBtn");
    const nextBtn = document.getElementById("nextStepBtn");
    if (prevBtn) prevBtn.disabled = index === -1;
    if (nextBtn) nextBtn.disabled = isLast;

    const markCompleteBtn = document.getElementById("markCompleteBtn");
    if (markCompleteBtn) markCompleteBtn.disabled = !isLast;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderFooter() {
    const done = isComplete(path.slug);
    const isLastStep = currentStep === path.steps.length - 1;
    const hasProgress = (getReadProgress()[path.slug]?.read?.length ?? 0) > 0;
    const footer = document.getElementById("pathFooter");

    const completionHtml = done
      ? `<span class="path-complete-badge">✓ Completed</span>`
      : `<button class="path-complete-btn" id="markCompleteBtn" type="button"${isLastStep ? "" : " disabled"}>Mark as complete ✓</button>`;

    const resetHtml = hasProgress
      ? `<button class="path-reset-btn" id="resetPathBtn" type="button">Reset progress</button>`
      : "";

    footer.innerHTML = `
      <a href="index.html" class="path-footer-link">← Back to all paths</a>
      <div style="display:flex;align-items:center;gap:10px;">
        ${completionHtml}
        ${resetHtml}
      </div>
      ${nextPath ? `<a href="path.html?p=${nextPath.slug}" class="path-next-link">Next: ${nextPath.title} →</a>` : ""}
    `;

    document
      .getElementById("markCompleteBtn")
      ?.addEventListener("click", () => {
        markComplete(path.slug);
        renderFooter();
      });

    document.getElementById("resetPathBtn")?.addEventListener("click", () => {
      unmarkComplete(path.slug);
      const progress = getReadProgress();
      delete progress[path.slug];
      localStorage.setItem(READ_KEY, JSON.stringify(progress));
      renderStep(-1);
      renderFooter();
    });
  }

  function initCarousel() {
    document.querySelectorAll(".progress-dot").forEach((dot) => {
      dot.addEventListener("click", () =>
        renderStep(parseInt(dot.dataset.step, 10)),
      );
    });
    document.getElementById("prevStepBtn")?.addEventListener("click", () => {
      if (currentStep > -1) renderStep(currentStep - 1); // step 0 → overview (-1)
    });
    document.getElementById("nextStepBtn")?.addEventListener("click", () => {
      if (currentStep < path.steps.length - 1) renderStep(currentStep + 1);
    });
    renderStep(-1); // start on overview
  }

  function printPath() {
    const baseUrl = window.location.href.split("/learning-paths/")[0];
    const catLabel = CATEGORY_META[path.category] || path.category;

    const stepsHtml = path.steps
      .map((step, i) => {
        const term = terms.find((t) => slug(t.name) === step.slug);
        return `
          <section class="print-step">
            <div class="print-step-counter">Step ${i + 1} of ${path.steps.length}</div>
            <blockquote class="print-step-why">${step.why}</blockquote>
            ${term ? buildInlineTermDetail(term) : `<p>Term "${step.name}" not found.</p>`}
          </section>`;
      })
      .join("");

    const win = window.open("", "_blank");
    win.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${path.title} — Cloud GTM Reference</title>
  <link rel="stylesheet" href="${baseUrl}/styles.css">
  <style>
    body { padding: 2rem 3rem; max-width: 800px; margin: 0 auto; }
    .print-header { margin-bottom: 2.5rem; padding-bottom: 1.5rem; border-bottom: 2px solid #1a1a1a; }
    .print-title { font-family: Lexend, sans-serif; font-size: 28px; font-weight: 700; letter-spacing: -0.03em; margin-bottom: 8px; }
    .print-desc { font-size: 15px; color: #444; line-height: 1.6; margin-bottom: 6px; }
    .print-meta { font-size: 12px; color: #767676; }
    .print-step { margin-bottom: 3rem; padding-bottom: 3rem; border-bottom: 1px solid #e5e5ea; }
    .print-step-counter { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #AE530F; margin-bottom: 8px; }
    .print-step-why { font-size: 14px; color: #555; line-height: 1.65; margin: 0 0 1rem; padding: 10px 14px; background: #fff8f4; border-left: 3px solid #F26A1C; }
    .inline-term { border: none !important; box-shadow: none !important; padding: 0 !important; }
    @media print { body { padding: 0; } .print-step { page-break-inside: avoid; } }
  </style>
</head>
<body>
  <div class="print-header">
    <div class="print-title">${path.title}</div>
    <p class="print-desc">${path.description}</p>
    <p class="print-meta">${catLabel} &nbsp;·&nbsp; ${path.meta}</p>
  </div>
  ${stepsHtml}
  <script>window.onload = () => window.print();<\/script>
</body>
</html>`);
    win.document.close();
  }

  renderFooter();
  initCarousel();
  initCopyButtons();
  document
    .getElementById("exportPathBtn")
    ?.addEventListener("click", printPath);
}

function initCopyButtons() {
  document.getElementById("pathContent").addEventListener("click", (e) => {
    const btn = e.target.closest(".it-copy-btn");
    if (!btn) return;
    const s = btn.dataset.slug;
    const base = window.location.href.split("/learning-paths/")[0];
    const url = `${base}/index.html#term-${s}`;
    copyToClipboard(url, btn);
  });
}
