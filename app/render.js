import { terms } from "../data/terms.js";
import { tagMeta } from "../data/tags.js";
import { learningPaths } from "../data/learning-paths.js";
import { getActiveFilters, toggleFilter } from "./filters.js";

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

  return card;
}

// ---- Detail view builder ----------------------------------------------------

const PLATFORMS = [
  { key: "aws", label: "AWS", cls: "pb-aws" },
  { key: "azure", label: "Azure", cls: "pb-azure" },
  { key: "gcp", label: "GCP", cls: "pb-gcp" },
  { key: "snowflake", label: "Snowflake", cls: "pb-snowflake" },
  { key: "alibaba", label: "Alibaba", cls: "pb-alibaba" },
];

function getRelatedTerms(t) {
  if (!t.alias) return [];
  return [...terms]
    .sort((a, b) => b.name.length - a.name.length)
    .filter((other) => other.name !== t.name && t.alias.includes(other.name));
}

export function buildDetailView(t) {
  const termSlug = slug(t.name);

  const difficultyHtml = t.difficulty
    ? `<span class="difficulty-badge d-${t.difficulty}">${t.difficulty}</span>`
    : "";

  const tagsHtml = (t.tags || [])
    .map((tag) => {
      const meta = tagMeta[tag] || { label: tag };
      return `<span class="detail-tag tag-${tag}">${meta.label.toUpperCase()}</span>`;
    })
    .join("");

  const platformHtml = PLATFORMS.map((p) => {
    const present = (t.tags || []).includes(p.key);
    return `<span class="pbadge ${present ? p.cls : "pb-off"}">${p.label}</span>`;
  }).join("");

  // Platform notes: use alias text if it mentions "equivalent"
  const platformNotes =
    t.alias && t.alias.toLowerCase().includes("equivalent")
      ? `<p class="platform-notes">${t.alias.replace(/\|/g, "·")}</p>`
      : "";

  const whoForHtml =
    t.whoFor && t.whoFor.length
      ? `<div class="sr-section">
           <div class="sr-section-title">Who it's for</div>
           <div class="chips">
             ${t.whoFor.map((p) => `<span class="chip">${p}</span>`).join("")}
           </div>
         </div>`
      : "";

  const useCasesHtml =
    t.useCases && t.useCases.length
      ? `<div class="sr-section">
           <div class="sr-section-title">Common use cases</div>
           <ul class="use-cases">
             ${t.useCases.map((uc) => `<li>${uc}</li>`).join("")}
           </ul>
         </div>`
      : "";

  const contextHtml =
    t.context && t.context.length
      ? `<div class="sr-section">
           <div class="sr-section-title">Where you'll encounter this</div>
           <div class="chips">
             ${t.context.map((c) => `<span class="chip chip-context">${c}</span>`).join("")}
           </div>
         </div>`
      : "";

  // Prefer explicit related array; fall back to alias parsing
  const relatedItems =
    t.related && t.related.length
      ? t.related
      : getRelatedTerms(t).map((r) => ({ name: r.name, slug: slug(r.name) }));

  const relatedSection =
    relatedItems.length > 0
      ? `<div class="sr-section">
           <div class="sr-section-title">Related terms</div>
           <div class="chips">
             ${relatedItems
               .map((r) => {
                 const shortName = r.name.replace(
                   / — (AWS|Azure|GCP|Snowflake|Alibaba)$/,
                   "",
                 );
                 return `<a href="#term-${r.slug}" class="chip chip-link alias-link">${shortName}</a>`;
               })
               .join("")}
           </div>
         </div>`
      : "";

  const termPaths = learningPaths.filter((p) =>
    p.steps.some((s) => s.slug === termSlug),
  );
  const learningPathsHtml =
    termPaths.length > 0
      ? `<div class="sr-section">
           <div class="sr-section-title">Learning paths</div>
           <div class="chips">
             ${termPaths
               .map(
                 (p) =>
                   `<a href="learning-paths/path.html?p=${p.slug}" class="chip chip-link">${p.title} →</a>`,
               )
               .join("")}
           </div>
         </div>`
      : "";

  const sourceHtml = t.source
    ? `<a class="sr-source-link" href="${t.source}" target="_blank" rel="noopener noreferrer">Official source ↗</a>`
    : "";

  return `
    <div class="detail-view">
      <div class="sr-close-row">
        <button class="close-btn" id="detailCloseBtn" type="button" aria-label="Close detail panel">✕</button>
      </div>

      <div class="sr-name">${t.name}</div>
      <div class="sr-meta">${difficultyHtml}${tagsHtml}</div>

      <div class="sr-def">${t.def}</div>

      <div class="sr-section">
        <div class="sr-section-title">Platform availability</div>
        <div class="platform-row">${platformHtml}</div>
        ${platformNotes}
      </div>

      ${whoForHtml}
      ${useCasesHtml}
      ${contextHtml}
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

  const difficultyHtml = t.difficulty
    ? `<span class="difficulty-badge d-${t.difficulty}">${t.difficulty}</span>`
    : "";

  const tagsHtml = (t.tags || [])
    .map((tag) => {
      const meta = tagMeta[tag] || { label: tag };
      return `<span class="detail-tag tag-${tag}">${meta.label.toUpperCase()}</span>`;
    })
    .join("");

  const platformHtml = PLATFORMS.map((p) => {
    const present = (t.tags || []).includes(p.key);
    return `<span class="pbadge ${present ? p.cls : "pb-off"}">${p.label}</span>`;
  }).join("");

  const platformNotes =
    t.alias && t.alias.toLowerCase().includes("equivalent")
      ? `<p class="platform-notes">${t.alias.replace(/\|/g, "·")}</p>`
      : "";

  const whoForHtml =
    t.whoFor && t.whoFor.length
      ? `<div class="sr-section">
           <div class="sr-section-title">Who it's for</div>
           <div class="chips">
             ${t.whoFor.map((p) => `<span class="chip">${p}</span>`).join("")}
           </div>
         </div>`
      : "";

  const useCasesHtml =
    t.useCases && t.useCases.length
      ? `<div class="sr-section">
           <div class="sr-section-title">Common use cases</div>
           <ul class="use-cases">
             ${t.useCases.map((uc) => `<li>${uc}</li>`).join("")}
           </ul>
         </div>`
      : "";

  const contextHtml =
    t.context && t.context.length
      ? `<div class="sr-section">
           <div class="sr-section-title">Where you'll encounter this</div>
           <div class="chips">
             ${t.context.map((c) => `<span class="chip chip-context">${c}</span>`).join("")}
           </div>
         </div>`
      : "";

  const relatedItems =
    t.related && t.related.length
      ? t.related
      : getRelatedTerms(t).map((r) => ({ name: r.name, slug: slug(r.name) }));

  const relatedSection =
    relatedItems.length > 0
      ? `<div class="sr-section">
           <div class="sr-section-title">Related terms</div>
           <div class="chips">
             ${relatedItems
               .map((r) => {
                 const shortName = r.name.replace(
                   / — (AWS|Azure|GCP|Snowflake|Alibaba)$/,
                   "",
                 );
                 return `<a href="../index.html#term-${r.slug}" class="chip chip-link" target="_blank">${shortName}</a>`;
               })
               .join("")}
           </div>
         </div>`
      : "";

  const sourceHtml = t.source
    ? `<a class="it-source" href="${t.source}" target="_blank" rel="noopener noreferrer">Official source ↗</a>`
    : "";

  return `
    <article class="inline-term">
      <div class="it-name">${t.name}</div>
      <div class="it-meta">${difficultyHtml}${tagsHtml}</div>
      <div class="it-def">${t.def}</div>

      <div class="sr-section">
        <div class="sr-section-title">Platform availability</div>
        <div class="platform-row">${platformHtml}</div>
        ${platformNotes}
      </div>

      ${whoForHtml}
      ${useCasesHtml}
      ${contextHtml}
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
