(() => {
  const doc = document.documentElement;
  doc.classList.add('js');

  /* Navigation: Hintergrund verstärken, sobald der Hero verlassen wird */
  const nav = document.querySelector('.nav');
  const sentinel = document.querySelector('[data-nav-sentinel]');
  if (nav && sentinel && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => nav.classList.toggle('is-scrolled', !e.isIntersecting))
      .observe(sentinel);
  }

  /* Mobile-Menü */
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    menu.classList.toggle('is-open', open);
    menu.inert = !open;
    document.body.classList.toggle('menu-open', open);
  };
  if (toggle && menu) {
    menu.inert = true;
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
    });
    matchMedia('(min-width: 901px)').addEventListener('change', (m) => m.matches && setMenu(false));
  }

  /* Scroll-Reveal */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* Heutigen Tag in den Öffnungszeiten markieren */
  const today = new Date().getDay(); // 0 = Sonntag
  document.querySelectorAll('.hours-table tr[data-day]').forEach((row) => {
    if (Number(row.dataset.day) === today) row.classList.add('is-today');
  });

  /* Google Maps erst nach Zustimmung laden (DSGVO) */
  const mapBtn = document.querySelector('[data-load-map]');
  if (mapBtn) {
    mapBtn.addEventListener('click', () => {
      const wrap = mapBtn.closest('.map');
      const iframe = document.createElement('iframe');
      iframe.src = wrap.dataset.src;
      iframe.title = 'Karte: Der Engel in Erbenheim, Wandersmannstr. 26, Wiesbaden';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      wrap.querySelector('.map-consent').remove();
      wrap.appendChild(iframe);
    });
  }

  /* Jahr im Footer */
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
