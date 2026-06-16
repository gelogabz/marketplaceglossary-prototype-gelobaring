import { terms } from "./data/terms.js";
import { learningPaths } from "./data/learning-paths.js";
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
  getActivePathFilter,
  toggleFilter,
  setCategory,
  setPathFilter,
} from "./app/filters.js";
import { getFiltered, getBestMatch } from "./app/search.js";
import {
  buildAlphaNav,
  scrollToBestMatch,
  initScrollSpy,
} from "./app/scroll.js";

// ---- Constants --------------------------------------------------------------

const MOBILE_BP = 767;

// ---- Helpers ----------------------------------------------------------------

function getTermBySlug(targetSlug) {
  return terms.find((t) => slug(t.name) === targetSlug);
}

// ---- Learning path slug sets ------------------------------------------------

const pathSlugSets = Object.fromEntries(
  learningPaths.map((p) => [p.slug, new Set(p.steps.map((s) => s.slug))]),
);

function buildLPFilterButtons() {
  const container = document.getElementById("lpFilterGroup");
  if (!container) return;
  const label = document.createElement("p");
  label.className = "sidebar-group-label";
  label.textContent = "Learning Paths";
  container.appendChild(label);
  learningPaths.forEach((p) => {
    const btn = document.createElement("button");
    btn.className = "sidebar-tag-btn";
    btn.type = "button";
    btn.dataset.filterPath = p.slug;
    btn.textContent = p.title;
    container.appendChild(btn);
  });
}

// ---- DOM refs ---------------------------------------------------------------

const searchInput = document.getElementById("search");
const listEl = document.getElementById("list");
const countEl = document.getElementById("count");
const sidebarRight = document.getElementById("sidebarRight");
const sidebarRightInner = document.getElementById("sidebarRightInner");

injectTagStyles();
initScrollSpy();

// ---- Mobile search toggle ---------------------------------------------------

const topnav = document.querySelector(".topnav");
const searchToggleBtn = document.getElementById("searchToggleBtn");

const SEARCH_ICON = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
const CLOSE_ICON = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

function openMobileSearch() {
  topnav?.classList.add("search-open");
  searchToggleBtn?.setAttribute("aria-expanded", "true");
  searchToggleBtn?.setAttribute("aria-label", "Close search");
  if (searchToggleBtn) searchToggleBtn.innerHTML = CLOSE_ICON;
  searchInput?.focus();
}

function closeMobileSearch() {
  topnav?.classList.remove("search-open");
  searchToggleBtn?.setAttribute("aria-expanded", "false");
  searchToggleBtn?.setAttribute("aria-label", "Open search");
  if (searchToggleBtn) searchToggleBtn.innerHTML = SEARCH_ICON;
}

searchToggleBtn?.addEventListener("click", () => {
  if (topnav?.classList.contains("search-open")) {
    closeMobileSearch();
  } else {
    openMobileSearch();
  }
});

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
    const target = getTermBySlug(targetSlug);
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
    const target = getTermBySlug(targetSlug);
    if (!target) return;
    if (window.innerWidth <= MOBILE_BP) {
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
  const term = getTermBySlug(termSlug);
  if (!term) return;
  if (window.innerWidth <= MOBILE_BP) {
    expandAccordion(card, term);
  } else {
    if (activeTerm?.name === term.name) {
      closeDetail();
    } else {
      openDetail(term);
    }
  }
});

// ---- Card keyboard handler (Enter / Space activates focused card) -----------

listEl?.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  if (e.target.closest(".tag")) return;
  const card = e.target.closest(".term-card");
  if (!card) return;
  e.preventDefault();
  const termSlug = card.id.replace("term-", "");
  const term = getTermBySlug(termSlug);
  if (!term) return;
  if (window.innerWidth <= MOBILE_BP) {
    expandAccordion(card, term);
  } else {
    if (activeTerm?.name === term.name) {
      closeDetail();
    } else {
      openDetail(term);
    }
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
  const pathBtn = e.target.closest("[data-filter-path]");
  if (pathBtn) setPathFilter(pathBtn.dataset.filterPath);
});

// ---- Filter modal -----------------------------------------------------------

const filterToggleBtn = document.getElementById("filterToggleBtn");
const filterBadge = document.getElementById("filterBadge");
const filterBackdrop = document.getElementById("filterBackdrop");
const filterModal = document.getElementById("filterModal");
const filterModalClose = document.getElementById("filterModalClose");
const filterModalClear = document.getElementById("filterModalClear");
const filterModalSearch = document.getElementById("filterModalSearch");

function updateFilterBadge() {
  const count = getActiveFilters().size + (getActiveCategory() ? 1 : 0);
  if (filterBadge) {
    if (count > 0) {
      filterBadge.textContent = count;
      filterBadge.hidden = false;
    } else {
      filterBadge.hidden = true;
    }
  }
  if (filterToggleBtn) {
    filterToggleBtn.classList.toggle("filter-toggle-btn--active", count > 0);
  }
}

function openFilterModal() {
  if (!filterModal || !filterBackdrop) return;
  filterModal.hidden = false;
  filterBackdrop.hidden = false;
  filterToggleBtn?.setAttribute("aria-expanded", "true");
  filterModalSearch?.focus();
  document.body.style.overflow = "hidden";
}

function closeFilterModal() {
  if (!filterModal || !filterBackdrop) return;
  filterModal.hidden = true;
  filterBackdrop.hidden = true;
  filterToggleBtn?.setAttribute("aria-expanded", "false");
  if (filterModalSearch) filterModalSearch.value = "";
  applyFilterSearch("");
  document.body.style.overflow = "";
}

function applyFilterSearch(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    const text = chip.textContent.toLowerCase();
    const section = chip.closest("[data-section]");
    chip.style.display = !q || text.includes(q) ? "" : "none";
    if (section) {
      const anyVisible = [...section.querySelectorAll(".filter-chip")].some(
        (c) => c.style.display !== "none",
      );
      section.style.display = anyVisible ? "" : "none";
    }
  });
}

filterToggleBtn?.addEventListener("click", openFilterModal);
filterBackdrop?.addEventListener("click", closeFilterModal);
filterModalClose?.addEventListener("click", closeFilterModal);

filterModalClear?.addEventListener("click", () => {
  clearFilters();
});

filterModalSearch?.addEventListener("input", (e) => {
  applyFilterSearch(e.target.value);
});

filterModal?.addEventListener("click", (e) => {
  const chip = e.target.closest(".filter-chip");
  if (!chip) return;
  if (chip.dataset.filterTag) toggleFilter(chip.dataset.filterTag);
  if (chip.dataset.filterCategory) setCategory(chip.dataset.filterCategory);
});

filterModal?.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  const focusable = [
    ...filterModal.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((el) => el.offsetParent !== null);
  if (focusable.length < 2) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

// ---- Filter change ----------------------------------------------------------

onFilterChange(() => {
  renderSidebarState();
  updateFilterBadge();
  // sync modal chip active states
  document.querySelectorAll(".filter-chip[data-filter-tag]").forEach((chip) => {
    chip.classList.toggle(
      "active",
      getActiveFilters().has(chip.dataset.filterTag),
    );
  });
  document
    .querySelectorAll(".filter-chip[data-filter-category]")
    .forEach((chip) => {
      chip.classList.toggle(
        "active",
        chip.dataset.filterCategory === getActiveCategory(),
      );
    });
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
      const term = getTermBySlug(t);
      if (!term) return;
      if (window.innerWidth <= MOBILE_BP) {
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
    if (!filterModal?.hidden) {
      closeFilterModal();
      filterToggleBtn?.focus();
      return;
    }
    if (topnav?.classList.contains("search-open")) {
      closeMobileSearch();
      return;
    }
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
    let filtered = getFiltered(q);
    const activePathSlug = getActivePathFilter();
    if (activePathSlug && pathSlugSets[activePathSlug]) {
      const slugSet = pathSlugSets[activePathSlug];
      filtered = filtered.filter((t) => slugSet.has(slug(t.name)));
    }
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
      const firstLetter = t.name.match(/[A-Za-z]/);
      const letter = firstLetter ? firstLetter[0].toUpperCase() : "#";
      grouped[letter] = grouped[letter] || [];
      grouped[letter].push(t);
    });

    let isFirst = true;
    Object.keys(grouped)
      .sort((a, b) => (a === "#" ? -1 : b === "#" ? 1 : a.localeCompare(b)))
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
    if (prevExpandedId && window.innerWidth <= MOBILE_BP) {
      const card = document.getElementById(prevExpandedId);
      const termSlug = prevExpandedId.replace("term-", "");
      const term = getTermBySlug(termSlug);
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
  buildLPFilterButtons();
  loadFromURL();
  renderSidebarState();
  updateFilterBadge();
  render();

  if (window.location.hash) {
    const hashSlug = decodeURIComponent(
      window.location.hash.replace("#term-", ""),
    );
    const term = getTermBySlug(hashSlug);
    if (term) {
      setTimeout(() => {
        if (window.innerWidth <= MOBILE_BP) {
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
