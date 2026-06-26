import { linkSections } from "../data/links.js";
import { escHtml } from "../app/utils.js";

const STORAGE_KEY = "gtm-links-open";

const PLATFORM_COLORS = {
  suger: "#F26A1C",
  aws: "#8a5700",
  azure: "#0b4f9e",
  gcp: "#1b5e20",
  snowflake: "#0c4f7a",
  alibaba: "#8c3d00",
};

const TYPE_LABELS = {
  portal: "Portal",
  program: "Program",
  doc: "Doc",
  blog: "Blog",
};

const TYPE_ORDER = { portal: 0, program: 1, doc: 2, blog: 3 };

function getOpenState() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch (_) {
    return {};
  }
}

function setOpenState(state) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderConfusesWith(c) {
  return `
    <div class="link-confuse-callout">
      <span class="confuse-label">Don't confuse with:</span>
      <a class="confuse-link" href="${escHtml(c.otherUrl)}" target="_blank" rel="noopener">${escHtml(c.otherTitle)} ↗</a>
      <p class="confuse-note">${escHtml(c.note)}</p>
    </div>`;
}

function renderLinkRow(link) {
  let domain = "";
  try {
    domain = new URL(link.url).hostname;
  } catch (_) {}

  const typeBadge =
    link.type && TYPE_LABELS[link.type]
      ? `<span class="link-type-badge link-type-${escHtml(link.type)}">${TYPE_LABELS[link.type]}</span>`
      : "";

  return `
    <li class="link-row">
      <div class="link-row-title-line">
        <span class="link-row-title">
          <a href="${escHtml(link.url)}" target="_blank" rel="noopener">${escHtml(link.title)} ↗</a>
        </span>
        ${typeBadge}
        ${domain ? `<span class="link-row-domain">${escHtml(domain)}</span>` : ""}
      </div>
      <p class="link-row-desc">${escHtml(link.desc)}</p>
      ${link.confusesWith ? renderConfusesWith(link.confusesWith) : ""}
    </li>`;
}

function renderSection(section, openState) {
  const accentColor = PLATFORM_COLORS[section.platformTag] || "#444441";
  const sorted = [...section.links].sort(
    (a, b) => (TYPE_ORDER[a.type] ?? 99) - (TYPE_ORDER[b.type] ?? 99),
  );
  const count = sorted.length;
  const isOpen = openState[section.platformTag] !== false;

  return `
    <section class="links-section" id="links-section-${escHtml(section.platformTag)}" style="border-top: 3px solid ${accentColor}">
      <h2 class="links-section-title-wrapper">
        <button class="links-section-header" type="button" aria-expanded="${isOpen}" data-platform="${escHtml(section.platformTag)}">
          <span class="links-section-title">${escHtml(section.platform)}</span>
          <span class="links-count">${count} link${count !== 1 ? "s" : ""}</span>
          <span class="links-chevron" aria-hidden="true"></span>
        </button>
      </h2>
      <ul class="link-list"${isOpen ? "" : " hidden"}>
        ${sorted.map(renderLinkRow).join("")}
      </ul>
    </section>`;
}

function applySearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    const state = getOpenState();
    document.querySelectorAll(".links-section").forEach((section) => {
      const btn = section.querySelector(".links-section-header");
      const list = section.querySelector(".link-list");
      section.hidden = false;
      section.querySelectorAll(".link-row").forEach((r) => (r.hidden = false));
      const isOpen = btn ? state[btn.dataset.platform] !== false : true;
      if (btn) btn.setAttribute("aria-expanded", String(isOpen));
      if (list) {
        if (isOpen) list.removeAttribute("hidden");
        else list.setAttribute("hidden", "");
      }
    });
    const empty = document.querySelector(".links-empty");
    if (empty) empty.remove();
    return;
  }

  let totalVisible = 0;
  document.querySelectorAll(".links-section").forEach((section) => {
    const btn = section.querySelector(".links-section-header");
    const list = section.querySelector(".link-list");
    let count = 0;
    section.querySelectorAll(".link-row").forEach((row) => {
      const match = row.textContent.toLowerCase().includes(q);
      row.hidden = !match;
      if (match) count++;
    });
    if (count > 0) {
      section.hidden = false;
      totalVisible += count;
      if (btn) btn.setAttribute("aria-expanded", "true");
      if (list) list.removeAttribute("hidden");
    } else {
      section.hidden = true;
    }
  });

  const root = document.getElementById("linksRoot");
  let empty = root.querySelector(".links-empty");
  if (totalVisible === 0) {
    if (!empty) {
      empty = document.createElement("p");
      empty.className = "links-empty";
      root.appendChild(empty);
    }
    empty.textContent = `No links matched "${query}".`;
  } else {
    if (empty) empty.remove();
  }
}

function render() {
  const root = document.getElementById("linksRoot");
  if (!root) return;

  const openState = getOpenState();
  root.innerHTML = linkSections
    .map((s) => renderSection(s, openState))
    .join("");

  // Total count + jump-nav
  const totalLinks = linkSections.reduce((n, s) => n + s.links.length, 0);
  const countEl = document.getElementById("linksTotalCount");
  if (countEl) countEl.textContent = `${totalLinks} links across ${linkSections.length} platforms`;

  const jumpNav = document.getElementById("linksJumpNav");
  if (jumpNav) {
    jumpNav.innerHTML = linkSections
      .map((s) => `<a class="links-jump-link" href="#links-section-${escHtml(s.platformTag)}">${escHtml(s.platform)}</a>`)
      .join("");
  }

  root.addEventListener("click", (e) => {
    const btn = e.target.closest(".links-section-header");
    if (!btn) return;

    const platform = btn.dataset.platform;
    const expanded = btn.getAttribute("aria-expanded") === "true";
    const list = btn.closest(".links-section").querySelector(".link-list");

    btn.setAttribute("aria-expanded", String(!expanded));
    if (!expanded) {
      list.removeAttribute("hidden");
    } else {
      list.setAttribute("hidden", "");
    }

    const state = getOpenState();
    state[platform] = !expanded;
    setOpenState(state);
  });

  // Search
  const searchEl = document.getElementById("linksSearch");
  if (searchEl) {
    searchEl.addEventListener("input", (e) => applySearch(e.target.value));
  }
}

document.addEventListener("DOMContentLoaded", render);
