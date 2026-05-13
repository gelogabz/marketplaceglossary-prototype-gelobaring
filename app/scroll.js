import { slug } from "./render.js";

const TOPNAV_H = 52;

// ---- Alpha nav --------------------------------------------------------------

export function buildAlphaNav(grouped) {
  const alphaNavEl = document.getElementById("alpha-nav");
  if (!alphaNavEl) return;
  alphaNavEl.innerHTML = "";

  Object.keys(grouped)
    .sort()
    .forEach((letter) => {
      const a = document.createElement("a");
      a.className = "alpha-link";
      a.textContent = letter;
      a.onclick = (e) => {
        e.preventDefault();
        document
          .getElementById(`letter-${letter}`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      alphaNavEl.appendChild(a);
    });
}

// ---- Scroll to best match ---------------------------------------------------

export function scrollToBestMatch(bestMatch) {
  if (!bestMatch) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document
        .getElementById(`term-${slug(bestMatch.name)}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

// ---- Scroll spy -------------------------------------------------------------

export function initScrollSpy() {
  const backToTopBtn = document.getElementById("backToTop");

  function stickyHeight() {
    const alphaNavEl = document.querySelector(".alpha-nav");
    return TOPNAV_H + (alphaNavEl?.offsetHeight ?? 0);
  }

  window.addEventListener("scroll", () => {
    const threshold = stickyHeight() + 10;
    const headers = document.querySelectorAll(".alpha-header");
    let current = "";
    headers.forEach((h) => {
      if (h.getBoundingClientRect().top <= threshold)
        current = h.id.replace("letter-", "");
    });
    document.querySelectorAll(".alpha-link").forEach((link) => {
      link.classList.toggle("active", link.textContent === current);
    });

    if (backToTopBtn) {
      backToTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
    }
  });

  if (backToTopBtn) {
    backToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
