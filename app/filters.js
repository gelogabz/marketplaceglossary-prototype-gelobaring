import { terms } from "../data/terms.js";
import { tagMeta } from "../data/tags.js";

// ---- State ------------------------------------------------------------------

const activeFilters = new Set();
let onChangeCallback = null;

export function getActiveFilters() {
  return activeFilters;
}

export function toggleFilter(tag) {
  activeFilters.has(tag) ? activeFilters.delete(tag) : activeFilters.add(tag);
  if (onChangeCallback) onChangeCallback();
}

export function clearFilters() {
  activeFilters.clear();
  renderPills();
  if (onChangeCallback) onChangeCallback();
}

// Register a callback to run whenever filters change (wired up in main.js)
export function onFilterChange(fn) {
  onChangeCallback = fn;
}

// ---- Pills ------------------------------------------------------------------

export function renderPills() {
  const filterBar = document.getElementById("filterBar");
  const clearBtn = document.getElementById("clearBtn");

  // Collect all tags actually used across terms, sorted by tagMeta order then alpha
  const usedTags = [...new Set(terms.flatMap((t) => t.tags || []))].sort(
    (a, b) => {
      const order = Object.keys(tagMeta);
      const ai = order.indexOf(a),
        bi = order.indexOf(b);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return a.localeCompare(b);
    },
  );

  filterBar.innerHTML = "";

  usedTags.forEach((tag) => {
    const meta = tagMeta[tag] || { label: tag };
    const pill = document.createElement("div");
    pill.className = "filter-pill" + (activeFilters.has(tag) ? " active" : "");
    pill.textContent = meta.label.toUpperCase();
    pill.onclick = () => {
      toggleFilter(tag);
      renderPills();
    };
    filterBar.appendChild(pill);
  });

  clearBtn.style.display = activeFilters.size > 0 ? "inline-block" : "none";
}
