// ── NAV scroll behavior ──
const nav = document.querySelector('nav');

function updateNav() {
  if (!nav) return;
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
    nav.classList.remove('dark');
  } else {
    nav.classList.remove('scrolled');
    if (nav.dataset.dark === 'true') nav.classList.add('dark');
  }
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ── Fade-up on scroll ──
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => observer.observe(el));

// ── FAQ accordion ──
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Carousel ──
const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(car => {
  const track = car.querySelector('.carousel-track');
  const prev = car.querySelector('[data-prev]');
  const next = car.querySelector('[data-next]');
  if (!track) return;
  const cols = getComputedStyle(track).gridTemplateColumns.split(' ').length;
  const cards = [...track.children];
  let idx = 0;
  const max = Math.max(0, cards.length - cols);

  function update() {
    track.style.display = 'contents';
    cards.forEach((c, i) => {
      c.style.display = i >= idx && i < idx + cols ? '' : 'none';
    });
    if (prev) prev.disabled = idx <= 0;
    if (next) next.disabled = idx >= max;
  }

  if (prev) prev.addEventListener('click', () => { idx = Math.max(0, idx - 1); update(); });
  if (next) next.addEventListener('click', () => { idx = Math.min(max, idx + 1); update(); });
  update();
});

// ── Filter buttons (portfolio) ──
const filterBtns = document.querySelectorAll('.filter-btn');
const filterCards = document.querySelectorAll('[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    filterCards.forEach(card => {
      card.style.display = cat === 'all' || card.dataset.category === cat ? '' : 'none';
    });
  });
});

// ── Contact form ──
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = 'Message sent ✓';
    btn.disabled = true;
    setTimeout(() => { form.reset(); btn.textContent = 'Send message →'; btn.disabled = false; }, 3000);
  });
}
