// ===========================
// Mobile Navigation Toggle
// ===========================
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  document.addEventListener('click', function(event) {
    if (!event.target.closest('.navbar')) {
      if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    }
  });
});

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===========================
// Contact Form Handling (Formspree)
// ===========================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (res.ok) {
        alert('✅ Thanks! Your message has been sent successfully.');
        contactForm.reset();
      } else {
        alert('⚠️ Something went wrong. Please try again later.');
      }
    } catch (error) {
      alert('❌ Network error — please check your connection.');
    }
  });
}

// ===========================
// Active Navigation Link
// ===========================
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  const linkHref = link.getAttribute('href');
  if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
    link.classList.add('active');
  }
});

// ===========================
// Animate on Scroll
// ===========================
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.portfolio-item, .blog-card, .link-card, .resume-item, .timeline-item');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// ===========================
// Typing Animation (Hero)
// ===========================
const typingTexts = ['IT Helpdesk Analyst', 'Cybersecurity Enthusiast', 'Network Support Specialist'];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeWriter() {
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    if (!isDeleting && currentCharIndex < typingTexts[currentTextIndex].length) {
      typingElement.textContent = typingTexts[currentTextIndex].substring(0, currentCharIndex + 1);
      currentCharIndex++;
    } else if (!isDeleting && currentCharIndex === typingTexts[currentTextIndex].length) {
      setTimeout(() => { isDeleting = true; }, 2000);
    } else if (isDeleting && currentCharIndex > 0) {
      typingElement.textContent = typingTexts[currentTextIndex].substring(0, currentCharIndex - 1);
      currentCharIndex--;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
    }
    setTimeout(typeWriter, isDeleting ? 50 : 100);
  }
}
document.addEventListener('DOMContentLoaded', typeWriter);

// ===========================
// Scroll to Top Button
// ===========================
let scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '↑';
scrollTopButton.className = 'scroll-top';
scrollTopButton.style.cssText = `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
`;
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollTopButton.style.opacity = '1';
    scrollTopButton.style.visibility = 'visible';
  } else {
    scrollTopButton.style.opacity = '0';
    scrollTopButton.style.visibility = 'hidden';
  }
});
scrollTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===========================
// Download Resume Handler
// ===========================
const downloadResumeBtn = document.querySelector('.download-resume .btn');
if (downloadResumeBtn) {
  downloadResumeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.open('Amer-Blboheath-Resume.pdf', '_blank'); // 🔹 make sure this file exists in your project root
  });
}

// ===========================
// Social Links Handler (fixed)
// ===========================
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // stop page reload
    const url = this.getAttribute('href');
    if (url) window.open(url, '_blank', 'noopener'); // open in new tab
  });
});

// ===========================
// Console Message
// ===========================
console.log('%cWelcome to my portfolio website!', 'color: #000; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with modern web technologies', 'color: #666; font-size: 14px;');
