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
  const chipsHtml = buildChips(step);
  const linkHtml = step.link
    ? `<a href="${step.link.url}" class="wt-step-link" target="_blank" rel="noopener">${step.link.label}</a>`
    : "";
  const checksHtml = buildChecks(step, index);

  return `
        <div class="wt-step" id="step-${index}">
            <div class="wt-step-num">${index + 1}</div>
            <div class="wt-step-body">
                <div class="wt-step-title">${step.title}</div>
                <div class="wt-step-text">${step.body}</div>
                ${chipsHtml}
                ${linkHtml}
                ${checksHtml}
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
        ${walkthrough.sourceUrl ? `<p class="wt-source-link"><a href="${walkthrough.sourceUrl}" class="wt-source-anchor" target="_blank" rel="noopener">View Help Center article →</a></p>` : ""}

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
}
