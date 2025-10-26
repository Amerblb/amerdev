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
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
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
// Contact Form Handling
// ===========================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
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

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
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

const typingTexts = ['IT Professional', 'Software Developer', 'Systems Engineer', 'Tech Consultant'];
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
            // Wait before deleting
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
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

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
});

// ===========================
// Scroll to Top
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

scrollTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Form Input Focus Effects
// ===========================

const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// ===========================
// Portfolio Item Click Handler
// ===========================

const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        // You can add functionality here to open project details
        console.log('Portfolio item clicked');
    });
});

// ===========================
// Blog Card Click Handler
// ===========================

const readMoreLinks = document.querySelectorAll('.read-more');
readMoreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // You can add functionality here to open blog post
        console.log('Read more clicked');
    });
});

// ===========================
// Download Resume Handler
// ===========================

const downloadResumeBtn = document.querySelector('.download-resume .btn');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Resume download functionality can be implemented here.');
        // You would typically link to a PDF file here
        // window.open('/resume.pdf', '_blank');
    });
}

// ===========================
// Social Links Handler
// ===========================

const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // You can add actual social media links here
        const platform = this.textContent;
        console.log(`${platform} link clicked`);
    });
});

// ===========================
// Console Message
// ===========================

console.log('%cWelcome to my portfolio website!', 'color: #000; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with modern web technologies', 'color: #666; font-size: 14px;');

