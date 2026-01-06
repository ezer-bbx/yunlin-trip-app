// boot.js - 黑屏 → 快速淡出
(() => {
  const MIN_BLACK_MS = 220; // 200~300 都很像原生 App
  const start = performance.now();

  function fadeOutBoot() {
    const boot = document.getElementById('boot');
    if (!boot) return;
    boot.classList.add('fadeout');
    setTimeout(() => boot.remove(), 180);
  }

  window.addEventListener('load', () => {
    const elapsed = performance.now() - start;
    const wait = Math.max(0, MIN_BLACK_MS - elapsed);
    setTimeout(fadeOutBoot, wait);
  });
})();