document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu');
  const navList = document.querySelector('nav ul');
  
  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
  });

  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navList.classList.remove('show');
      }
    });
  });

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

  const elements = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  function handleResize() {
    if (window.innerWidth > 768) {
      navList.classList.remove('show');
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});
