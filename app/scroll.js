import { slug } from "./render.js";

// ---- Alpha nav --------------------------------------------------------------

export function buildAlphaNav(grouped) {
  const alphaNavEl = document.getElementById("alpha-nav");
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
// Double rAF ensures we scroll after the browser has painted the new DOM.

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

  window.addEventListener("scroll", () => {
    // Active letter badge in alpha nav
    const headers = document.querySelectorAll(".alpha-header");
    let current = "";
    headers.forEach((h) => {
      if (h.getBoundingClientRect().top <= 140)
        current = h.id.replace("letter-", "");
    });
    document.querySelectorAll(".alpha-link").forEach((link) => {
      link.classList.toggle("active", link.textContent === current);
    });

    // Back to top visibility
    backToTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });

  backToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}
