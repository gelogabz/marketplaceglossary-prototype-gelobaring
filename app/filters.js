// ---- State ------------------------------------------------------------------

const activeFilters = new Set();
let activeCategory = null;
let onChangeCallback = null;

export function getActiveFilters() {
  return activeFilters;
}

export function getActiveCategory() {
  return activeCategory;
}

export function toggleFilter(tag) {
  activeFilters.has(tag) ? activeFilters.delete(tag) : activeFilters.add(tag);
  if (onChangeCallback) onChangeCallback();
}

export function setCategory(cat) {
  activeCategory = activeCategory === cat ? null : cat;
  if (onChangeCallback) onChangeCallback();
}

export function clearFilters() {
  activeFilters.clear();
  activeCategory = null;
  if (onChangeCallback) onChangeCallback();
}

export function onFilterChange(fn) {
  onChangeCallback = fn;
}

// ---- Sidebar state ----------------------------------------------------------

export function renderSidebarState() {
  document.querySelectorAll("[data-filter-tag]").forEach((btn) => {
    btn.classList.toggle("active", activeFilters.has(btn.dataset.filterTag));
  });

  document.querySelectorAll("[data-filter-category]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filterCategory === activeCategory);
  });

  const allBtn = document.getElementById("sidebarAllBtn");
  if (allBtn) allBtn.classList.toggle("active", activeFilters.size === 0 && activeCategory === null);

  const clearBtn = document.getElementById("clearBtn");
  if (clearBtn) clearBtn.classList.toggle("visible", activeFilters.size > 0 || activeCategory !== null);
}
