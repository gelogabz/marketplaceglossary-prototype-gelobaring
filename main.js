import { terms } from "./data/terms.js";
import { injectTagStyles, buildCard, slug } from "./app/render.js";
import { renderPills, clearFilters, onFilterChange } from "./app/filters.js";
import { getFiltered, getBestMatch } from "./app/search.js";
import { buildAlphaNav, scrollToBestMatch, initScrollSpy } from "./app/scroll.js";

// ---- Elements ---------------------------------------------------------------

const searchInput  = document.getElementById("search");
const listEl       = document.getElementById("list");
const countEl      = document.getElementById("count");

// ---- Init -------------------------------------------------------------------

document.getElementById("total-count").textContent = terms.length;
injectTagStyles();
initScrollSpy();

// Wire filter changes → re-render
onFilterChange(render);

// Expose clearFilters globally for the inline onclick on the Clear button
window.clearFilters = clearFilters;

// Keyboard shortcut: / focuses search
document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
});

// ---- Render -----------------------------------------------------------------

let debounceTimer;

function render() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const q = searchInput.value.trim().toLowerCase();
        const filtered = getFiltered(q);
        const bestMatch = getBestMatch(filtered, q);

        // Count
        countEl.textContent = filtered.length === terms.length
            ? `${terms.length} terms`
            : `Showing ${filtered.length} of ${terms.length} terms`;

        listEl.innerHTML = "";

        if (filtered.length === 0) {
            listEl.innerHTML = `<div class="no-results">No terms matched your search.</div>`;
            document.getElementById("alpha-nav").innerHTML = "";
            return;
        }

        // Group by first letter
        const grouped = {};
        filtered.forEach(t => {
            const letter = t.name[0].toUpperCase();
            grouped[letter] = grouped[letter] || [];
            grouped[letter].push(t);
        });

        // Build cards
        let isFirst = true;
        Object.keys(grouped).sort().forEach(letter => {
            const header = document.createElement("div");
            header.className = "alpha-header" + (isFirst ? " alpha-first" : "");
            header.id = `letter-${letter}`;
            header.textContent = letter;
            listEl.appendChild(header);
            isFirst = false;

            grouped[letter].forEach(t => {
                listEl.appendChild(buildCard(t, q, bestMatch));
            });
        });

        buildAlphaNav(grouped);
        scrollToBestMatch(bestMatch);
    }, 100);
}

// ---- Start ------------------------------------------------------------------

renderPills();
render();

searchInput.addEventListener("input", render);
