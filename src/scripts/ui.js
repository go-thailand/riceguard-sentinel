// RiceGuard Sentinel — UI behaviour: mobile menu, modal system, scroll reveal.

/* ---------------- Mobile menu ---------------- */
(function mobileMenu() {
  const burger = document.getElementById("rg-burger");
  const menu = document.getElementById("rg-mobile-menu");
  const backdrop = document.getElementById("rg-mobile-backdrop");
  if (!burger || !menu || !backdrop) return;

  function openMenu() {
    burger.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    menu.classList.add("is-open");
    backdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  burger.addEventListener("click", () => {
    if (menu.classList.contains("is-open")) closeMenu();
    else openMenu();
  });
  backdrop.addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) closeMenu();
  });
})();

/* ---------------- Modal system ----------------
   Any element with [data-modal-open="ID"] opens the <div class="rg-modal" id="ID">.
   Closes on: close button ([data-modal-close]), backdrop click, or Escape.
   Works identically on desktop and mobile (the panel is scrollable + full-height
   capped, and body scroll is locked while open).
------------------------------------------------- */
(function modals() {
  let lastFocus = null;

  function openModal(modal) {
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const focusable = modal.querySelector(
      "[data-modal-close], button, a, input, textarea, select"
    );
    if (focusable) focusable.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".rg-modal.is-open")) {
      document.body.style.overflow = "";
    }
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  document.querySelectorAll("[data-modal-open]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(document.getElementById(trigger.getAttribute("data-modal-open")));
    });
  });

  document.querySelectorAll(".rg-modal").forEach((modal) => {
    // Backdrop click (only when the click lands on the backdrop itself)
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
    modal
      .querySelectorAll("[data-modal-close]")
      .forEach((btn) => btn.addEventListener("click", () => closeModal(modal)));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const open = document.querySelector(".rg-modal.is-open");
      if (open) closeModal(open);
    }
  });
})();

/* ---------------- Scroll reveal ----------------
   Elements with [data-reveal] fade + rise into view once, when scrolled near.
   Respects prefers-reduced-motion (revealed immediately, no transition).
------------------------------------------------- */
(function scrollReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
})();
