// Header scroll effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileToggle.querySelector('span');
    icon.textContent = navLinks.classList.contains('active') ? 'close' : 'menu';
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = mobileToggle.querySelector('span');
    if (icon) icon.textContent = 'menu';
  });
});

// Reveal components on scroll
const reveal = () => {
  const reveals = document.querySelectorAll('.feature-card, .hero-text, .hero-image');

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
};

// Set initial states for revealed elements
document.querySelectorAll('.feature-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
});

window.addEventListener('scroll', reveal);
reveal(); // Run on load
