import { terms } from "../data/terms.js";
import { slug } from "../app/render.js";

const PLATFORMS = [
  { key: "Suger" },
  { key: "AWS" },
  { key: "Azure" },
  { key: "GCP" },
  { key: "Snowflake" },
  { key: "Alibaba" },
];

const SUFFIX_RE = / — (AWS|Azure|GCP|Snowflake|Alibaba)$/;

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

// Build groups from connected components
const groups = {};
allComparableTerms.forEach((t) => {
  const root = find(t.name);
  if (!groups[root]) groups[root] = {};
  const platformMatch = t.name.match(SUFFIX_RE);
  const platformKey = platformMatch ? platformMatch[1] : "Suger";
  // First term wins per platform per group (avoids overwriting with a weaker link)
  if (!groups[root][platformKey]) groups[root][platformKey] = t;
});

// Concept label: Suger name first (plain, no suffix), then AWS, Azure, GCP...
const LABEL_PRIORITY = ["Suger", "AWS", "Azure", "GCP", "Snowflake", "Alibaba"];
function conceptLabel(byPlatform) {
  for (const p of LABEL_PRIORITY) {
    if (byPlatform[p]) return byPlatform[p].name.replace(SUFFIX_RE, "").trim();
  }
  return Object.values(byPlatform)[0].name.replace(SUFFIX_RE, "").trim();
}

// Only groups that span 2+ platforms, sorted alphabetically by concept label
const rows = Object.values(groups)
  .filter((g) => Object.keys(g).length >= 2)
  .sort((a, b) => conceptLabel(a).localeCompare(conceptLabel(b)));

// ---- Render ----

function buildTable(filter) {
  const filterLower = filter.toLowerCase();
  const visible = filter
    ? rows.filter((g) => conceptLabel(g).toLowerCase().includes(filterLower))
    : rows;

  if (visible.length === 0) {
    return `<p class="compare-empty">No concepts matched "${filter}".</p>`;
  }

  const rowsHtml = visible
    .map((byPlatform) => {
      const concept = conceptLabel(byPlatform);
      const cells = PLATFORMS.map((p) => {
        const term = byPlatform[p.key];
        if (!term)
          return `<td class="compare-cell compare-cell--absent">—</td>`;
        const termSlug = slug(term.name);
        const shortName = term.name.replace(SUFFIX_RE, "").trim();
        return `<td class="compare-cell compare-cell--${p.key.toLowerCase()}"><a href="../index.html#term-${termSlug}" class="compare-link">${shortName}</a></td>`;
      }).join("");
      return `<tr><td class="compare-concept">${concept}</td>${cells}</tr>`;
    })
    .join("");

  return `
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th class="compare-th compare-th-concept">Concept</th>
            ${PLATFORMS.map((p) => `<th class="compare-th compare-th-${p.key.toLowerCase()}">${p.key}</th>`).join("")}
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

filterEl.addEventListener("input", () => {
  tableEl.innerHTML = buildTable(filterEl.value.trim());
});
