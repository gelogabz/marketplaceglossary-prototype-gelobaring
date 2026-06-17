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
  portal: "Platform",
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

  const typeBadge = link.type && TYPE_LABELS[link.type]
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
    (a, b) => (TYPE_ORDER[a.type] ?? 99) - (TYPE_ORDER[b.type] ?? 99)
  );
  const count = sorted.length;
  const isOpen = openState[section.platformTag] === true;

  return `
    <section class="links-section" style="border-top: 3px solid ${accentColor}">
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

function render() {
  const root = document.getElementById("linksRoot");
  if (!root) return;

  const openState = getOpenState();
  root.innerHTML = linkSections
    .map((s) => renderSection(s, openState))
    .join("");

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
}

document.addEventListener("DOMContentLoaded", render);
