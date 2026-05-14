import { terms } from "./data/terms.js";
import {
  injectTagStyles,
  buildCard,
  buildDetailView,
  buildAccordionDetail,
  copyToClipboard,
  slug,
} from "./app/render.js";
import {
  renderSidebarState,
  clearFilters,
  onFilterChange,
  getActiveFilters,
  getActiveCategory,
  toggleFilter,
  setCategory,
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
const sidebarRight = document.getElementById("sidebarRight");
const sidebarRightInner = document.getElementById("sidebarRightInner");

injectTagStyles();
initScrollSpy();

// ---- Active term ------------------------------------------------------------

let activeTerm = null;

function openDetail(term) {
  activeTerm = term;
  if (!sidebarRightInner || !sidebarRight) return;
  sidebarRightInner.innerHTML = buildDetailView(term);
  sidebarRight.classList.add("open");
  document.querySelectorAll(".term-card").forEach((c) => {
    c.classList.toggle("active", c.id === `term-${slug(term.name)}`);
  });
}

function closeDetail() {
  activeTerm = null;
  sidebarRight?.classList.remove("open");
  document
    .querySelectorAll(".term-card")
    .forEach((c) => c.classList.remove("active"));
}

// ---- Accordion (mobile inline detail) ---------------------------------------

let expandedCard = null;

function collapseAccordion() {
  if (!expandedCard) return;
  expandedCard.classList.remove("term-card--expanded");
  const panel = expandedCard.nextElementSibling;
  if (panel?.classList.contains("term-accordion")) panel.remove();
  expandedCard = null;
}

function expandAccordion(card, term, skipScroll = false) {
  if (expandedCard === card) {
    collapseAccordion();
    return;
  }
  collapseAccordion();
  expandedCard = card;
  card.classList.add("term-card--expanded");
  const panel = document.createElement("div");
  panel.className = "term-accordion";
  panel.innerHTML = buildAccordionDetail(term);
  card.after(panel);
  if (!skipScroll) {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ---- Sidebar right delegation -----------------------------------------------

sidebarRight?.addEventListener("click", (e) => {
  if (e.target.closest("#detailCloseBtn")) {
    closeDetail();
    return;
  }

  const copyBtn = e.target.closest("#detailCopyBtn");
  if (copyBtn) {
    const s = copyBtn.dataset.slug;
    const url = `${window.location.origin}${window.location.pathname}#term-${s}`;
    copyToClipboard(url, copyBtn);
    return;
  }

  const aliasLink = e.target.closest(".alias-link");
  if (aliasLink) {
    e.preventDefault();
    const href = aliasLink.getAttribute("href");
    const targetSlug = href?.replace("#term-", "");
    const target = terms.find((t) => slug(t.name) === targetSlug);
    if (target) openDetail(target);
  }
});

// ---- List delegation --------------------------------------------------------

listEl?.addEventListener("click", (e) => {
  if (e.target.closest(".tag")) return;

  if (e.target.closest("#detailCloseBtn")) {
    collapseAccordion();
    return;
  }

  const copyBtn = e.target.closest("#detailCopyBtn");
  if (copyBtn) {
    const s = copyBtn.dataset.slug;
    const url = `${window.location.origin}${window.location.pathname}#term-${s}`;
    copyToClipboard(url, copyBtn);
    return;
  }

  const aliasLink = e.target.closest(".alias-link");
  if (aliasLink) {
    e.preventDefault();
    const href = aliasLink.getAttribute("href");
    const targetSlug = href?.replace("#term-", "");
    const target = terms.find((t) => slug(t.name) === targetSlug);
    if (!target) return;
    if (window.innerWidth <= 767) {
      const targetCard = document.getElementById(`term-${targetSlug}`);
      if (targetCard) expandAccordion(targetCard, target);
    } else {
      openDetail(target);
    }
    return;
  }

  const card = e.target.closest(".term-card");
  if (!card) return;
  const termSlug = card.id.replace("term-", "");
  const term = terms.find((t) => slug(t.name) === termSlug);
  if (!term) return;
  if (window.innerWidth <= 767) {
    expandAccordion(card, term);
  } else {
    openDetail(term);
  }
});

// ---- Sidebar left delegation ------------------------------------------------

document.getElementById("sidebarLeft")?.addEventListener("click", (e) => {
  if (e.target.closest("#sidebarAllBtn") || e.target.closest("#clearBtn")) {
    clearFilters();
    return;
  }
  const tagBtn = e.target.closest("[data-filter-tag]");
  if (tagBtn) toggleFilter(tagBtn.dataset.filterTag);
  const catBtn = e.target.closest("[data-filter-category]");
  if (catBtn) setCategory(catBtn.dataset.filterCategory);
});

// ---- Filter change ----------------------------------------------------------

onFilterChange(() => {
  renderSidebarState();
  render();
});

// ---- URL state --------------------------------------------------------------

function syncToURL() {
  const q = searchInput.value.trim();
  const filters = getActiveFilters();
  const cat = getActiveCategory();
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (filters.size > 0) params.set("f", [...filters].sort().join(","));
  if (cat) params.set("c", cat);
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
  const t = params.get("t");

  if (t) {
    // Open via ?t= after render completes (600ms covers the 100ms debounce + DOM build)
    setTimeout(() => {
      const term = terms.find((tt) => slug(tt.name) === t);
      if (!term) return;
      if (window.innerWidth <= 767) {
        const card = document.getElementById(`term-${t}`);
        if (card) expandAccordion(card, term);
      } else {
        openDetail(term);
      }
    }, 600);
    return;
  }

  const q = params.get("q");
  const f = params.get("f");
  const c = params.get("c");
  if (q) searchInput.value = q;
  if (f)
    f.split(",")
      .filter(Boolean)
      .forEach((tag) => toggleFilter(tag));
  if (c) setCategory(c);
}

// ---- Keyboard shortcuts -----------------------------------------------------

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDetail();
    collapseAccordion();
  }
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
    const prevExpandedId = expandedCard?.id;
    expandedCard = null; // stale reference; DOM is being rebuilt

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
      const alphaNavEl = document.getElementById("alpha-nav");
      if (alphaNavEl) alphaNavEl.innerHTML = "";
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

    // Re-apply desktop active state after re-render
    if (activeTerm) {
      document
        .getElementById(`term-${slug(activeTerm.name)}`)
        ?.classList.add("active");
    }

    // Re-expand mobile accordion if the term is still visible
    if (prevExpandedId && window.innerWidth <= 767) {
      const card = document.getElementById(prevExpandedId);
      const termSlug = prevExpandedId.replace("term-", "");
      const term = terms.find((t) => slug(t.name) === termSlug);
      if (card && term) expandAccordion(card, term, true);
    }

    buildAlphaNav(grouped);

    if (q) {
      scrollToBestMatch(bestMatch);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    syncToURL();
  }, 100);
}

// ---- Init -------------------------------------------------------------------

window.onload = () => {
  loadFromURL();
  renderSidebarState();
  render();

  if (window.location.hash) {
    const hashSlug = window.location.hash.replace("#term-", "");
    const term = terms.find((t) => slug(t.name) === hashSlug);
    if (term) {
      setTimeout(() => {
        if (window.innerWidth <= 767) {
          const card = document.getElementById(`term-${hashSlug}`);
          if (card) expandAccordion(card, term);
        } else {
          openDetail(term);
          document
            .getElementById(`term-${hashSlug}`)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 600);
    }
  }
};

searchInput.addEventListener("input", render);

// ---- Popstate ---------------------------------------------------------------

window.addEventListener("popstate", () => {
  collapseAccordion();
  loadFromURL();
  render();
});
