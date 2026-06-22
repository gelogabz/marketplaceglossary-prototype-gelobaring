import { updates, lastUpdated } from "../data/whats-new.js";
import { escHtml } from "../app/utils.js";

// ── Constants ─────────────────────────────────────────────────────────────────

const PLATFORM_LABELS = {
  aws: "AWS",
  azure: "Azure",
  gcp: "GCP",
  snowflake: "Snowflake",
  suger: "Suger",
};
const TYPE_LABELS = {
  feature: "Feature",
  program: "Program",
  pricing: "Pricing",
  policy: "Policy",
  blog: "Blog",
  release: "Release",
};
const IMPACT_LABELS = { high: "High impact", medium: "Medium", low: "Low" };

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// ── Formatting helpers ────────────────────────────────────────────────────────

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

function formatMonth(dateStr) {
  const [y, m] = dateStr.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

function formatLastUpdated(iso) {
  if (!iso) return "Never updated — run: node scripts/fetch-whats-new.js";
  try {
    const d = new Date(iso);
    return `Updated ${d.toLocaleString("en-us", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })}`;
  } catch {
    return iso;
  }
}

// ── URL state ─────────────────────────────────────────────────────────────────

function getState() {
  const p = new URLSearchParams(location.search);
  return {
    platform: p.get("p") || "all",
    type: p.get("t") || "all",
    q: (p.get("q") || "").trim(),
  };
}

function pushState(state) {
  const p = new URLSearchParams();
  if (state.platform !== "all") p.set("p", state.platform);
  if (state.type !== "all") p.set("t", state.type);
  if (state.q) p.set("q", state.q);
  const qs = p.toString();
  history.replaceState(null, "", qs ? `?${qs}` : location.pathname);
}

// ── Filter ────────────────────────────────────────────────────────────────────

function filterUpdates(state) {
  return updates.filter((e) => {
    if (state.platform !== "all" && e.platformTag !== state.platform)
      return false;
    if (state.type !== "all" && e.type !== state.type) return false;
    if (state.q) {
      const q = state.q.toLowerCase();
      if (
        !e.title.toLowerCase().includes(q) &&
        !(e.summary || "").toLowerCase().includes(q)
      ) {
        return false;
      }
    }
    return true;
  });
}

// ── Grouping ──────────────────────────────────────────────────────────────────

function groupByMonth(entries) {
  const groups = new Map();
  for (const e of entries) {
    const key = e.date.slice(0, 7); // YYYY-MM
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(e);
  }
  return [...groups.entries()].sort((a, b) => b[0].localeCompare(a[0]));
}

// ── Render helpers ────────────────────────────────────────────────────────────

function externalLinkIcon() {
  return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
}

function renderCard(e) {
  const platformLabel = escHtml(PLATFORM_LABELS[e.platformTag] || e.platform);
  const typeLabel = escHtml(TYPE_LABELS[e.type] || e.type);
  const impactLabel = escHtml(IMPACT_LABELS[e.impact] || e.impact);

  return `<article class="wn-card">
    <div class="wn-card-badges">
      <span class="wn-badge wn-badge--platform wn-badge--${escHtml(e.platformTag)}">${platformLabel}</span>
      <span class="wn-badge wn-badge--type wn-badge--type-${escHtml(e.type)}">${typeLabel}</span>
      ${
        e.impact === "high"
          ? `<span class="wn-badge wn-badge--impact wn-badge--impact-${escHtml(e.impact)}">${impactLabel}</span>`
          : ""
      }
      <span class="wn-card-date">${escHtml(formatDate(e.date))}</span>
    </div>
    <h3 class="wn-card-title">${escHtml(e.title)}</h3>
    ${e.summary ? `<p class="wn-card-summary">${escHtml(e.summary)}</p>` : ""}
    <a class="wn-card-source" href="${escHtml(e.sourceUrl)}" target="_blank" rel="noopener">
      ${externalLinkIcon()} Read source
    </a>
  </article>`;
}

function renderFeed(entries) {
  const feed = document.getElementById("wnFeed");
  const countEl = document.getElementById("wnCount");
  if (countEl) {
    countEl.textContent = `${entries.length} update${entries.length !== 1 ? "s" : ""}`;
  }

  if (!entries.length) {
    feed.innerHTML = `<div class="wn-empty">
      <p>No updates match your filters.</p>
      <button class="wn-clear-btn" id="wnClearBtn">Clear all filters</button>
    </div>`;
    document.getElementById("wnClearBtn")?.addEventListener("click", () => {
      applyFilters({ platform: "all", type: "all", q: "" });
    });
    return;
  }

  const groups = groupByMonth(entries);
  feed.innerHTML = groups
    .map(([key, items]) => {
      const label = escHtml(formatMonth(key + "-01"));
      return `<section class="wn-month">
      <h2 class="wn-month-heading">
        ${label}
        <span class="wn-month-count">${items.length}</span>
      </h2>
      <div class="wn-cards">${items.map(renderCard).join("")}</div>
    </section>`;
    })
    .join("");
}

// ── Filter interaction ────────────────────────────────────────────────────────

function syncPills(state) {
  document.querySelectorAll("[data-platform]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.platform === state.platform);
  });
  document.querySelectorAll("[data-type]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.type === state.type);
  });
  const searchEl = document.getElementById("wnSearch");
  if (searchEl && searchEl.value !== state.q) searchEl.value = state.q;
}

function applyFilters(override = null) {
  const state = override ?? getState();
  if (override) pushState(state);
  syncPills(state);
  renderFeed(filterUpdates(state));
}

function initFilters() {
  document.querySelectorAll("[data-platform]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cur = getState();
      const next =
        cur.platform === btn.dataset.platform ? "all" : btn.dataset.platform;
      applyFilters({ ...cur, platform: next });
    });
  });

  document.querySelectorAll("[data-type]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cur = getState();
      const next = cur.type === btn.dataset.type ? "all" : btn.dataset.type;
      applyFilters({ ...cur, type: next });
    });
  });

  const searchEl = document.getElementById("wnSearch");
  if (searchEl) {
    let debounce;
    searchEl.addEventListener("input", () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        applyFilters({ ...getState(), q: searchEl.value.trim() });
      }, 200);
    });
    searchEl.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchEl.value = "";
        applyFilters({ ...getState(), q: "" });
      }
    });
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────

function initMeta() {
  const lastUpdatedEl = document.getElementById("wnLastUpdated");
  if (lastUpdatedEl) lastUpdatedEl.textContent = formatLastUpdated(lastUpdated);

  const statsEl = document.getElementById("wnStats");
  if (statsEl) {
    if (!updates.length) {
      statsEl.textContent = "No data yet";
    } else {
      const platforms = [...new Set(updates.map((e) => e.platform))];
      statsEl.textContent = `${updates.length} update${updates.length !== 1 ? "s" : ""} · ${platforms.join(", ")}`;
    }
  }
}

function initNoData() {
  if (updates.length > 0) return;
  const feed = document.getElementById("wnFeed");
  if (!feed) return;
  feed.innerHTML = `<div class="wn-no-data">
    <h2>No updates yet</h2>
    <p>Run the fetch script to populate this page with live marketplace updates.</p>
    <p><code>node scripts/fetch-whats-new.js</code></p>
    <p>Or trigger the <a href="https://github.com/gelogabz/marketplaceglossary-prototype-gelobaring/actions" target="_blank" rel="noopener">GitHub Actions workflow</a> manually.</p>
  </div>`;
  // Hide toolbar when there's no data
  const toolbar = document.querySelector(".wn-toolbar");
  if (toolbar) toolbar.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  initMeta();
  initNoData();
  if (updates.length) {
    initFilters();
    applyFilters();
  }
});
