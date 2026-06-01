import { learningPaths, GLOBAL_SEQUENCE } from "../data/learning-paths.js";
import { terms } from "../data/terms.js";
import { slug } from "../app/render.js";

const STORAGE_KEY = "gtm-completed-paths";
const ROLE_KEY = "gtm-user-role";

const ROLE_TRACKS = {
  new: GLOBAL_SEQUENCE,
  sales: [
    "cloud-marketplace-basics",
    "sales-onboarding",
    "private-offers-and-cppas",
    "cosell-fundamentals",
  ],
  partner: [
    "cosell-fundamentals",
    "partner-manager-onboarding",
    "channel-and-partner-motions",
  ],
  revops: [
    "revops-onboarding",
    "enterprise-billing-and-committed-spend",
    "marketplace-tax-compliance",
  ],
  executive: ["executive-briefing", "cloud-marketplace-basics"],
  technical: [
    "suger-platform-quickstart",
    "marketplace-integrations",
    "marketplace-ops-essentials",
  ],
};

const ROLE_STARTING_PATH = {
  new: "cloud-marketplace-basics",
  sales: "sales-onboarding",
  partner: "partner-manager-onboarding",
  revops: "revops-onboarding",
  executive: "executive-briefing",
  technical: "suger-platform-quickstart",
};

const ROLE_LABELS = {
  new: "New to cloud marketplace",
  sales: "Sales / AE",
  partner: "Partner Manager",
  revops: "RevOps / Finance",
  executive: "Executive",
  technical: "Technical / Developer",
};

function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function isComplete(pathSlug) {
  return !!getCompleted()[pathSlug];
}

function resetAllProgress() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(ROLE_KEY);
  localStorage.removeItem("gtm-path-progress");
}

function getRole() {
  return localStorage.getItem(ROLE_KEY) || null;
}

function setRole(role) {
  localStorage.setItem(ROLE_KEY, role);
}

const CATEGORY_ORDER = [
  "fundamentals",
  "procurement",
  "cosell",
  "billing",
  "operations",
  "advanced",
  "onboarding",
];

const CATEGORY_META = {
  fundamentals: {
    label: "Getting Started",
    desc: "Core concepts every Cloud GTM practitioner needs first.",
  },
  procurement: {
    label: "Procurement",
    desc: "How buyers transact — offers, contracts, and entitlements.",
  },
  cosell: {
    label: "Co-sell",
    desc: "Joint selling motions with hyperscaler sales teams.",
  },
  billing: {
    label: "Billing & Revenue",
    desc: "Revenue, metering, committed spend, and payout mechanics.",
  },
  operations: {
    label: "Marketplace Ops",
    desc: "Day-to-day ISV operations — APIs, integrations, and listing management.",
  },
  advanced: {
    label: "Channel & Partner",
    desc: "Distributor models, resale mechanics, and multi-party channel motions.",
  },
  onboarding: {
    label: "Role-Based Onboarding",
    desc: "Paths aligned to job function — get productive in your role fast.",
  },
};

function calcPathLevel(path) {
  const diffMap = { beginner: 1, intermediate: 2, advanced: 3 };
  const scores = path.steps
    .map((step) => terms.find((t) => slug(t.name) === step.slug))
    .filter(Boolean)
    .map((t) => diffMap[t.difficulty] || 2);
  if (!scores.length) return path.level;
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const calc = avg < 1.5 ? "beginner" : avg < 2.5 ? "intermediate" : "advanced";
  if (calc !== path.level) {
    console.debug(`[LP] ${path.slug}: declared=${path.level} calc=${calc}`);
  }
  return calc;
}

function buildSequenceHtml(steps) {
  return steps
    .map(
      (step, i) =>
        `<span class="seq-term">${step.name.replace(/ — (AWS|Azure|GCP|Snowflake|Alibaba)$/, "")}</span>` +
        (i < steps.length - 1 ? `<span class="seq-arrow">›</span>` : ""),
    )
    .join("");
}

function getReadProgress() {
  try {
    return JSON.parse(localStorage.getItem("gtm-path-progress") || "{}");
  } catch {
    return {};
  }
}

function buildProgressBar(pathSlug, totalSteps) {
  const data = getReadProgress();
  const readCount = data[pathSlug]?.read?.length || 0;
  if (readCount === 0) return "";
  const pct = Math.round((readCount / totalSteps) * 100);
  return `
        <div class="path-progress-bar-wrap">
            <div class="path-progress-bar" style="width:${pct}%"></div>
        </div>
        <span class="path-progress-label">${readCount} of ${totalSteps} steps read</span>
    `;
}

function buildPrereqHint(path) {
  if (!path.prereqs || !path.prereqs.length) return "";
  const unmet = path.prereqs
    .map((s) => learningPaths.find((p) => p.slug === s))
    .filter((p) => p && !isComplete(p.slug));
  if (!unmet.length) return "";
  const names = unmet.map((p) => p.title).join(", ");
  return `<p class="path-prereq-hint">Complete ${names} first</p>`;
}

function buildCard(path) {
  const done = isComplete(path.slug);
  const level = calcPathLevel(path);
  const progressHtml = done
    ? ""
    : buildProgressBar(path.slug, path.steps.length);
  const prereqHint = done ? "" : buildPrereqHint(path);
  const a = document.createElement("a");
  a.className = "path-card" + (done ? " path-card--done" : "");
  a.href = `path.html?p=${path.slug}`;
  a.innerHTML = `
        <div class="path-card-top">
            <div class="path-card-title">${path.title}</div>
            <div class="path-card-badges">
                ${done ? '<span class="path-done-badge">✓ Completed</span>' : ""}
                <span class="level-badge l-${level}">${level}</span>
            </div>
        </div>
        ${prereqHint}
        <p class="path-card-desc">${path.description}</p>
        <p class="path-card-meta">${path.meta}</p>
        ${progressHtml}
        <div class="path-sequence">${buildSequenceHtml(path.steps)}</div>
        <span class="path-start-label">${done ? "Review path →" : "Start path →"}</span>
    `;
  return a;
}

function getFeaturedPath() {
  const completed = getCompleted();
  const role = getRole();
  const sequence = role
    ? ROLE_TRACKS[role] || GLOBAL_SEQUENCE
    : GLOBAL_SEQUENCE;
  const allDone = sequence.every((s) => completed[s]);
  if (allDone) return null;
  return (
    sequence
      .map((s) => learningPaths.find((p) => p.slug === s))
      .filter(Boolean)
      .find((p) => !completed[p.slug]) || learningPaths[0]
  );
}

function renderRoleSelector() {
  const el = document.getElementById("featuredBanner");
  const chips = Object.entries(ROLE_LABELS)
    .map(
      ([key, label]) =>
        `<button class="role-chip" data-role="${key}" type="button">${label}</button>`,
    )
    .join("");
  el.innerHTML = `
        <div class="lp-role-selector">
            <div class="lp-role-eyebrow">What's your role?</div>
            <p class="lp-role-sub">Pick your role to get a personalized starting path.</p>
            <div class="lp-role-chips">${chips}</div>
        </div>
    `;
  el.querySelectorAll(".role-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      setRole(btn.dataset.role);
      renderFeatured();
    });
  });
}

function renderFeatured() {
  const el = document.getElementById("featuredBanner");
  const completed = getCompleted();
  const role = getRole();
  const sequence = role
    ? ROLE_TRACKS[role] || GLOBAL_SEQUENCE
    : GLOBAL_SEQUENCE;
  const allDone = sequence.every((s) => completed[s]);
  const hasCompletions = Object.keys(completed).some((s) =>
    learningPaths.some((p) => p.slug === s),
  );

  // First visit — no role, no completions: show role selector
  if (!role && !hasCompletions) {
    renderRoleSelector();
    return;
  }

  if (allDone) {
    el.innerHTML = `
            <a href="#onboarding" class="lp-featured">
                <div class="lp-featured-copy">
                    <div class="lp-featured-eyebrow">Journey complete</div>
                    <div class="lp-featured-title">You've covered the full curriculum</div>
                    <div class="lp-featured-desc">Explore role-based paths or revisit any section.</div>
                </div>
                <span class="lp-featured-cta">Browse paths →</span>
            </a>
        `;
    return;
  }

  const path = getFeaturedPath();
  if (!path) return;

  const prevPath = path.continuesFrom
    ? learningPaths.find((p) => p.slug === path.continuesFrom)
    : null;

  const eyebrow = hasCompletions
    ? "Continue your journey"
    : role
      ? `Your track · ${ROLE_LABELS[role]}`
      : "Start here if you're new";
  const desc =
    hasCompletions && prevPath
      ? `${path.meta} · Continues from ${prevPath.title}`
      : `${path.meta} · No prior knowledge needed`;
  const cta = hasCompletions ? "Continue →" : "Start this path →";

  const changeRoleLink = role
    ? `<span class="lp-featured-change-role" id="changeRoleBtn" tabindex="0" role="button">Change role</span>`
    : "";

  el.innerHTML = `
        <a href="path.html?p=${path.slug}" class="lp-featured">
            <div class="lp-featured-copy">
                <div class="lp-featured-eyebrow">${eyebrow}</div>
                <div class="lp-featured-title">${path.title}</div>
                <div class="lp-featured-desc">${desc}</div>
            </div>
            <span class="lp-featured-cta">${cta}</span>
        </a>
        ${changeRoleLink}
    `;

  el.onclick = null;

  const changeRoleBtn = document.getElementById("changeRoleBtn");
  if (changeRoleBtn) {
    const handleChangeRole = () => {
      localStorage.removeItem(ROLE_KEY);
      localStorage.removeItem("gtm-path-progress");
      renderRoleSelector();
    };
    changeRoleBtn.addEventListener("click", handleChangeRole);
    changeRoleBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleChangeRole();
      }
    });
  }
}

function renderByCategory(paths) {
  const container = document.getElementById("pathSections");
  CATEGORY_ORDER.forEach((cat) => {
    const catPaths = paths.filter((p) => p.category === cat);
    if (!catPaths.length) return;
    const meta = CATEGORY_META[cat];
    const section = document.createElement("section");
    section.className = "lp-category-section";
    section.id = cat;
    section.innerHTML = `
            <div class="lp-category-header">
                <div class="lp-category-title">${meta.label}</div>
                <div class="lp-category-desc">${meta.desc}</div>
            </div>
        `;
    const grid = document.createElement("div");
    grid.className = "path-grid";
    catPaths.forEach((path) => grid.appendChild(buildCard(path)));
    section.appendChild(grid);
    container.appendChild(section);
  });
}

function renderProgressFooter() {
  const completed = getCompleted();
  const count = Object.keys(completed).filter((s) =>
    learningPaths.some((p) => p.slug === s),
  ).length;
  const total = learningPaths.length;
  if (count === 0) return;
  const el = document.getElementById("progressFooter");
  el.innerHTML = `
        <div class="progress-footer">
            <span>${count} of ${total} path${count !== 1 ? "s" : ""} completed</span>
            <button class="reset-all-btn" id="resetAllBtn" type="button">Reset all progress</button>
        </div>
    `;
  document.getElementById("resetAllBtn").addEventListener("click", () => {
    if (confirm("Reset all learning path progress?")) {
      resetAllProgress();
      location.reload();
    }
  });
}

renderFeatured();
renderByCategory(learningPaths);
renderProgressFooter();
