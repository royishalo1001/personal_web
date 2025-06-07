document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuBtn = document.querySelector('.menu');
  const navList = document.querySelector('nav ul');
  
  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navList.classList.remove('show');
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animation observer
  const elements = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

  // Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Responsive adjustments
  function handleResize() {
    if (window.innerWidth > 768) {
      navList.classList.remove('show');
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});