import { terms } from "../data/terms.js";
import { getActiveFilters } from "./filters.js";
import { matchScore } from "./render.js";

// Fuse instance (lazy-initialized, loaded as global script in index.html)
let _fuse = null;
function getFuse() {
  if (!_fuse && typeof Fuse !== "undefined") {
    _fuse = new Fuse(terms, {
      keys: [
        { name: "name", weight: 3 },
        { name: "def", weight: 1 },
        { name: "alias", weight: 0.5 },
      ],
      threshold: 0.35,
      minMatchCharLength: 2,
      includeScore: true,
    });
  }
  return _fuse;
}

// Returns filtered + sorted terms given a query string.
// Exact substring search first; fuzzy fallback when it returns nothing.
export function getFiltered(q) {
  const activeFilters = getActiveFilters();

  let candidates = terms;
  if (q) {
    const exact = terms.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.def.toLowerCase().includes(q) ||
        (t.alias && t.alias.toLowerCase().includes(q))
    );
    if (exact.length > 0) {
      candidates = exact;
    } else {
      const fuse = getFuse();
      candidates = fuse ? fuse.search(q).map((r) => r.item) : [];
    }
  }

  if (activeFilters.size > 0) {
    candidates = candidates.filter(
      (t) => t.tags && t.tags.some((tag) => activeFilters.has(tag))
    );
  }

  return candidates;
}

export function getBestMatch(filtered, q) {
  if (!q || filtered.length === 0) return null;
  return [...filtered].sort((a, b) => matchScore(b, q) - matchScore(a, q))[0];
}
