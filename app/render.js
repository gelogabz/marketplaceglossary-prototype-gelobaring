import { tagMeta } from "../data/tags.js";
import { getActiveFilters, toggleFilter } from "./filters.js";
import { renderPills } from "./filters.js";

// ---- Helpers ----------------------------------------------------------------

export function highlight(text, q) {
    if (!q) return text;
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

export function slug(text) {
    return text.toLowerCase().replace(/\s+/g, "-");
}

export function matchScore(t, q) {
    if (!q) return 0;
    const name = t.name.toLowerCase();
    if (name === q)                          return 4; // exact
    if (name.startsWith(q))                  return 3; // starts with
    if (name.includes(q))                    return 2; // title contains
    if (t.def.toLowerCase().includes(q))     return 1; // def only
    return 0;
}

// ---- Tag style injection ----------------------------------------------------
// Generates <style> rules from tagMeta so CSS never needs manual updates.

export function injectTagStyles() {
    const rules = Object.entries(tagMeta)
        .map(([id, { bg, color }]) =>
            `.tag-${id} { background: ${bg}; color: ${color}; }`
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
    card.id = `term-${slug(t.name)}`;

    // Spotlight
    if (q) {
        const score = matchScore(t, q);
        if (score === 0) {
            card.classList.add("dimmed");
        } else if (bestMatch && t.name === bestMatch.name) {
            card.classList.add("best-match");
        }
    }

    // Name
    const nameEl = document.createElement("div");
    nameEl.className = "term-name";
    nameEl.innerHTML = highlight(t.name, q);
    card.appendChild(nameEl);

    // Definition
    const defEl = document.createElement("div");
    defEl.className = "term-def";
    defEl.innerHTML = highlight(t.def, q);
    card.appendChild(defEl);

    // Alias
    if (t.alias) {
        const aliasEl = document.createElement("div");
        aliasEl.className = "alias";
        aliasEl.innerHTML = highlight(t.alias, q);
        card.appendChild(aliasEl);
    }

    // Tags
    if (t.tags && t.tags.length) {
        const tagContainer = document.createElement("div");
        tagContainer.className = "tags";

        t.tags.forEach(tag => {
            const meta = tagMeta[tag] || { label: tag };
            const tagEl = document.createElement("span");
            tagEl.className = "tag tag-" + tag + (activeFilters.has(tag) ? " tag-active" : "");
            tagEl.textContent = meta.label.toUpperCase();
            tagEl.onclick = () => {
                toggleFilter(tag);
                renderPills();
                // render() is called by filters.js via the registered callback
            };
            tagContainer.appendChild(tagEl);
        });

        card.appendChild(tagContainer);
    }

    return card;
}
