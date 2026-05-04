import { terms } from "../data/terms.js";
import { getActiveFilters } from "./filters.js";
import { matchScore } from "./render.js";

// Subsequence fuzzy match — returns a score > 0 if all query chars appear
// in order within text, rewarding consecutive runs. Returns 0 on no match.
function fuzzyScore(text, query) {
  if (!text) return 0;
  const t = text.toLowerCase();
  const q = query.toLowerCase();
  let ti = 0, qi = 0, score = 0, consecutive = 0;
  while (ti < t.length && qi < q.length) {
    if (t[ti] === q[qi]) {
      score += 1 + consecutive;
      consecutive++;
      qi++;
    } else {
      consecutive = 0;
    }
    ti++;
  }
  return qi === q.length ? score : 0;
}

function fuzzySearch(q) {
  const results = [];
  for (const t of terms) {
    const score =
      fuzzyScore(t.name, q) * 3 +
      fuzzyScore(t.def, q) +
      fuzzyScore(t.alias, q) * 0.5;
    if (score > 0) results.push({ item: t, score });
  }
  return results.sort((a, b) => b.score - a.score).map((r) => r.item);
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
        (t.alias && t.alias.toLowerCase().includes(q)),
    );
    candidates = exact.length > 0 ? exact : fuzzySearch(q);
  }

  if (activeFilters.size > 0) {
    candidates = candidates.filter(
      (t) => t.tags && t.tags.some((tag) => activeFilters.has(tag)),
    );
  }

  return candidates;
}

export function getBestMatch(filtered, q) {
  if (!q || filtered.length === 0) return null;
  return [...filtered].sort((a, b) => matchScore(b, q) - matchScore(a, q))[0];
}
