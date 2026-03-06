(function() {
  'use strict';
  const themeKey = 'twojwymiar-theme';
  const html = document.documentElement;
  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    const btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = theme === 'dark' ? '🌙' : '☀';
    try { localStorage.setItem(themeKey, theme); } catch (e) {}
  }
  function initTheme() {
    const saved = localStorage.getItem(themeKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved || (prefersDark ? 'dark' : 'light'));
  }
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) themeBtn.addEventListener('click', function() {
      setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
    const nav = document.getElementById('nav');
    if (nav) {
      function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 20); }
      window.addEventListener('scroll', onScroll);
      onScroll();
    }
    const navToggle = document.getElementById('navToggle');
    if (navToggle && nav) navToggle.addEventListener('click', function() { nav.classList.toggle('open'); });
  });
})();
