// Simple follow button counter
const followCard = document.getElementById('follow-card');
const followBtn = document.getElementById('follow-button');
const followLabel = document.getElementById('follow-label');
const followCountEl = document.getElementById('follow-count');

if (followCard && followBtn && followLabel && followCountEl) {
  const BASE = Number(followCard.dataset.base || '517');
  const API = 'https://api.counterapi.dev/v1/gowtham1745-portfolio/followers';
  const KEY = 'gowtham-portfolio-followed';
  let extra = 0;

  const render = () => { followCountEl.textContent = (BASE + extra).toLocaleString('en-IN'); };

  const setFollowed = () => {
    followBtn.classList.add('is-following');
    followBtn.setAttribute('aria-pressed', 'true');
    followLabel.textContent = 'Following ✓';
    followBtn.disabled = true;
  };

  const fetchJson = async (url) => {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 5000);
    try {
      const r = await fetch(url, { signal: ctl.signal });
      if (!r.ok) throw new Error(String(r.status));
      return await r.json();
    } finally {
      clearTimeout(t);
    }
  };

  let followed = false;
  try { followed = localStorage.getItem(KEY) === '1'; } catch { followed = false; }
  if (followed) setFollowed();
  render();

  fetchJson(API + '/').then(d => {
    const n = Number(d && d.count);
    if (Number.isFinite(n) && n >= 0) { extra = Math.max(extra, n); render(); }
  }).catch(() => {});

  followBtn.addEventListener('click', () => {
    if (followBtn.disabled) return;
    extra += 1; render(); setFollowed();
    try { localStorage.setItem(KEY, '1'); } catch {}
    fetchJson(API + '/up').then(d => {
      const n = Number(d && d.count);
      if (Number.isFinite(n) && n >= extra) { extra = n; render(); }
    }).catch(() => {});
  });
}

// Scroll indicator
const heroRoot = document.querySelector('[data-hero]');
if (heroRoot) {
  let scrollFrame = 0;
  const updateScroll = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      const rect = heroRoot.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, -rect.top / Math.max(rect.height, 1)));
      document.body.style.setProperty('--page-scroll-offset', (window.scrollY * -0.05).toFixed(1) + 'px');
      scrollFrame = 0;
    });
  };
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();
}