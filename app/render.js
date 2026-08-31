import { terms } from "../data/terms.js";
import { tagMeta } from "../data/tags.js";
import { learningPaths } from "../data/learning-paths.js";
import { getActiveFilters, toggleFilter } from "./filters.js";
import { PLATFORM_SUFFIX_RE } from "./utils.js";
import {
  findComparisonRow,
  conceptLabel,
  DISPLAY_SUFFIX_RE,
  PLATFORM_KEYS,
} from "./compare-data.js";

// ---- Helpers ----------------------------------------------------------------

// Build name→slug map once, sorted longest-first so longer names match before substrings
let _termMap = null;
function getTermMap() {
  if (!_termMap) {
    _termMap = new Map(
      [...terms]
        .sort((a, b) => b.name.length - a.name.length)
        .map((t) => [t.name, slug(t.name)]),
    );
  }
  return _termMap;
}

export function linkifyAlias(text) {
  const map = getTermMap();
  let result = text;
  for (const [name, termSlug] of map) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(
      new RegExp(escaped, "g"),
      `<a href="#term-${termSlug}" class="alias-link">${name}</a>`,
    );
  }
  return result;
}

export function highlight(text, q) {
  if (!q) return text;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

export function slug(text) {
  return text.toLowerCase().replace(/[()]/g, "").replace(/\s+/g, "-");
}

export function matchScore(t, q) {
  if (!q) return 0;
  const name = t.name.toLowerCase();
  if (name === q) return 4;
  if (name.startsWith(q)) return 3;
  if (name.includes(q)) return 2;
  if (t.def.toLowerCase().includes(q)) return 1;
  if (t.alias && t.alias.toLowerCase().includes(q)) return 1;
  return 0;
}

export function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.innerHTML;
    btn.innerHTML = "✓ Copied";
    setTimeout(() => (btn.innerHTML = original), 2000);
  });
}

// ---- Tag style injection ----------------------------------------------------

export function injectTagStyles() {
  const rules = Object.entries(tagMeta)
    .map(
      ([id, { bg, color }]) =>
        `.tag-${id} { background: ${bg}; color: ${color}; }`,
    )
    .join("\n");

  const style = document.createElement("style");
  style.textContent = rules;
  document.head.appendChild(style);
}

// ---- Card builder -----------------------------------------------------------

export function buildCard(t, q, bestMatch) {
  const activeFilters = getActiveFilters();
  const card = document.createElement("div");
  card.className = "term-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  const termSlug = slug(t.name);
  card.id = `term-${termSlug}`;

  if (q) {
    const score = matchScore(t, q);
    if (score === 0) {
      card.classList.add("dimmed");
    } else if (bestMatch && t.name === bestMatch.name) {
      card.classList.add("best-match");
    }
  }

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  const nameEl = document.createElement("div");
  nameEl.className = "term-name";
  nameEl.innerHTML = highlight(t.name, q);
  cardHeader.appendChild(nameEl);

  if (t.difficulty) {
    const badge = document.createElement("span");
    badge.className = `difficulty-badge d-${t.difficulty}`;
    badge.textContent = t.difficulty;
    cardHeader.appendChild(badge);
  }

  card.appendChild(cardHeader);

  const defEl = document.createElement("div");
  defEl.className = "term-def";
  defEl.innerHTML = highlight(t.def, q);
  card.appendChild(defEl);

  if (t.alias) {
    const aliasEl = document.createElement("div");
    aliasEl.className = "alias";
    aliasEl.innerHTML = highlight(linkifyAlias(t.alias), q);
    card.appendChild(aliasEl);
  }

  if (t.tags && t.tags.length) {
    const tagContainer = document.createElement("div");
    tagContainer.className = "tags";

    t.tags.forEach((tag) => {
      const meta = tagMeta[tag] || { label: tag };
      const tagEl = document.createElement("button");
      tagEl.type = "button";
      tagEl.className =
        "tag tag-" + tag + (activeFilters.has(tag) ? " tag-active" : "");
      tagEl.textContent = meta.label.toUpperCase();
      tagEl.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFilter(tag);
      });
      tagContainer.appendChild(tagEl);
    });

    card.appendChild(tagContainer);
  }

  const hintEl = document.createElement("div");
  hintEl.className = "card-expand-hint";
  hintEl.textContent = "Details →";
  card.appendChild(hintEl);

  return card;
}

// ---- Detail view builder ----------------------------------------------------

const PLATFORMS = [
  { key: "aws", label: "AWS", cls: "pb-aws" },
  { key: "azure", label: "Azure", cls: "pb-azure" },
  { key: "gcp", label: "GCP", cls: "pb-gcp" },
  { key: "snowflake", label: "Snowflake", cls: "pb-snowflake" },
  { key: "alibaba", label: "Alibaba", cls: "pb-alibaba" },
  { key: "oracle", label: "Oracle", cls: "pb-oracle" },
];

// PLATFORM_SUFFIX_RE imported from ./utils.js

function getRelatedTerms(t) {
  if (!t.alias) return [];
  return [...terms]
    .sort((a, b) => b.name.length - a.name.length)
    .filter((other) => other.name !== t.name && t.alias.includes(other.name));
}

// ---- Shared section builders ------------------------------------------------

function buildDifficultyHtml(t) {
  return t.difficulty
    ? `<span class="difficulty-badge d-${t.difficulty}">${t.difficulty}</span>`
    : "";
}

function buildSection(title, content) {
  return `<div class="sr-section"><div class="sr-section-title">${title}</div>${content}</div>`;
}

function buildTagsHtml(t) {
  return (t.tags || [])
    .map((tag) => {
      const meta = tagMeta[tag] || { label: tag };
      return `<span class="detail-tag tag-${tag}">${meta.label.toUpperCase()}</span>`;
    })
    .join("");
}

function buildPlatformSection(t) {
  const tags = t.tags || [];
  const hasPlatformTag = PLATFORMS.some((p) => tags.includes(p.key));

  if (!hasPlatformTag) {
    return buildSection(
      "Platform availability",
      `<span class="pbadge pb-agnostic">Platform-agnostic</span>`,
    );
  }

  const platformHtml = PLATFORMS.map((p) => {
    const present = tags.includes(p.key);
    return `<span class="pbadge ${present ? p.cls : "pb-off"}">${p.label}</span>`;
  }).join("");
  const notes = t.alias?.toLowerCase().includes("equivalent")
    ? `<p class="platform-notes">${t.alias.replace(/\|/g, "·")}</p>`
    : "";
  return buildSection(
    "Platform availability",
    `<div class="platform-row">${platformHtml}</div>${notes}`,
  );
}

function buildWhoForHtml(t) {
  if (!t.whoFor?.length) return "";
  return buildSection(
    "Who it's for",
    `<div class="chips">${t.whoFor.map((p) => `<span class="chip">${p}</span>`).join("")}</div>`,
  );
}

function buildUseCasesHtml(t) {
  if (!t.useCases?.length) return "";
  return buildSection(
    "Common use cases",
    `<ul class="use-cases">${t.useCases.map((uc) => `<li>${uc}</li>`).join("")}</ul>`,
  );
}

function buildContextHtml(t) {
  if (!t.context?.length) return "";
  return buildSection(
    "Where you'll encounter this",
    `<div class="chips">${t.context.map((c) => `<span class="chip chip-context">${c}</span>`).join("")}</div>`,
  );
}

function getRelatedItems(t) {
  return t.related?.length
    ? t.related
    : getRelatedTerms(t).map((r) => ({ name: r.name, slug: slug(r.name) }));
}

function buildRelatedSection(
  items,
  linkPrefix,
  { newTab = false, aliasLink = false } = {},
) {
  if (!items.length) return "";
  const tabAttr = newTab ? ' target="_blank"' : "";
  const cls = aliasLink ? "chip chip-link alias-link" : "chip chip-link";
  const links = items
    .map((r) => {
      const shortName = r.name.replace(PLATFORM_SUFFIX_RE, "");
      return `<a href="${linkPrefix}${r.slug}" class="${cls}"${tabAttr}>${shortName}</a>`;
    })
    .join("");
  return buildSection("Related terms", `<div class="chips">${links}</div>`);
}

function buildLearningPathsSection(termSlug) {
  const paths = learningPaths.filter((p) =>
    p.steps.some((s) => s.slug === termSlug),
  );
  if (!paths.length) return "";
  const links = paths
    .map(
      (p) =>
        `<a href="learning-paths/path.html?p=${p.slug}" class="chip chip-link">${p.title} →</a>`,
    )
    .join("");
  return buildSection("Learning paths", `<div class="chips">${links}</div>`);
}

// ---- Detail view builder ----------------------------------------------------

export function buildDetailView(t) {
  const termSlug = slug(t.name);
  const relatedSection = buildRelatedSection(getRelatedItems(t), "#term-", {
    aliasLink: true,
  });
  const learningPathsHtml = buildLearningPathsSection(termSlug);

  const sourceHtml = t.source
    ? `<a class="sr-source-link" href="${t.source}" target="_blank" rel="noopener noreferrer">Official source ↗</a>`
    : "";

  return `
    <div class="detail-view">
      <div class="sr-close-row">
        <button class="close-btn" id="detailCloseBtn" type="button" aria-label="Close detail panel">✕</button>
      </div>
      <div class="sr-name">${t.name}</div>
      <div class="sr-meta">${buildDifficultyHtml(t)}${buildTagsHtml(t)}</div>
      <div class="sr-def">${t.def}</div>
      ${buildPlatformSection(t)}
      ${buildWhoForHtml(t)}
      ${buildUseCasesHtml(t)}
      ${buildContextHtml(t)}
      ${relatedSection}
      ${learningPathsHtml}
      <div class="sr-section-divider"></div>
      <div class="detail-actions">
        <button class="detail-copy-btn" id="detailCopyBtn" type="button" data-slug="${termSlug}">🔗 Copy link</button>
        ${sourceHtml}
      </div>
    </div>
  `;
}

// ---- Accordion detail (mobile — skips name/meta/def already shown in card) --

export function buildAccordionDetail(t) {
  const termSlug = slug(t.name);
  const relatedSection = buildRelatedSection(getRelatedItems(t), "#term-", {
    aliasLink: true,
  });
  const learningPathsHtml = buildLearningPathsSection(termSlug);

  const sourceHtml = t.source
    ? `<a class="sr-source-link" href="${t.source}" target="_blank" rel="noopener noreferrer">Official source ↗</a>`
    : "";

  return `
    <div class="detail-view accordion-detail">
      <div class="sr-close-row">
        <button class="close-btn" id="detailCloseBtn" type="button" aria-label="Close">✕</button>
      </div>
      ${buildPlatformSection(t)}
      ${buildWhoForHtml(t)}
      ${buildUseCasesHtml(t)}
      ${buildContextHtml(t)}
      ${relatedSection}
      ${learningPathsHtml}
      <div class="sr-section-divider"></div>
      <div class="detail-actions">
        <button class="detail-copy-btn" id="detailCopyBtn" type="button" data-slug="${termSlug}">🔗 Copy link</button>
        ${sourceHtml}
      </div>
    </div>
  `;
}

// ---- Inline term detail (for learning path pages) ---------------------------

export function buildInlineTermDetail(t) {
  const termSlug = slug(t.name);
  const relatedSection = buildRelatedSection(
    getRelatedItems(t),
    "../index.html#term-",
    { newTab: true },
  );

  const sourceHtml = t.source
    ? `<a class="it-source" href="${t.source}" target="_blank" rel="noopener noreferrer">Official source ↗</a>`
    : "";

  return `
    <article class="inline-term">
      <div class="it-name">${t.name}</div>
      <div class="it-meta">${buildDifficultyHtml(t)}${buildTagsHtml(t)}</div>
      <div class="it-def">${t.def}</div>
      ${buildPlatformSection(t)}
      ${buildWhoForHtml(t)}
      ${buildUseCasesHtml(t)}
      ${buildContextHtml(t)}
      ${relatedSection}
      <div class="sr-section-divider"></div>
      <div class="it-actions">
        <button class="it-copy-btn" type="button" data-slug="${termSlug}">🔗 Copy glossary link</button>
        ${sourceHtml}
        <a href="../index.html#term-${termSlug}" class="it-glossary-link" target="_blank">View in glossary ↗</a>
      </div>
    </article>
  `;
}

// ---- Compact concept cards (for Journey guide steps) -------------------------

// Small "Related Concepts"-style preview cards — a name, a one-line snippet,
// and a link out to the full page — instead of dropping the full rich detail
// view (buildInlineTermDetail) inline. A step referencing several terms would
// otherwise stack several full definitions/use-case lists/platform badges in
// a row, burying the actual instructions under reference material.
function truncate(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

// Expands in place instead of linking out — jumping to a new tab for what
// the link promises ("view the definition") is a bigger interruption than
// the action implies. The full rich detail renders inside the same card,
// toggled by the button; walkthrough.js wires the click handler.
export function buildCompactTermCard(t) {
  const termSlug = slug(t.name);
  const shortName = t.name.replace(PLATFORM_SUFFIX_RE, "");
  return `
    <div class="wt-concept-card" data-term-slug="${termSlug}">
      <div class="wt-cc-name">${shortName}</div>
      <p class="wt-cc-desc">${truncate(t.def, 110)}</p>
      <button type="button" class="wt-cc-link wt-cc-expand-btn">View full definition →</button>
      <div class="wt-cc-full" hidden>${buildInlineTermDetail(t)}</div>
    </div>
  `;
}

// Resolves a step's free-text `compare` field (e.g. "ACE") against the shared
// comparison union-find data and renders it as the same compact-card shape —
// same underlying data as the standalone Compare page, just inline.
export function buildInlineCompareRow(query) {
  const row = findComparisonRow(query);
  if (!row) return "";

  const concept = conceptLabel(row);
  const snippet = PLATFORM_KEYS.map((p) => {
    const arr = row[p];
    if (!arr?.length) return "";
    const names = arr
      .map((t) => t.name.replace(DISPLAY_SUFFIX_RE, "").trim())
      .join(", ");
    return `${p}: ${names}`;
  })
    .filter(Boolean)
    .join(" · ");

  return `
    <div class="wt-concept-card wt-concept-card--compare">
      <div class="wt-cc-name">Compare: ${concept}</div>
      <p class="wt-cc-desc">${truncate(snippet, 110)}</p>
      <a href="../comparison/" class="wt-cc-link">See full compare table →</a>
    </div>
  `;
}

// Pulls a real path preview instead of a bare link chip. If any of the
// current step's terms also appear as a step in that path, names the exact
// step number for a genuine "you are here" connection.
export function buildInlinePathCallout(pathSlug, stepTermSlugs = []) {
  const path = learningPaths.find((p) => p.slug === pathSlug);
  if (!path) return "";

  const matchIndex = path.steps.findIndex((s) =>
    stepTermSlugs.includes(s.slug),
  );

  const positionText =
    matchIndex >= 0
      ? `Step ${matchIndex + 1} of ${path.steps.length} — ${path.steps[matchIndex].why}`
      : path.description;

  return `
    <div class="wt-concept-card wt-concept-card--path">
      <div class="wt-cc-name">${path.title}</div>
      <p class="wt-cc-desc">${truncate(positionText, 110)}</p>
      <a href="../learning-paths/path.html?p=${path.slug}" class="wt-cc-link">View full path →</a>
    </div>
  `;
}

// ---- Phase-flow diagram (for Journey hub + guide pages) ---------------------

// Lightweight process-flow visualization — one per implementation phase
// (7 total, reused across every guide in that category), built as plain
// HTML/CSS boxes + arrows rather than SVG so it wraps naturally on narrow
// viewports (480px iframe) without a separate mobile layout.
const PHASE_FLOWS = {
  kickoff: [{ label: "You" }, { label: "Suger Console" }, { label: "Team & Stakeholders" }],
  integrations: [
    { label: "Suger" },
    {
      label: "Your Systems",
      satellites: ["AWS", "Azure", "GCP", "Snowflake", "CRM", "Slack"],
    },
  ],
  listings: [
    { label: "ISV / Seller" },
    { label: "Suger" },
    { label: "Marketplace Review" },
    { label: "Live Listing" },
  ],
  cosell: [
    { label: "CRM" },
    { label: "Suger" },
    { label: "Cloud Partner", satellites: ["AWS", "Azure", "GCP"] },
  ],
  cpq: [
    { label: "Seller" },
    { label: "Suger CPQ" },
    { label: "Private Offer" },
    { label: "Buyer" },
  ],
  "go-live": [
    { label: "Sandbox" },
    { label: "Production" },
    { label: "Validation" },
    { label: "Sign-off" },
  ],
  operations: [
    { label: "Suger API / Webhooks" },
    { label: "Your Systems", satellites: ["Billing", "CRM", "Automation"] },
    { label: "Marketplace" },
  ],
};

// Vanilla inline SVG, one simple line icon per actor/concept — no icon font,
// no external library. Each is a bare set of <path>/<circle> elements sized
// for a shared 24x24 stroke-based wrapper (see svgIcon below).
const ICON_PATHS = {
  person: `<circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"/>`,
  people: `<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 2.5-5.2 6-5.2s6 2.2 6 5.2"/><circle cx="17" cy="9" r="2.2"/><path d="M15.3 14.4c2.6.5 4.2 2.4 4.2 5.6"/>`,
  box: `<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3"/>`,
  plug: `<path d="M8 3v4M16 3v4"/><rect x="6" y="7" width="12" height="7" rx="2"/><path d="M12 14v4"/><path d="M9 21h6"/>`,
  building: `<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/>`,
  magnifier: `<circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/>`,
  check: `<path d="M4 12.5l5 5L20 6"/>`,
  cloud: `<path d="M6.5 18a3.5 3.5 0 0 1-1-6.9 4.5 4.5 0 0 1 8.7-1.6A3.8 3.8 0 0 1 18.5 12a3.5 3.5 0 0 1-.3 7h-11.7z"/>`,
  document: `<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9.5 12h5M9.5 15h5"/>`,
  receipt: `<path d="M6 2h12v20l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3z"/><path d="M9 7h6M9 11h6"/>`,
  flask: `<path d="M10 2h4"/><path d="M11 2v6.5L5.5 19a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L13 8.5V2"/><path d="M8 15h8"/>`,
  rocket: `<path d="M12 2c3 2 4.5 5.5 4.5 9 0 2-1 4-2 5l-1 3-1.5-2.5L10 19l-1-3c-1-1-2-3-2-5C7 7.5 9 4 12 2z"/><circle cx="12" cy="9" r="1.6"/><path d="M9 17l-2 3M15 17l2 3"/>`,
  pen: `<path d="M15 4l5 5-11 11H4v-5z"/>`,
  link: `<path d="M9 15l6-6"/><path d="M13 5.5l1-1a3.5 3.5 0 0 1 5 5l-1 1"/><path d="M11 18.5l-1 1a3.5 3.5 0 0 1-5-5l1-1"/>`,
  storefront: `<path d="M4 8l1-4h14l1 4"/><path d="M4 8v3a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0 2-2V8"/><path d="M6 13v7h12v-7"/>`,
  database: `<ellipse cx="12" cy="5" rx="7" ry="2.5"/><path d="M5 5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5"/><path d="M5 11v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6"/>`,
};

function svgIcon(key) {
  const inner = ICON_PATHS[key] || ICON_PATHS.box;
  return `<svg class="wt-flow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

// Maps each phase-flow stage label to an icon key. "Suger" consistently uses
// the same box icon across every phase so the recurring actor stays visually
// anchored; every other label gets whatever concretely represents it.
const FLOW_ICON_BY_LABEL = {
  You: "person",
  "Suger Console": "box",
  "Team & Stakeholders": "people",
  Suger: "box",
  "Your Systems": "plug",
  "ISV / Seller": "building",
  "Marketplace Review": "magnifier",
  "Live Listing": "check",
  CRM: "database",
  "Cloud Partner": "cloud",
  Seller: "building",
  "Suger CPQ": "receipt",
  "Private Offer": "document",
  Buyer: "person",
  Sandbox: "flask",
  Production: "rocket",
  Validation: "check",
  "Sign-off": "pen",
  "Suger API / Webhooks": "link",
  Marketplace: "storefront",
};

export function buildPhaseFlow(category) {
  const stages = PHASE_FLOWS[category];
  if (!stages) return "";

  const stagesHtml = stages
    .map((stage, i) => {
      const arrow =
        i > 0 ? `<div class="wt-flow-arrow" aria-hidden="true">→</div>` : "";
      const icon = svgIcon(FLOW_ICON_BY_LABEL[stage.label]);
      const stageHtml = stage.satellites
        ? `
          <div class="wt-flow-stage wt-flow-stage--cluster">
            <div class="wt-flow-icon">${icon}</div>
            <div class="wt-flow-label">${stage.label}</div>
            <div class="wt-flow-cluster">
              ${stage.satellites.map((s) => `<span class="wt-flow-chip">${s}</span>`).join("")}
            </div>
          </div>`
        : `
          <div class="wt-flow-stage">
            <div class="wt-flow-icon">${icon}</div>
            <div class="wt-flow-label">${stage.label}</div>
          </div>`;
      return arrow + stageHtml;
    })
    .join("");

  return `<div class="wt-flow" role="img" aria-label="Process flow: ${stages.map((s) => s.label).join(" → ")}">${stagesHtml}</div>`;
}
