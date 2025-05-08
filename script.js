// script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('#nav-links a');

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

  // Close menu when a nav link is clicked
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
    });
  });
});
