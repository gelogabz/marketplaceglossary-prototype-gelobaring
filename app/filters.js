// ---- State ------------------------------------------------------------------

const activeFilters = new Set();
let activeCategory = null;
let activePathFilter = null;
let onChangeCallback = null;

export function getActiveFilters() {
  return activeFilters;
}

export function getActiveCategory() {
  return activeCategory;
}

export function getActivePathFilter() {
  return activePathFilter;
}

export function toggleFilter(tag) {
  activeFilters.has(tag) ? activeFilters.delete(tag) : activeFilters.add(tag);
  activePathFilter = null;
  if (onChangeCallback) onChangeCallback();
}

export function setCategory(cat) {
  activeCategory = activeCategory === cat ? null : cat;
  activePathFilter = null;
  if (onChangeCallback) onChangeCallback();
}

export function setPathFilter(pSlug) {
  const selecting = activePathFilter !== pSlug;
  activePathFilter = selecting ? pSlug : null;
  if (selecting) {
    activeFilters.clear();
    activeCategory = null;
  }
  if (onChangeCallback) onChangeCallback();
}

export function clearFilters() {
  activeFilters.clear();
  activeCategory = null;
  activePathFilter = null;
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
    btn.classList.toggle(
      "active",
      btn.dataset.filterCategory === activeCategory,
    );
  });

  document.querySelectorAll("[data-filter-path]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filterPath === activePathFilter);
  });

  const noFilters =
    activeFilters.size === 0 &&
    activeCategory === null &&
    activePathFilter === null;

  const allBtn = document.getElementById("sidebarAllBtn");
  if (allBtn) allBtn.classList.toggle("active", noFilters);

  const clearBtn = document.getElementById("clearBtn");
  if (clearBtn) clearBtn.classList.toggle("visible", !noFilters);
}
