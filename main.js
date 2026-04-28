import { terms } from "./data/terms.js";
import { injectTagStyles, buildCard, slug } from "./app/render.js";
import { renderPills, clearFilters, onFilterChange } from "./app/filters.js";
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

    countEl.textContent =
      filtered.length === terms.length
        ? `${terms.length} terms`
        : `Showing ${filtered.length} of ${terms.length} terms`;

    listEl.innerHTML = "";

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="no-results">No terms matched your search.</div>`;
      document.getElementById("alpha-nav").innerHTML = "";
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
  }, 100);
}

// Initial Render and Hash Check
window.onload = () => {
  renderPills();
  render();

  // Support for deep linking on load
  if (window.location.hash) {
    setTimeout(() => {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  }
};

searchInput.addEventListener("input", render);
