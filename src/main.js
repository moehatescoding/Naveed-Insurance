// Header scroll effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.padding = '8px 0';
    header.style.background = 'rgba(255, 255, 255, 0.9)';
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
  } else {
    header.style.padding = '20px 0';
    header.style.background = 'rgba(255, 255, 255, 0.75)';
    header.style.boxShadow = 'none';
  }
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
