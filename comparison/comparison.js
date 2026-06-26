import { terms } from "../data/terms.js";
import { slug } from "../app/render.js";
import { escHtml, PLATFORM_SUFFIX_RE as SUFFIX_RE } from "../app/utils.js";

const PLATFORMS = [
  { key: "Suger" },
  { key: "AWS" },
  { key: "Azure" },
  { key: "GCP" },
  { key: "Snowflake" },
  { key: "Alibaba" },
];

// Platform-suffixed terms (all hyperscalers + Snowflake + Alibaba)
const platformTerms = terms.filter((t) => SUFFIX_RE.test(t.name));

// Suger-specific terms: tagged with "suger" but NOT platform-suffixed
const sugerTerms = terms.filter(
  (t) => t.tags?.includes("suger") && !SUFFIX_RE.test(t.name),
);

const allComparableTerms = [...platformTerms, ...sugerTerms];

// ---- Union-Find ----

const parent = Object.fromEntries(
  allComparableTerms.map((t) => [t.name, t.name]),
);

function find(x) {
  if (!(x in parent)) return x;
  if (parent[x] === x) return x;
  parent[x] = find(parent[x]);
  return parent[x];
}

function union(a, b) {
  if (!(a in parent) || !(b in parent)) return;
  const ra = find(a),
    rb = find(b);
  if (ra !== rb) parent[ra] = rb;
}

// Pass 1: union platform terms that share an identical base concept name
// e.g. "Private Offer — AWS" + "Private Offer — Azure" + "Private Offer — GCP"
const byBase = {};
platformTerms.forEach((t) => {
  const base = t.name.replace(SUFFIX_RE, "").trim();
  (byBase[base] ??= []).push(t.name);
});
Object.values(byBase).forEach((names) => {
  for (let i = 1; i < names.length; i++) union(names[0], names[i]);
});

// Pass 2: union terms linked by "X equivalent: Y" patterns in alias fields
// Covers "GCP equivalent: MCPO — GCP", "Suger equivalent: Entitlement", etc.
const EQUIV_RE =
  /(?:(?:AWS|Azure|GCP|Snowflake|Alibaba|Suger)\s+)?[Ee]quivalent:\s*([^|]+?)(?=\s*\||$)/g;
allComparableTerms.forEach((t) => {
  if (!t.alias) return;
  for (const m of t.alias.matchAll(EQUIV_RE)) {
    const refName = m[1].trim();
    if (refName in parent) union(t.name, refName);
  }
});

// Pass 3: union terms linked by "AWS: X | Azure: Y | GCP: Z | Suger: W" patterns
// Covers Suger terms like: Entitlement → "AWS: Agreement — AWS | Azure: Subscription — Azure"
// Tries exact name match first; falls back to appending " — Platform" suffix for base-name refs
const PLATFORM_MAP_RE =
  /\b(AWS|Azure|GCP|Snowflake|Alibaba|Suger):\s*([^|]+?)(?=\s*\||$)/g;
allComparableTerms.forEach((t) => {
  if (!t.alias) return;
  for (const m of t.alias.matchAll(PLATFORM_MAP_RE)) {
    const platform = m[1];
    const refBase = m[2].trim();
    if (refBase in parent) {
      union(t.name, refBase);
    } else if (platform !== "Suger") {
      // e.g. alias says "AWS: Customer Identifier" but term is "Customer Identifier — AWS"
      const withSuffix = `${refBase} — ${platform}`;
      if (withSuffix in parent) union(t.name, withSuffix);
    }
  }
});

// Pass 4: union terms sharing an explicit `group` value
// Enables multi-term platform cells (e.g. all AWS funding programs in one row)
const byGroup = {};
allComparableTerms.forEach((t) => {
  if (!t.group) return;
  (byGroup[t.group] ??= []).push(t.name);
});
Object.values(byGroup).forEach((names) => {
  for (let i = 1; i < names.length; i++) union(names[0], names[i]);
});

// Build groups from connected components — collect ALL terms per platform (not first-wins)
const groups = {};
allComparableTerms.forEach((t) => {
  const root = find(t.name);
  if (!groups[root]) groups[root] = {};
  const platformMatch = t.name.match(SUFFIX_RE);
  const platformKey = platformMatch ? platformMatch[1] : "Suger";
  if (!groups[root][platformKey]) groups[root][platformKey] = [];
  groups[root][platformKey].push(t);
});

// Generic concept overrides — keyed by the platform term that would otherwise become the label.
// Use when the raw term name is platform-branded (e.g. "Amazon EventBridge", "AWS Partner Central Agents").
// The platform columns still show the hyperscaler-specific names; only the Concept column is affected.
const CONCEPT_OVERRIDES = {
  "Amazon EventBridge Marketplace Integration — AWS":
    "Subscription Lifecycle Events",
  "AWS Marketplace Management Portal (AMMP) — AWS": "Marketplace Seller Portal",
  "AWS Partner Central Agents — AWS": "AI Partner Automation",
  "AWS Partner Network (APN) — AWS": "Partner Ecosystem Program",
  "BatchMeterUsage API — AWS": "Batch Metering API",
  "Channel Partner Private Offer (CPPO) — AWS": "Channel Resale Offer",
  "End Customer Investment Funds (ECIF) — Azure": "Cloud Partner Funding",
  "Enterprise Discount Program (EDP) — AWS": "Committed Spend Drawdown",
  "ISV Accelerate — AWS": "ISV Co-sell Program",
  "ISV Workload Migration Program (WMP) — AWS": "Cloud Partner Funding",
  "Marketing Development Funds (MDF) — AWS": "Cloud Partner Funding",
  "Marketplace Private Offer Promotion Program (MPOPP) — AWS":
    "Cloud Partner Funding",
  "Migration Acceleration Program (MAP) — AWS": "Cloud Partner Funding",
  "Partner Initiative Funding (PIF) — AWS": "Cloud Partner Funding",
  "Partner Opportunity Acceleration (POA) — AWS": "Cloud Partner Funding",
  "Proof of Concept (POC) Funding  — AWS": "Cloud Partner Funding",
  "SaaS Co-sell Benefit (SCB) — AWS": "Field Co-sell Incentive",
  "Standard Contract (SCMP) — AWS": "Standard Marketplace Contract",
  "Tax Details Dashboard — AWS": "Marketplace Tax Configuration",
  "Offer Set — AWS": "Offer Set",
  "Offer Set — Suger": "Offer Set",
};

// Concept label: check override map first (all terms per platform), then Suger name, then AWS...
const LABEL_PRIORITY = ["Suger", "AWS", "Azure", "GCP", "Snowflake", "Alibaba"];
function conceptLabel(byPlatform) {
  for (const p of LABEL_PRIORITY) {
    const arr = byPlatform[p];
    if (!arr?.length) continue;
    for (const t of arr) {
      if (CONCEPT_OVERRIDES[t.name]) return CONCEPT_OVERRIDES[t.name];
    }
  }
  for (const p of LABEL_PRIORITY) {
    if (byPlatform[p]?.length)
      return byPlatform[p][0].name.replace(SUFFIX_RE, "").trim();
  }
  return Object.values(byPlatform)[0][0].name.replace(SUFFIX_RE, "").trim();
}

// Only groups that span 2+ platforms, sorted alphabetically by concept label
const rows = Object.values(groups)
  .filter((g) => Object.keys(g).length >= 2)
  .sort((a, b) => conceptLabel(a).localeCompare(conceptLabel(b)));

// ---- Render ----

function buildTable(filter) {
  const filterLower = filter.toLowerCase();
  const visible = filter
    ? rows.filter((g) => {
        if (conceptLabel(g).toLowerCase().includes(filterLower)) return true;
        return Object.values(g).some(
          (arr) => arr?.some((t) => t.name.toLowerCase().includes(filterLower))
        );
      })
    : rows;

  if (visible.length === 0) {
    return `<p class="compare-empty">No concepts matched "${escHtml(filter)}".</p>`;
  }

  const rowsHtml = visible
    .map((byPlatform) => {
      const concept = conceptLabel(byPlatform);
      const cells = PLATFORMS.map((p) => {
        const termArr = byPlatform[p.key];
        if (!termArr?.length)
          return `<td class="compare-cell compare-cell--absent">—</td>`;
        const links = termArr
          .map((term) => {
            const termSlug = slug(term.name);
            const shortName = term.name.replace(SUFFIX_RE, "").trim();
            return `<a href="../index.html#term-${termSlug}" class="compare-link">${shortName}</a>`;
          })
          .join("");
        const content =
          termArr.length > 1
            ? `<div class="compare-cell-multi">${links}</div>`
            : links;
        return `<td class="compare-cell compare-cell--${p.key.toLowerCase()}">${content}</td>`;
      }).join("");
      return `<tr><td class="compare-concept">${concept}</td>${cells}</tr>`;
    })
    .join("");

  return `
    <div class="compare-table-wrap">
      <table class="compare-table" aria-label="Cross-platform marketplace concept comparison">
        <caption class="sr-only">Cross-platform concept comparison across Suger, AWS, Azure, GCP, Snowflake, and Alibaba Cloud marketplaces.</caption>
        <thead>
          <tr>
            <th class="compare-th compare-th-concept" scope="col">Concept</th>
            ${PLATFORMS.map((p) => `<th class="compare-th compare-th-${p.key.toLowerCase()}" scope="col">${p.key}</th>`).join("")}
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
    <p class="compare-count">${visible.length} concept${visible.length !== 1 ? "s" : ""}</p>`;
}

const tableEl = document.getElementById("compareTable");
const filterEl = document.getElementById("compareFilter");

tableEl.innerHTML = buildTable("");

let filterDebounce;
filterEl.addEventListener("input", () => {
  clearTimeout(filterDebounce);
  filterDebounce = setTimeout(() => {
    tableEl.innerHTML = buildTable(filterEl.value.trim());
  }, 150);
});
