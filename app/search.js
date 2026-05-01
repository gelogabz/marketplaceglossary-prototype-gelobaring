import { terms } from "../data/terms.js";
import { getActiveFilters } from "./filters.js";
import { matchScore } from "./render.js";

// Returns filtered + sorted terms given a query string.
// Title matches always rank above definition-only matches.

export function getFiltered(q) {
  const activeFilters = getActiveFilters();

  return terms.filter((t) => {
    const matchesSearch =
      !q ||
      t.name.toLowerCase().includes(q) ||
      t.def.toLowerCase().includes(q) ||
      (t.alias && t.alias.toLowerCase().includes(q));

    const matchesFilter =
      activeFilters.size === 0 ||
      (t.tags && t.tags.some((tag) => activeFilters.has(tag)));

    return matchesSearch && matchesFilter;
  });
}

export function getBestMatch(filtered, q) {
  if (!q || filtered.length === 0) return null;
  return [...filtered].sort((a, b) => matchScore(b, q) - matchScore(a, q))[0];
}
