// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Active link highlight
const sections = document.querySelectorAll('main section[id]');
const links = navLinks.querySelectorAll('a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();