// RiceGuard Sentinel — language switcher
// Text for elements with [data-i18n="key"] lives in lang-data.js (RG_I18N).
// EN/ZH are Thai placeholders until Best delivers real translations (RIC-444) —
// at that point just edit the values in lang-data.js, no markup changes needed.
import { RG_I18N as dict } from "./lang-data.js";

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
  document.querySelectorAll(".rg-lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
  });
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* ignore (private mode) */
  }
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
