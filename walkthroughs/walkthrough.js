import { walkthroughs } from "../data/walkthroughs.js";
import { terms } from "../data/terms.js";
import { escHtml, STATUS_LABELS } from "../app/utils.js";
import { CATEGORY_META } from "../data/journey-categories.js";
import {
  slug,
  buildCompactTermCard,
  buildInlineCompareRow,
  buildInlinePathCallout,
  copyToClipboard,
} from "../app/render.js";

// Compact concept cards are small — a handful per step reads as a "learn
// more" strip, not a wall of content. Cap it anyway so a step referencing
// many terms (e.g. a "connect any of these 8 providers" step) falls back to
// plain links past a reasonable point.
const MAX_CONCEPT_CARDS = 4;

const params = new URLSearchParams(location.search);
const wtSlug = params.get("w");
const wt = walkthroughs.find((w) => w.slug === wtSlug);
const wtIndex = walkthroughs.findIndex((w) => w.slug === wtSlug);
const container = document.getElementById("wtContent");

// ---- Check state (sanity checker) -------------------------------------------

const CHECKS_KEY = "gtm-walkthrough-checks";

function getChecks() {
  try {
    return JSON.parse(localStorage.getItem(CHECKS_KEY) || "{}");
  } catch {
    return {};
  }
}

function setCheck(slug, stepIdx, checkIdx, val) {
  const state = getChecks();
  if (!state[slug]) state[slug] = {};
  if (!state[slug][stepIdx]) state[slug][stepIdx] = {};
  if (val) {
    state[slug][stepIdx][checkIdx] = true;
  } else {
    delete state[slug][stepIdx][checkIdx];
  }
  localStorage.setItem(CHECKS_KEY, JSON.stringify(state));
}

function isCheckDone(slug, stepIdx, checkIdx) {
  const state = getChecks();
  return !!state[slug]?.[stepIdx]?.[checkIdx];
}

// ---- Render -----------------------------------------------------------------

if (!wt) {
  container.innerHTML = `
        <a href="index.html" class="wt-back">← All Journey Guides</a>
        <div class="wt-not-found">
            <div class="wt-not-found-title">Guide not found</div>
            <p>The guide "<strong>${escHtml(wtSlug || "(none)")}</strong>" doesn't exist.</p>
            <a href="index.html" style="color: var(--orange-text); font-size: 13px;">Browse all guides →</a>
        </div>
    `;
} else {
  document.title = `${wt.title} — Cloud GTM Reference`;
  render(wt);
}

// Converges the step's terms[]/path/compare fields into compact "learn more"
// cards — same underlying data as the Glossary/Compare/Learning-Paths pages,
// summarized inline instead of either linking out or dumping full detail.
function buildLearnMore(step) {
  const stepTermSlugs = (step.terms || []).map((t) => t.slug);
  const matchedTerms = stepTermSlugs
    .map((termSlug) => terms.find((t) => slug(t.name) === termSlug))
    .filter(Boolean);

  const cards = [];
  matchedTerms.forEach((term) => cards.push(buildCompactTermCard(term)));
  if (step.compare) {
    const c = buildInlineCompareRow(step.compare);
    if (c) cards.push(c);
  }
  if (step.path) {
    const p = buildInlinePathCallout(step.path, stepTermSlugs);
    if (p) cards.push(p);
  }

  if (!cards.length) return "";

  const shown = cards.slice(0, MAX_CONCEPT_CARDS);
  const overflowCount = cards.length - shown.length;
  const overflowNote = overflowCount
    ? `<p class="wt-lm-overflow">+ ${overflowCount} more — see the <a href="../index.html">glossary</a>, <a href="../comparison/">compare table</a>, or <a href="../learning-paths/">learning paths</a>.</p>`
    : "";

  return `
    <div class="wt-learn-more">
      <div class="wt-lm-label">Revisit</div>
      <div class="wt-concept-grid">${shown.join("")}</div>
      ${overflowNote}
    </div>
  `;
}

function buildChecks(step, stepIndex) {
  if (!step.checks?.length) return "";
  const slug = wt.slug;
  const items = step.checks
    .map((q, ci) => {
      const id = `chk-${slug}-${stepIndex}-${ci}`;
      const done = isCheckDone(slug, stepIndex, ci);
      return `<li class="wt-check-item${done ? " wt-check-item--done" : ""}">
        <label class="wt-check-row" for="${id}">
          <input class="wt-check-input" type="checkbox" id="${id}" data-step="${stepIndex}" data-check="${ci}"${done ? " checked" : ""}>
          <span class="wt-check-text">${q}</span>
        </label>
      </li>`;
    })
    .join("");

  return `<div class="wt-step-checks">
    <p class="wt-checks-label">Before moving on</p>
    <ul class="wt-check-list">${items}</ul>
  </div>`;
}

function buildStep(step, index) {
  const learnMoreHtml = buildLearnMore(step);
  // External (off-site) action links open in a new tab since they send the
  // user to actually do something elsewhere (a cloud console, a vendor
  // portal); same-site links (e.g. back to the Journey hub) navigate in
  // place — forcing a new tab for in-site navigation is the dark pattern.
  const isExternalLink = step.link && /^https?:\/\//.test(step.link.url);
  const linkHtml = step.link
    ? `<a href="${step.link.url}" class="wt-step-link"${isExternalLink ? ' target="_blank" rel="noopener"' : ""}>${step.link.label}</a>`
    : "";
  const checksHtml = buildChecks(step, index);

  return `
        <div class="wt-step-card" id="step-${index}">
            <div class="wt-step-card-hdr">
                <div class="wt-step-num">${index + 1}</div>
                <div class="wt-step-title">${step.title}</div>
            </div>
            <div class="wt-step-body">
                <div class="wt-step-text">${step.body}</div>
                ${linkHtml}
                ${learnMoreHtml}
                ${checksHtml}
            </div>
        </div>
    `;
}

function buildNextNav(walkthrough) {
  const prev = wtIndex > 0 ? walkthroughs[wtIndex - 1] : null;
  const next =
    wtIndex >= 0 && wtIndex < walkthroughs.length - 1
      ? walkthroughs[wtIndex + 1]
      : null;
  if (!prev && !next) return "";
  return `
    <div class="wt-seq-nav">
      <div class="wt-seq-nav-inner">
        ${
          prev
            ? `<a href="walkthrough.html?w=${prev.slug}" class="wt-seq-btn wt-seq-btn--prev">
          <span class="wt-seq-label">Previous</span>
          <span class="wt-seq-title">${prev.title}</span>
        </a>`
            : `<span></span>`
        }
        ${
          next
            ? `<a href="walkthrough.html?w=${next.slug}" class="wt-seq-btn wt-seq-btn--next">
          <span class="wt-seq-label">Next</span>
          <span class="wt-seq-title">${next.title}</span>
        </a>`
            : `<span></span>`
        }
      </div>
    </div>`;
}

function buildSidebar(walkthrough) {
  const progressItems = walkthrough.steps
    .map(
      (s, i) =>
        `<li><a href="#step-${i}" class="wt-progress-item" data-step="${i}"><span class="wt-progress-num">${i + 1}</span><span class="wt-progress-title">${s.title}</span></a></li>`,
    )
    .join("");

  return `
    <aside class="wt-sidebar">
      <div class="wt-side-box">
        <div class="wt-side-title">Guide progress</div>
        <ol class="wt-progress-list" id="wtProgressList">${progressItems}</ol>
        <a href="index.html" class="wt-side-link">← Back to Journey hub</a>
      </div>
    </aside>
  `;
}

function copyLink() {
  const url = location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      const btn = document.getElementById("copyLinkBtn");
      if (btn) {
        const orig = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => {
          btn.textContent = orig;
        }, 1800);
      }
    })
    .catch(() => {
      prompt("Copy this link:", url);
    });
}

function printWalkthrough() {
  window.print();
}

function wireProgressTracking(walkthrough) {
  const items = new Map(
    [...document.querySelectorAll(".wt-progress-item")].map((el) => [
      el.dataset.step,
      el,
    ]),
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const stepIndex = entry.target.id.replace("step-", "");
        const item = items.get(stepIndex);
        if (!item) return;
        item.classList.toggle("is-active", entry.isIntersecting);
      });
    },
    { rootMargin: "-20% 0px -70% 0px" },
  );
  walkthrough.steps.forEach((_, i) => {
    const el = document.getElementById(`step-${i}`);
    if (el) observer.observe(el);
  });
}

function render(walkthrough) {
  const stepsHtml = walkthrough.steps
    .map((step, i) => buildStep(step, i))
    .join("");
  const catMeta = CATEGORY_META[walkthrough.category];
  const catLabel = catMeta?.label || walkthrough.category;

  container.innerHTML = `
        <a href="index.html" class="wt-back">← All Journey Guides</a>

        <div class="wt-breadcrumb">Journey <span aria-hidden="true">/</span> ${catLabel}</div>

        <div class="wt-hdr-meta">
            <span class="wt-cat-badge cat-${walkthrough.category}">${walkthrough.category}</span>
            ${walkthrough.status && walkthrough.status !== "complete" ? `<span class="wt-status-badge status-${walkthrough.status}">${STATUS_LABELS[walkthrough.status] || walkthrough.status}</span>` : ""}
        </div>

        <h1 class="wt-hdr-title">${walkthrough.title}</h1>
        <p class="wt-hdr-desc">${walkthrough.description}</p>

        <div class="wt-hdr-actions">
            <button class="wt-btn" id="copyLinkBtn" type="button">Copy link</button>
            <button class="wt-btn" id="printBtn" type="button">Print / Export PDF</button>
        </div>

        <div class="wt-layout">
          <div class="wt-main">
            <div class="wt-key-details" id="key-details">
                <div class="wt-kd-item">
                    <span class="wt-kd-label">Category</span>
                    <span class="wt-kd-value">${catLabel}</span>
                </div>
                <div class="wt-kd-item">
                    <span class="wt-kd-label">Estimated time</span>
                    <span class="wt-kd-value">${walkthrough.estimated}</span>
                </div>
                <div class="wt-kd-item">
                    <span class="wt-kd-label">Steps</span>
                    <span class="wt-kd-value">${walkthrough.steps.length}</span>
                </div>
                <div class="wt-kd-item">
                    <span class="wt-kd-label">Source</span>
                    <span class="wt-kd-value">${walkthrough.sourceUrl ? `<a href="${walkthrough.sourceUrl}" target="_blank" rel="noopener">Suger Docs ↗</a>` : "—"}</span>
                </div>
            </div>

            <section class="wt-section" id="steps">
                <div class="wt-section-title">Steps</div>
                <div class="wt-steps">${stepsHtml}</div>
            </section>

            ${buildNextNav(walkthrough)}
          </div>

          ${buildSidebar(walkthrough)}
        </div>
    `;

  document.getElementById("copyLinkBtn").addEventListener("click", copyLink);
  document
    .getElementById("printBtn")
    .addEventListener("click", printWalkthrough);

  // Sanity check state persistence
  container.addEventListener("change", (e) => {
    const input = e.target.closest(".wt-check-input");
    if (!input) return;
    const stepIdx = parseInt(input.dataset.step, 10);
    const checkIdx = parseInt(input.dataset.check, 10);
    setCheck(wt.slug, stepIdx, checkIdx, input.checked);
    const item = input.closest(".wt-check-item");
    if (item) item.classList.toggle("wt-check-item--done", input.checked);
  });

  wireProgressTracking(walkthrough);
}

// Term card "View full definition" — expands the full detail in place
// instead of navigating anywhere, so the guide's flow isn't interrupted.
container.addEventListener("click", (e) => {
  const btn = e.target.closest(".wt-cc-expand-btn");
  if (!btn) return;
  const card = btn.closest(".wt-concept-card");
  const full = card.querySelector(".wt-cc-full");
  const expanded = !full.hidden;
  full.hidden = expanded;
  // The compact card sits in a narrow grid column — fine for a name + one
  // line, not for the full rich detail (badges, use cases, related terms,
  // long URLs). Span the full row while expanded instead of squeezing it.
  card.classList.toggle("wt-concept-card--expanded", !expanded);
  btn.textContent = expanded ? "View full definition →" : "Hide definition ↑";
});
