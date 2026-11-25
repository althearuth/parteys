// Parteys Catering Services - Main JavaScript
// Handles mobile navigation, gallery filtering, form validation, and smooth interactions

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    initMobileMenu();

    // Gallery Filtering (if on gallery page)
    if (document.querySelector('.gallery-filters')) {
        initGalleryFilters();
    }

    // Form Validation (if on contact page)
    if (document.querySelector('.quote-form')) {
        initFormValidation();
    }

    // Smooth Scrolling for anchor links
    initSmoothScrolling();

    // Navbar scroll effect
    initNavbarScroll();

    // Animation on scroll
    initScrollAnimations();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!mobileMenuBtn) return;

    mobileMenuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');

        // Update aria-expanded for accessibility
        const isExpanded = navMenu.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);

        // Prevent body scroll when menu is open
        document.body.style.overflow = isExpanded ? 'hidden' : '';

        // Animate hamburger
        this.style.transform = isExpanded ? 'rotate(90deg)' : 'rotate(0deg)';
    });

    // Close menu when clicking on a link
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.style.transform = 'rotate(0deg)';
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.style.transform = 'rotate(0deg)';
            document.body.style.overflow = '';
        }
    });
}

// Gallery Filtering System
function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter gallery items with animation
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Lightbox functionality for gallery images
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const imgSrc = this.querySelector('img').src;
            openLightbox(imgSrc);
        });
    });
}

// Simple Lightbox
function openLightbox(imgSrc) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${imgSrc}" alt="Gallery Image">
        </div>
    `;

    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';

    // Close lightbox
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            closeLightbox(lightbox);
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeLightbox(lightbox);
        }
    });
}

function closeLightbox(lightbox) {
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.remove();
        document.body.style.overflow = '';
    }, 300);
}

// Form Validation
function initFormValidation() {
    const form = document.querySelector('.quote-form');
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });

        input.addEventListener('input', function () {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Show success message
            showFormMessage('success', 'Thank you! Your quote request has been received. We\'ll contact you within 24 hours.');
            form.reset();

            // Remove all error states
            inputs.forEach(input => {
                input.classList.remove('error', 'success');
                const errorMsg = input.parentElement.querySelector('.error-message');
                if (errorMsg) errorMsg.remove();
            });
        } else {
            showFormMessage('error', 'Please fill in all required fields correctly.');
        }
    });
}

function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMessage = '';

    // Remove existing error message
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) existingError.remove();

    // Check if empty
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    // Email validation
    else if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    // Phone validation
    else if (type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.length < 10) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }
    // Number validation
    else if (type === 'number' && value) {
        if (parseInt(value) <= 0) {
            isValid = false;
            errorMessage = 'Please enter a valid number';
        }
    }

    // Update field styling
    if (!isValid) {
        field.classList.add('error');
        field.classList.remove('success');

        const error = document.createElement('span');
        error.className = 'error-message';
        error.textContent = errorMessage;
        field.parentElement.appendChild(error);
    } else if (value) {
        field.classList.remove('error');
        field.classList.add('success');
    }

    return isValid;
}

function showFormMessage(type, message) {
    // Remove existing message
    const existingMsg = document.querySelector('.form-message');
    if (existingMsg) existingMsg.remove();

    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;

    const form = document.querySelector('.quote-form');
    form.insertBefore(messageDiv, form.firstChild);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Scroll Effect - Disabled (Navbar stays floating)
function initNavbarScroll() {
    // Navbar now has permanent glassmorphism effect
    // No changes on scroll
}

// Scroll Animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.service-card, .package-card, .gallery-item, .contact-card, .stat-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Newsletter form handling (if exists on page)
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;

        if (email) {
            showFormMessage('success', 'Thank you for subscribing to our newsletter!');
            this.reset();
        }
    });
}
