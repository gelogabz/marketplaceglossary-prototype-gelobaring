function initMobileNav() {
  const inner = document.querySelector(".topnav-inner");
  const linkContainer = document.querySelector(".topnav-links");
  if (!inner || !linkContainer) return;

  const btn = document.createElement("button");
  btn.className = "nav-hamburger";
  btn.type = "button";
  btn.setAttribute("aria-label", "Toggle navigation menu");
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "navDropdown");
  btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="1" y="3" width="16" height="2" rx="1" fill="currentColor"/>
        <rect x="1" y="8" width="16" height="2" rx="1" fill="currentColor"/>
        <rect x="1" y="13" width="16" height="2" rx="1" fill="currentColor"/>
    </svg>`;
  inner.insertBefore(btn, linkContainer);

  const topnav = document.querySelector(".topnav");
  const dropdown = document.createElement("nav");
  dropdown.className = "nav-dropdown";
  dropdown.id = "navDropdown";
  dropdown.setAttribute("hidden", "");
  dropdown.setAttribute("aria-label", "Site navigation");
  linkContainer.querySelectorAll("a").forEach((link) => {
    dropdown.appendChild(link.cloneNode(true));
  });
  topnav.insertAdjacentElement("afterend", dropdown);

  function open() {
    dropdown.removeAttribute("hidden");
    btn.setAttribute("aria-expanded", "true");
  }
  function close() {
    dropdown.setAttribute("hidden", "");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", () => {
    btn.getAttribute("aria-expanded") === "true" ? close() : open();
  });
  dropdown.addEventListener("click", (e) => {
    if (e.target.tagName === "A") close();
  });
  document.addEventListener("click", (e) => {
    if (!topnav.contains(e.target) && !dropdown.contains(e.target)) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
      close();
      btn.focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", initMobileNav);
