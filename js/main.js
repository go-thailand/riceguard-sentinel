(function () {
  'use strict';

  /* ---------------- Mobile menu ---------------- */
  var burger = document.getElementById('rg-burger');
  var menu = document.getElementById('rg-mobile-menu');
  var backdrop = document.getElementById('rg-mobile-backdrop');

  function openMenu() {
    burger.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  if (burger && menu && backdrop) {
    burger.addEventListener('click', function () {
      if (menu.classList.contains('is-open')) closeMenu(); else openMenu();
    });
    backdrop.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 900) closeMenu();
    });
  }

  /* ---------------- Language switcher ----------------
     Text content for elements with [data-i18n="key"] lives in
     window.RG_I18N (js/lang-data.js). EN/ZH are Thai placeholders
     until Best delivers real translations (Jira RIC-444) — at that
     point just edit the values in lang-data.js, no HTML changes needed.
  ------------------------------------------------------- */
  var LANG_KEY = 'rg-lang';
  var dict = window.RG_I18N || {};

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang === 'th' ? 'th' : lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var entry = dict[el.getAttribute('data-i18n')];
      if (!entry) return;
      var value = entry[lang] || entry.th;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });
    document.querySelectorAll('.rg-lang-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore (private mode) */ }
  }

  document.querySelectorAll('.rg-lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  var saved = 'th';
  try { saved = localStorage.getItem(LANG_KEY) || 'th'; } catch (e) { /* ignore */ }
  applyLang(saved);
})();
