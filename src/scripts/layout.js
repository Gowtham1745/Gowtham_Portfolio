// Build a true round profile-photo favicon from the same profile image used in the header.
(() => {
  const profile = document.querySelector('.brand-logo');
  const faviconLinks = document.querySelectorAll('link[rel~="icon"]');
  if (!profile || !faviconLinks.length) return;

  const setProfileFavicon = () => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, 30, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    const img = new Image();
    img.onload = () => {
      const scale = Math.max(size / img.naturalWidth, size / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);

      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = '#07111a';
      ctx.fillRect(0, 0, size, size);
      ctx.globalCompositeOperation = 'source-over';

      ctx.beginPath();
      ctx.arc(size / 2, size / 2, 30.5, 0, Math.PI * 2);
      ctx.strokeStyle = '#e7b866';
      ctx.lineWidth = 2;
      ctx.stroke();

      const favicon = canvas.toDataURL('image/png');
      faviconLinks.forEach((link) => {
        link.setAttribute('type', 'image/png');
        link.setAttribute('href', favicon);
      });
    };
    img.src = profile.getAttribute('src') || '';
  };

  if (profile.complete) setProfileFavicon();
  else profile.addEventListener('load', setProfileFavicon, { once: true });
})();

const toggle = document.getElementById('mobile-menu-toggle');
const menu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('menu-icon-open');
const iconClose = document.getElementById('menu-icon-close');
const links = document.querySelectorAll('.mobile-nav-link');

function closeMenu({ restoreFocus = false } = {}) {
  menu?.classList.add('hidden');
  menu?.classList.remove('flex');
  iconOpen?.classList.remove('hidden');
  iconOpen?.classList.add('block');
  iconClose?.classList.remove('block');
  iconClose?.classList.add('hidden');
  toggle?.setAttribute('aria-expanded', 'false');

  if (restoreFocus) toggle?.focus();
}

function openMenu() {
  menu?.classList.remove('hidden');
  menu?.classList.add('flex');
  iconOpen?.classList.remove('block');
  iconOpen?.classList.add('hidden');
  iconClose?.classList.remove('hidden');
  iconClose?.classList.add('block');
  toggle?.setAttribute('aria-expanded', 'true');
}

toggle?.addEventListener('click', () => {
  const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
  if (isExpanded) {
    closeMenu();
  } else {
    openMenu();
  }
});

links.forEach((link) => {
  link.addEventListener('click', () => closeMenu());
});

// Escape closes the drawer and returns keyboard focus to its trigger.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    closeMenu({ restoreFocus: true });
  }
});

// If a device is rotated or resized to desktop width, leave the drawer closed.
const desktopViewport = window.matchMedia('(min-width: 768px)');
desktopViewport.addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

// Hide loading screen when page is fully loaded
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 500);
  }
});