import { walkthroughs } from "../data/walkthroughs.js";
import { STATUS_LABELS } from "../app/utils.js";

// Categories follow the Suger Implementation V2 phase sequence
const CATEGORY_ORDER = [
  "kickoff",
  "integrations",
  "listings",
  "cosell",
  "cpq",
  "go-live",
  "operations",
];

const CATEGORY_META = {
  kickoff: {
    label: "Kickoff & Setup",
    desc: "Get your Suger organization ready and align your team before integrations begin.",
  },
  integrations: {
    label: "Integrations",
    desc: "Connect cloud marketplaces (AWS, Azure, GCP, Snowflake), CRM, and notification tools to Suger.",
  },
  listings: {
    label: "Listing Setup",
    desc: "Create and submit product listings on AWS, Azure, and GCP — one walkthrough per marketplace.",
  },
  cosell: {
    label: "Co-Sell Field Mapping",
    desc: "Configure CRM-to-cloud-partner data mapping for automated co-sell referral sharing.",
  },
  cpq: {
    label: "CPQ, Offers & Resale",
    desc: "Create private offers, configure CPQ field mappings, and set up resale authorizations for channel partners.",
  },
  "go-live": {
    label: "Go-Live",
    desc: "Migrate from sandbox to production, validate end-to-end, and sign off on the implementation.",
  },
  operations: {
    label: "Operations",
    desc: "Set up API clients, webhooks, and automation for day-to-day marketplace operations.",
  },
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
            <div class="wt-card-badges">
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
