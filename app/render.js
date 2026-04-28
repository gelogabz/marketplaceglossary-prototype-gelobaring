import { tagMeta } from "../data/tags.js";
import { getActiveFilters, toggleFilter } from "./filters.js";
import { renderPills } from "./filters.js";

export function highlight(text, q) {
  if (!q) return text;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

export function slug(text) {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");
}

export function matchScore(t, q) {
  if (!q) return 0;
  const name = t.name.toLowerCase();
  if (name === q) return 4;
  if (name.startsWith(q)) return 3;
  if (name.includes(q)) return 2;
  if (t.def.toLowerCase().includes(q)) return 1;
  return 0;
}

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

function copyToClipboard(text, btn) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  const originalText = btn.innerHTML;
  btn.innerHTML = "✓ Copied";
  setTimeout(() => (btn.innerHTML = originalText), 2000);
}

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

  // Header container for Name + Copy Link
  const header = document.createElement("div");
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "flex-start";

  const nameEl = document.createElement("div");
  nameEl.className = "term-name";
  nameEl.innerHTML = highlight(t.name, q);
  header.appendChild(nameEl);

  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-link-btn";
  copyBtn.innerHTML = "🔗 Link";
  copyBtn.style.fontSize = "10px";
  copyBtn.style.padding = "2px 6px";
  copyBtn.style.borderRadius = "4px";
  copyBtn.style.border = "1px solid #e5e5ea";
  copyBtn.style.background = "#f9f9f9";
  copyBtn.style.cursor = "pointer";
  copyBtn.onclick = (e) => {
    const url = `${window.location.origin}${window.location.pathname}#term-${termSlug}`;
    copyToClipboard(url, copyBtn);
  };
  header.appendChild(copyBtn);
  card.appendChild(header);

  const defEl = document.createElement("div");
  defEl.className = "term-def";
  defEl.innerHTML = highlight(t.def, q);
  card.appendChild(defEl);

  if (t.alias) {
    const aliasEl = document.createElement("div");
    aliasEl.className = "alias";
    aliasEl.innerHTML = highlight(t.alias, q);
    card.appendChild(aliasEl);
  }

  if (t.tags && t.tags.length) {
    const tagContainer = document.createElement("div");
    tagContainer.className = "tags";
    t.tags.forEach((tag) => {
      const meta = tagMeta[tag] || { label: tag };
      const tagEl = document.createElement("span");
      tagEl.className =
        "tag tag-" + tag + (activeFilters.has(tag) ? " tag-active" : "");
      tagEl.textContent = meta.label.toUpperCase();
      tagEl.onclick = () => {
        toggleFilter(tag);
        renderPills();
      };
      tagContainer.appendChild(tagEl);
    });
    card.appendChild(tagContainer);
  }

  return card;
}
