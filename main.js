// ─── Nav scroll state ───
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ─── Mobile nav toggle ───
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  // Close nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ─── Scroll reveal ───
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => revealObserver.observe(el));

// ─── Active nav link ───
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ─── Contact form (mock submit) ───
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Sent! We\'ll be in touch within 1 business day.';
    btn.disabled = true;
    btn.style.background = '#0D1630';
    btn.style.color = '#00C8F0';
    btn.style.cursor = 'default';
  });
}

// ─── Subtle electric pulse on hero bolt ───
const bolt = document.querySelector('.hero-bolt');
if (bolt) {
  setInterval(() => {
    bolt.style.textShadow = '0 0 20px #00C8F0, 0 0 40px #00C8F0';
    setTimeout(() => {
      bolt.style.textShadow = '0 0 8px #00C8F0';
    }, 150);
  }, 3000);
}
