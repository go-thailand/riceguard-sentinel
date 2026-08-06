// RiceGuard Sentinel — language switcher
// Text for elements with [data-i18n="key"] lives in the shared dictionary
// src/i18n/ui.ts (same source <T> renders from). To edit copy, edit ui.ts only.
import { ui as dict } from "../i18n/ui";

const LANG_KEY = "rg-lang";

function applyLang(lang) {
  document.documentElement.setAttribute("lang", lang === "th" ? "th" : lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const entry = dict[el.getAttribute("data-i18n")];
    if (!entry) return;
    const value = entry[lang] || entry.th;
    if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
  // Placeholder attributes (e.g. search inputs)
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const entry = dict[el.getAttribute("data-i18n-placeholder")];
    if (entry) el.setAttribute("placeholder", entry[lang] || entry.th);
  });
  document.querySelectorAll(".rg-lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* ignore (private mode) */
  }
  // Notify non-DOM consumers (e.g. the D3 map labels) that copy changed.
  document.dispatchEvent(new CustomEvent("rg:langchange", { detail: { lang } }));
}

document.querySelectorAll(".rg-lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
});

let saved = "th";
try {
  saved = localStorage.getItem(LANG_KEY) || "th";
} catch (e) {
  /* ignore */
}
applyLang(saved);
