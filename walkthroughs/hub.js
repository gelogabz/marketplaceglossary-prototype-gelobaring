import { walkthroughs } from "../data/walkthroughs.js";

const CATEGORY_ORDER = [
  "setup",
  "cosell",
  "offers",
  "integration",
  "onboarding",
  "operations",
];

const CATEGORY_META = {
  setup: {
    label: "Setup & Integrations",
    desc: "Connect marketplaces and configure your Suger organization.",
  },
  cosell: {
    label: "Co-sell",
    desc: "Connect to hyperscaler co-sell programs and sync referrals.",
  },
  offers: {
    label: "Offers",
    desc: "Create, price, and manage private offers and channel deals.",
  },
  integration: {
    label: "Integrations",
    desc: "Connect CRM, analytics, and third-party tools to Suger.",
  },
  onboarding: {
    label: "Onboarding",
    desc: "Guided checklists for getting productive in Suger fast.",
  },
  operations: {
    label: "Operations",
    desc: "Automate workflows, metering, and day-to-day marketplace ops.",
  },
};

const STATUS_LABELS = {
  "for-review": "For review",
  "not-started": "Not started",
  complete: "Complete",
  "in-progress": "In progress",
};

function isStub(wt) {
  return wt.steps.length === 1 && wt.steps[0].title === "Content coming soon";
}

function buildCard(wt) {
  const stub = isStub(wt);
  const stepCount = stub
    ? "In progress"
    : `${wt.steps.length} step${wt.steps.length !== 1 ? "s" : ""}`;
  const statusClass = wt.status ? `status-${wt.status}` : "";
  const statusLabel = wt.status ? STATUS_LABELS[wt.status] || wt.status : "";
  const statusBadge = statusLabel
    ? `<span class="wt-status-badge ${statusClass}">${statusLabel}</span>`
    : "";

  const a = document.createElement("a");
  a.className = "wt-card" + (stub ? " wt-card--stub" : "");
  a.href = `walkthrough.html?w=${wt.slug}`;
  a.innerHTML = `
        <div class="wt-card-top">
            <div class="wt-card-title">${wt.title}</div>
            <div style="display:flex;gap:6px;align-items:center;flex-shrink:0">
                ${statusBadge}
                <span class="wt-cat-badge cat-${wt.category}">${wt.category}</span>
            </div>
        </div>
        <p class="wt-card-desc">${wt.description}</p>
        <p class="wt-card-meta">${wt.estimated} · ${stepCount}</p>
        <span class="wt-start-label">${stub ? "Preview →" : "Start walkthrough →"}</span>
    `;
  return a;
}

function render() {
  const container = document.getElementById("wtSections");
  CATEGORY_ORDER.forEach((cat) => {
    const catWts = walkthroughs.filter((w) => w.category === cat);
    if (!catWts.length) return;
    const meta = CATEGORY_META[cat];
    const section = document.createElement("section");
    section.className = "wt-category-section";
    section.id = cat;
    section.innerHTML = `
            <div class="wt-category-header">
                <div class="wt-category-title">${meta.label}</div>
                <div class="wt-category-desc">${meta.desc}</div>
            </div>
        `;
    const grid = document.createElement("div");
    grid.className = "wt-grid";
    catWts.forEach((wt) => grid.appendChild(buildCard(wt)));
    section.appendChild(grid);
    container.appendChild(section);
  });
}

render();
