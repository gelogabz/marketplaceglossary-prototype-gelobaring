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
  document.title = `${path.title} — Cloud GTM Reference`;
  renderPath(path);
}

function renderPath(path) {
  const catLabel = CATEGORY_META[path.category] || path.category;

  // Find a sibling path in the same category (for "Next path" footer link)
  const sameCatPaths = learningPaths.filter(
    (p) => p.category === path.category && p.slug !== path.slug,
  );
  const nextPath = sameCatPaths[0] || null;

  // Progress dots HTML
  const dotsHtml = path.steps
    .map(
      (_, i) =>
        `<button class="progress-dot" data-step="${i}" type="button" aria-label="Jump to step ${i + 1}"></button>`,
    )
    .join("");

  content.innerHTML = `
        <a href="index.html" class="path-back">← All paths</a>

        <div class="path-hdr-meta">
            <span class="level-badge l-${path.level}">${path.level}</span>
            <span class="path-cat-label">${catLabel}</span>
        </div>

        <h1 class="path-hdr-title">${path.title}</h1>
        <p class="path-hdr-desc">${path.description}</p>
        <p class="path-hdr-meta-text">${path.meta}</p>

        <div class="path-progress" id="pathProgress">${dotsHtml}</div>

        <div id="pathSteps"></div>

        <div class="path-footer" id="pathFooter"></div>
    `;

  const stepsContainer = document.getElementById("pathSteps");

  path.steps.forEach((step, i) => {
    const term = terms.find((t) => slug(t.name) === step.slug);

    const section = document.createElement("section");
    section.className = "path-step";
    section.id = `step-${i}`;

    const termHtml = term
      ? buildInlineTermDetail(term)
      : `<p style="color:var(--gray-400);font-size:13px;padding:1rem 0;">Term "${step.name}" not found in glossary.</p>`;

    section.innerHTML = `
            <div class="step-counter">Step ${i + 1} of ${path.steps.length}</div>
            <div class="step-why-callout">${step.why}</div>
            ${termHtml}
        `;

    stepsContainer.appendChild(section);
  });

  renderFooter(path, nextPath);
  initProgress();
  initCopyButtons();
}

function renderFooter(path, nextPath) {
  const done = isComplete(path.slug);
  const footer = document.getElementById("pathFooter");

  const completionHtml = done
    ? `<span class="path-complete-badge">✓ Completed</span>
           <button class="path-reset-btn" id="resetPathBtn" type="button">Reset</button>`
    : `<button class="path-complete-btn" id="markCompleteBtn" type="button">Mark as complete ✓</button>`;

  footer.innerHTML = `
        <a href="index.html" class="path-footer-link">← Back to all paths</a>
        <div style="display:flex;align-items:center;gap:10px;">
            ${completionHtml}
        </div>
        ${nextPath ? `<a href="path.html?p=${nextPath.slug}" class="path-next-link">Next: ${nextPath.title} →</a>` : ""}
    `;

  document.getElementById("markCompleteBtn")?.addEventListener("click", () => {
    markComplete(path.slug);
    renderFooter(path, nextPath);
  });

  document.getElementById("resetPathBtn")?.addEventListener("click", () => {
    unmarkComplete(path.slug);
    renderFooter(path, nextPath);
  });
}

function initProgress() {
  const dots = document.querySelectorAll(".progress-dot");
  const stepEls = document.querySelectorAll(".path-step");

  if (!dots.length) return;

  dots[0].classList.add("active");

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.dataset.step, 10);
      document
        .getElementById(`step-${idx}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.id.replace("step-", ""), 10);
          dots.forEach((d, i) => {
            d.classList.toggle("active", i === idx);
            d.classList.toggle("done", i < idx);
          });
        }
      });
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    },
  );

  stepEls.forEach((el) => observer.observe(el));
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
