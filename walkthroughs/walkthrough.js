import { walkthroughs } from "../data/walkthroughs.js";

const STATUS_LABELS = {
  "for-review": "For review",
  "not-started": "Not started",
  complete: "Complete",
  "in-progress": "In progress",
};

const params = new URLSearchParams(location.search);
const wtSlug = params.get("w");
const wt = walkthroughs.find((w) => w.slug === wtSlug);
const container = document.getElementById("wtContent");

if (!wt) {
  container.innerHTML = `
        <a href="index.html" class="wt-back">← All Walkthroughs</a>
        <div class="wt-not-found">
            <div class="wt-not-found-title">Walkthrough not found</div>
            <p>The walkthrough "<strong>${wtSlug || "(none)"}</strong>" doesn't exist.</p>
            <a href="index.html" style="color: var(--orange-text); font-size: 13px;">Browse all walkthroughs →</a>
        </div>
    `;
} else {
  document.title = `${wt.title} — Cloud GTM Reference`;
  render(wt);
}

function buildChips(step) {
  const chips = [];

  (step.terms || []).forEach((t) => {
    const shortName = t.name.replace(
      / — (AWS|Azure|GCP|Snowflake|Alibaba)$/,
      "",
    );
    chips.push(
      `<a href="../index.html#term-${t.slug}" class="wt-chip wt-chip--term" target="_blank">${shortName}</a>`,
    );
  });

  if (step.path) {
    chips.push(
      `<a href="../learning-paths/path.html?p=${step.path}" class="wt-chip wt-chip--path" target="_blank">Path: ${step.path.replace(/-/g, " ")} →</a>`,
    );
  }

  if (step.compare) {
    chips.push(
      `<a href="../comparison/" class="wt-chip wt-chip--compare" target="_blank">Compare: ${step.compare}</a>`,
    );
  }

  return chips.length ? `<div class="wt-chips">${chips.join("")}</div>` : "";
}

function buildStep(step, index) {
  const chipsHtml = buildChips(step);
  const linkHtml = step.link
    ? `<a href="${step.link.url}" class="wt-step-link" target="_blank" rel="noopener">${step.link.label}</a>`
    : "";

  return `
        <div class="wt-step">
            <div class="wt-step-num">${index + 1}</div>
            <div class="wt-step-body">
                <div class="wt-step-title">${step.title}</div>
                <div class="wt-step-text">${step.body}</div>
                ${chipsHtml}
                ${linkHtml}
            </div>
        </div>
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

function render(walkthrough) {
  const stepsHtml = walkthrough.steps
    .map((step, i) => buildStep(step, i))
    .join("");

  container.innerHTML = `
        <a href="index.html" class="wt-back">← All Walkthroughs</a>

        <div class="wt-hdr-meta">
            <span class="wt-cat-badge cat-${walkthrough.category}">${walkthrough.category}</span>
            ${walkthrough.status ? `<span class="wt-status-badge status-${walkthrough.status}">${STATUS_LABELS[walkthrough.status] || walkthrough.status}</span>` : ""}
            <span class="wt-hdr-est">${walkthrough.estimated} · ${walkthrough.steps.length} step${walkthrough.steps.length !== 1 ? "s" : ""}</span>
        </div>

        <h1 class="wt-hdr-title">${walkthrough.title}</h1>
        <p class="wt-hdr-desc">${walkthrough.description}</p>

        <div class="wt-hdr-actions">
            <button class="wt-btn" id="copyLinkBtn" type="button">Copy link</button>
            <button class="wt-btn" id="printBtn" type="button">Print / Export PDF</button>
        </div>

        <div class="wt-steps">${stepsHtml}</div>
    `;

  document.getElementById("copyLinkBtn").addEventListener("click", copyLink);
  document
    .getElementById("printBtn")
    .addEventListener("click", printWalkthrough);
}
