// ===========================
// ENHANCED PORTFOLIO JAVASCRIPT
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initSmoothScroll();
    initScrollEffects();
    initTypingAnimation();
    initScrollToTop();
    initFormValidation();
    initActiveNavLinks();
    initAnimateOnScroll();
    updateCopyrightYear();
});

// ===========================
// Mobile Navigation
// ===========================
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        // Toggle menu
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                // Focus first menu item for keyboard users
                const firstLink = navMenu.querySelector('.nav-link');
                if (firstLink) {
                    setTimeout(() => firstLink.focus(), 100);
                }
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar')) {
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ===========================
// Smooth Scroll
// ===========================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===========================
// Scroll Effects (Navbar Shadow)
// ===========================
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// ===========================
// Typing Animation (Hero)
// ===========================
function initTypingAnimation() {
    const typingTexts = [
        'IT Helpdesk Analyst',
        'Cybersecurity Professional',
        'Network Support Specialist',
        'System Administrator'
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.typing-text');
    
    if (!typingElement) return;
    
    // Start with empty text
    typingElement.textContent = '';
    
    function type() {
        const currentText = typingTexts[currentTextIndex];
        
        if (!isDeleting && currentCharIndex < currentText.length) {
            // Typing
            typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            setTimeout(type, 100);
        } else if (!isDeleting && currentCharIndex === currentText.length) {
            // Pause before deleting
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 2000);
        } else if (isDeleting && currentCharIndex > 0) {
            // Deleting
            typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(type, 50);
        } else if (isDeleting && currentCharIndex === 0) {
            // Move to next text
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            setTimeout(type, 500);
        }
    }
    
    type();
}

// ===========================
// Scroll to Top Button
// ===========================
function initScrollToTop() {
    let scrollTopButton = document.querySelector('.scroll-top');
    
    // Create button if it doesn't exist
    if (!scrollTopButton) {
        scrollTopButton = document.createElement('button');
        scrollTopButton.innerHTML = '↑';
        scrollTopButton.className = 'scroll-top';
        scrollTopButton.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollTopButton);
    }
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.opacity = '1';
            scrollTopButton.style.visibility = 'visible';
        } else {
            scrollTopButton.style.opacity = '0';
            scrollTopButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Form Validation & Submission
// ===========================
function initFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    let lastSubmitTime = 0;
    const RATE_LIMIT_MS = 3000; // 3 seconds between submissions
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Rate limiting check
        const now = Date.now();
        if (now - lastSubmitTime < RATE_LIMIT_MS) {
            showFormMessage('⏱️ Please wait a moment before submitting again.', 'error');
            return;
        }
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        contactForm.style.opacity = '0.6';
        contactForm.style.pointerEvents = 'none';
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            });
            
            if (response.ok) {
                showFormMessage('✅ Thanks! Your message has been sent successfully.', 'success');
                contactForm.reset();
                lastSubmitTime = Date.now();
            } else {
                showFormMessage('⚠️ Something went wrong. Please try again later.', 'error');
            }
        } catch (error) {
            showFormMessage('❌ Network error – please check your connection.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            contactForm.style.opacity = '1';
            contactForm.style.pointerEvents = 'auto';
        }
    });
    
    function showFormMessage(message, type) {
        // Remove existing messages
        const existingMsg = document.querySelector('.form-message');
        if (existingMsg) existingMsg.remove();
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            font-weight: 600;
            text-align: center;
            animation: slideIn 0.3s ease;
            ${type === 'success' ? 'background: #d4edda; color: #155724; border: 2px solid #c3e6cb;' : ''}
            ${type === 'error' ? 'background: #f8d7da; color: #721c24; border: 2px solid #f5c6cb;' : ''}
        `;
        
        contactForm.appendChild(messageDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => messageDiv.remove(), 5000);
    }
}

// ===========================
// Active Navigation Links
// ===========================
function initActiveNavLinks() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Remove all active classes first
        link.classList.remove('active');
        
        // Add active class to current page
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ===========================
// Animate Elements on Scroll
// ===========================
function initAnimateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Select elements to animate
    const animateElements = document.querySelectorAll(
        '.portfolio-item, .blog-card, .link-card, .resume-item, .timeline-item, .skill-item'
    );
    
    animateElements.forEach(element => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Observe element
        observer.observe(element);
    });
}

// ===========================
// Download Resume Handler
// ===========================
const downloadResumeBtn = document.querySelector('.download-resume .btn');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', function(e) {
        // Track download (optional: add analytics here)
        console.log('Resume downloaded');
    });
}

// ===========================
// Keyboard Navigation Improvements
// ===========================
document.addEventListener('keydown', function(e) {
    // ESC to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// ===========================
// Performance: Lazy Load Images
// ===========================
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

initLazyLoading();

// ===========================
// Console Message
// ===========================
console.log('%c👋 Welcome to my portfolio!', 'color: #0066ff; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Built with modern web technologies', 'color: #666; font-size: 14px;');
console.log('%c💼 Looking for collaboration? Let\'s connect!', 'color: #0066ff; font-size: 14px;');

// ===========================
// Service Worker Registration (Optional - for PWA)
// ===========================
if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA features
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered'))
    //     .catch(err => console.log('Service Worker registration failed'));
}

// ===========================
// Dynamic Copyright Year
// ===========================
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const footerTexts = document.querySelectorAll('.footer p');
    footerTexts.forEach(footer => {
        footer.innerHTML = `&copy; ${currentYear} Amer Blboheath. All rights reserved.`;
    });
}