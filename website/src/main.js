const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__menu a');
const revealItems = document.querySelectorAll('.reveal');

function setActiveNav() {
  const offset = (nav?.offsetHeight ?? 0) + 24;
  let activeId = '';

  navLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    if (window.scrollY >= top) activeId = link.getAttribute('href');
  });

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === activeId);
  });
}

function initReveal() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - (nav?.offsetHeight ?? 0) - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

window.addEventListener('scroll', setActiveNav, { passive: true });
window.addEventListener('resize', setActiveNav, { passive: true });

initReveal();
initSmoothAnchors();
setActiveNav();
