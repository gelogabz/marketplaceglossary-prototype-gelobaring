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
const filterBar = document.getElementById("filterBar");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

document.getElementById("total-count")?.remove(); // hidden header stat, no longer needed
injectTagStyles();
initScrollSpy();

function updateCarouselArrows() {
  if (!filterBar) return;
  const atStart = filterBar.scrollLeft <= 1;
  const atEnd =
    filterBar.scrollLeft >= filterBar.scrollWidth - filterBar.clientWidth - 1;
  prevBtn?.classList.toggle("hidden", atStart);
  nextBtn?.classList.toggle("hidden", atEnd);
}

prevBtn?.addEventListener("click", () =>
  filterBar?.scrollBy({ left: -200, behavior: "smooth" }),
);
nextBtn?.addEventListener("click", () =>
  filterBar?.scrollBy({ left: 200, behavior: "smooth" }),
);
filterBar?.addEventListener("scroll", updateCarouselArrows);

// Drag-to-scroll on mobile
const drag = { active: false, moved: false, startX: 0, scrollLeft: 0 };

filterBar?.addEventListener("pointerdown", (e) => {
  drag.active = true;
  drag.moved = false;
  drag.startX = e.clientX;
  drag.scrollLeft = filterBar.scrollLeft;
});

filterBar?.addEventListener("pointermove", (e) => {
  if (!drag.active) return;
  const dx = e.clientX - drag.startX;
  if (Math.abs(dx) > 4) {
    drag.moved = true;
    filterBar.classList.add("dragging");
    filterBar.scrollLeft = drag.scrollLeft - dx;
    updateCarouselArrows();
  }
});

filterBar?.addEventListener("pointerup", () => {
  drag.active = false;
  filterBar.classList.remove("dragging");
});

filterBar?.addEventListener("pointercancel", () => {
  drag.active = false;
  filterBar.classList.remove("dragging");
});

// Prevent pill clicks from firing after a drag
filterBar?.addEventListener(
  "click",
  (e) => {
    if (drag.moved) {
      e.stopPropagation();
      drag.moved = false;
    }
  },
  true,
);

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
      listEl.innerHTML = `<p class="no-results">No terms matched your search.</p>`;
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
        const header = document.createElement("h2");
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

    if (q) {
      scrollToBestMatch(bestMatch);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    syncToURL();
  }, 100);
}

// Initial render and hash check
window.onload = () => {
  loadFromURL();
  renderPills();
  updateCarouselArrows();
  render();

  if (window.location.hash) {
    setTimeout(() => {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.transition = "background-color 1s";
        const originalBg = el.style.backgroundColor;
        el.style.backgroundColor = "#fffbe6";
        setTimeout(() => (el.style.backgroundColor = originalBg), 2000);
      }
    }, 600);
  }
};

searchInput.addEventListener("input", render);
