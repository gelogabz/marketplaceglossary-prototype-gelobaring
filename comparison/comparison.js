import { slug } from "../app/render.js";
import { escHtml } from "../app/utils.js";
import { rows, conceptLabel, DISPLAY_SUFFIX_RE } from "../app/compare-data.js";

const PLATFORMS = [
  { key: "Suger" },
  { key: "AWS" },
  { key: "Azure" },
  { key: "GCP" },
  { key: "Snowflake" },
  { key: "Alibaba" },
  { key: "Oracle" },
];

// Dev guard: the Concept column must stay platform-agnostic — only the platform
// cells should carry hyperscaler branding. If a new cross-link lands without a
// CONCEPT_OVERRIDES entry and its raw term name is platform-branded, warn loudly
// instead of letting it silently ship (e.g. "AWS Marketplace Catalog API — AWS").
const BRAND_LEAK_RE =
  /\b(AWS|Amazon|Azure|Microsoft|GCP|Google Cloud|Google|Snowflake|Alibaba|Oracle|Suger)\b/i;
rows.forEach((g) => {
  const label = conceptLabel(g);
  if (BRAND_LEAK_RE.test(label)) {
    console.warn(
      `[comparison] Concept label "${label}" leaks a platform brand name. ` +
        `Add a CONCEPT_OVERRIDES entry for the underlying term.`,
    );
  }
});

// ---- Render ----

function buildTable(filter) {
  const filterLower = filter.toLowerCase();
  const visible = filter
    ? rows.filter((g) => {
        if (conceptLabel(g).toLowerCase().includes(filterLower)) return true;
        return Object.values(g).some((arr) =>
          arr?.some((t) => t.name.toLowerCase().includes(filterLower)),
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
            const shortName = term.name.replace(DISPLAY_SUFFIX_RE, "").trim();
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
