import { walkthroughs } from "../data/walkthroughs.js";
import { STATUS_LABELS } from "../app/utils.js";
import { buildPhaseFlow } from "../app/render.js";
import { CATEGORY_ORDER, CATEGORY_META } from "../data/journey-categories.js";

function isStub(wt) {
  return wt.steps.length === 1 && wt.steps[0].title === "Content coming soon";
}

// Some guides now carry a longer estimate ("~45 min hands-on (plus 2-4 weeks
// of review)") for accuracy — full detail belongs on the guide's own Key
// Details card, not squeezed into this compact list row. Show only the
// hands-on portion here.
function shortEstimate(estimated) {
  return estimated.split(" (")[0];
}

// A guide is a compact list row inside its category panel, not a standalone
// card — the old page rendered every guide as an identical bordered card
// regardless of category, which read as one long undifferentiated grid.
function buildRow(wt) {
  const stub = isStub(wt);
  const stepCount = stub
    ? "In progress"
    : `${wt.steps.length} step${wt.steps.length !== 1 ? "s" : ""}`;
  const showStatus = wt.status && wt.status !== "complete";
  const statusBadge = showStatus
    ? `<span class="wt-status-badge status-${wt.status}">${STATUS_LABELS[wt.status] || wt.status}</span>`
    : "";

  const a = document.createElement("a");
  a.className = "wt-row" + (stub ? " wt-row--stub" : "");
  a.href = `walkthrough.html?w=${wt.slug}`;
  a.innerHTML = `
        <div class="wt-row-main">
            <div class="wt-row-title">${wt.title}</div>
            <p class="wt-row-desc">${wt.description}</p>
        </div>
        <div class="wt-row-meta">
            ${statusBadge}
            <span class="wt-row-est">${shortEstimate(wt.estimated)} · ${stepCount}</span>
            <span class="wt-row-arrow" aria-hidden="true">→</span>
        </div>
    `;
  return a;
}

// Sticky vertical sidebar nav — a horizontal strip above the content
// scrolled out of view the moment you clicked a phase and stopped being
// useful as a "where am I" aid. A sticky sidebar stays visible the whole
// time, same pattern as the guide detail page's progress sidebar.
function buildPhaseNav(activeCats) {
  const nav = document.getElementById("wtPhaseNav");
  activeCats.forEach((cat, i) => {
    const meta = CATEGORY_META[cat];
    const count = walkthroughs.filter((w) => w.category === cat).length;
    const node = document.createElement("a");
    node.className = "wt-phase-nav-item";
    node.href = `#${cat}`;
    node.dataset.cat = cat;
    node.innerHTML = `
            <span class="wt-phase-nav-num">${i + 1}</span>
            <span class="wt-phase-nav-text">
                <span class="wt-phase-nav-label">${meta.label}</span>
                <span class="wt-phase-nav-count">${count} guide${count !== 1 ? "s" : ""}</span>
            </span>
        `;
    nav.appendChild(node);
  });
}

function wireActivePhaseTracking(activeCats) {
  const nodes = new Map(
    activeCats.map((cat) => [
      cat,
      document.querySelector(`.wt-phase-nav-item[data-cat="${cat}"]`),
    ]),
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const node = nodes.get(entry.target.id);
        if (!node) return;
        node.classList.toggle("is-active", entry.isIntersecting);
      });
    },
    { rootMargin: "-20% 0px -60% 0px" },
  );
  activeCats.forEach((cat) => {
    const section = document.getElementById(cat);
    if (section) observer.observe(section);
  });
}

function render() {
  const container = document.getElementById("wtSections");
  const activeCats = CATEGORY_ORDER.filter((cat) =>
    walkthroughs.some((w) => w.category === cat),
  );

  buildPhaseNav(activeCats);

  activeCats.forEach((cat, i) => {
    const catWts = walkthroughs.filter((w) => w.category === cat);
    const meta = CATEGORY_META[cat];
    const section = document.createElement("section");
    section.className = "wt-phase-panel";
    section.id = cat;
    section.innerHTML = `
            <div class="wt-phase-hdr">
                <div class="wt-phase-num">${i + 1}</div>
                <div>
                    <div class="wt-phase-title">${meta.label}</div>
                    <div class="wt-phase-desc">${meta.desc}</div>
                </div>
            </div>
            ${buildPhaseFlow(cat)}
            <div class="wt-phase-divider"></div>
        `;
    const rows = document.createElement("div");
    rows.className = "wt-rows";
    catWts.forEach((wt) => rows.appendChild(buildRow(wt)));
    section.appendChild(rows);
    container.appendChild(section);
  });

  wireActivePhaseTracking(activeCats);
}

render();
