import { terms } from "./data/terms.js";
import { injectTagStyles, buildCard, slug } from "./app/render.js";
import {
  renderPills,
  clearFilters,
  onFilterChange,
  getActiveFilters,
  toggleFilter,
} from "./app/filters.js";
import { getFiltered, getBestMatch } from "./app/search.js";
import {
  buildAlphaNav,
  scrollToBestMatch,
  initScrollSpy,
} from "./app/scroll.js";

const searchInput = document.getElementById("search");
const listEl = document.getElementById("list");
const countEl = document.getElementById("count");

document.getElementById("total-count").textContent = terms.length;
injectTagStyles();
initScrollSpy();

onFilterChange(render);
window.clearFilters = clearFilters;

function syncToURL() {
  const q = searchInput.value.trim();
  const filters = getActiveFilters();
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (filters.size > 0) params.set("f", [...filters].sort().join(","));
  const qs = params.toString();
  history.replaceState(
    null,
    "",
    qs
      ? `?${qs}${window.location.hash}`
      : window.location.pathname + window.location.hash,
  );
}

function loadFromURL() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  const f = params.get("f");
  if (q) searchInput.value = q;
  if (f)
    f.split(",")
      .filter(Boolean)
      .forEach((tag) => toggleFilter(tag));
}

document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});

let debounceTimer;
function render() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = getFiltered(q);
    const bestMatch = getBestMatch(filtered, q);

    if (countEl) {
      countEl.textContent =
        filtered.length === terms.length
          ? `${terms.length} terms`
          : `Showing ${filtered.length} of ${terms.length} terms`;
    }

    if (!listEl) return;
    listEl.innerHTML = "";

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="no-results">No terms matched your search.</div>`;
      const alphaNav = document.getElementById("alpha-nav");
      if (alphaNav) alphaNav.innerHTML = "";
      return;
    }

    const grouped = {};
    filtered.forEach((t) => {
      const letter = t.name[0].toUpperCase();
      grouped[letter] = grouped[letter] || [];
      grouped[letter].push(t);
    });

    let isFirst = true;
    Object.keys(grouped)
      .sort()
      .forEach((letter) => {
        const header = document.createElement("div");
        header.className = "alpha-header" + (isFirst ? " alpha-first" : "");
        header.id = `letter-${letter}`;
        header.textContent = letter;
        listEl.appendChild(header);
        isFirst = false;

        grouped[letter].forEach((t) => {
          listEl.appendChild(buildCard(t, q, bestMatch));
        });
      });

    buildAlphaNav(grouped);

    // Only scroll if we have a search query
    if (q) scrollToBestMatch(bestMatch);
    syncToURL();
  }, 100);
}

// Initial Render and Hash Check
window.onload = () => {
  loadFromURL();
  renderPills();
  render();

  // Support for deep linking on load
  if (window.location.hash) {
    // Use a slightly longer timeout to ensure the DOM is fully rendered
    // and the browser's layout engine has caught up.
    setTimeout(() => {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        // Optional: add a temporary highlight class to make it pop
        el.style.transition = "background-color 1s";
        const originalBg = el.style.backgroundColor;
        el.style.backgroundColor = "#fffbe6"; // Light yellow highlight
        setTimeout(() => (el.style.backgroundColor = originalBg), 2000);
      }
    }, 600);
  }
};

searchInput.addEventListener("input", render);
