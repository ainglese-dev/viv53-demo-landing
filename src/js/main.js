// Mobile Navigation Toggle with Error Handling
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Debugging: Log element availability
console.log('Mobile Navigation Elements:', {
    hamburger: hamburger ? 'Found' : 'Missing',
    navMenu: navMenu ? 'Found' : 'Missing'
});

// Enhanced hamburger click handler with error checking
if (hamburger && navMenu) {
    const toggleMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const wasActive = hamburger.classList.contains('active');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        console.log(`Mobile menu ${wasActive ? 'closed' : 'opened'} via hamburger ${e.type}`);
        
        // Add accessibility attributes
        const isNowActive = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isNowActive);
        navMenu.setAttribute('aria-hidden', !isNowActive);
    };
    
    // Mouse/touch click handler
    hamburger.addEventListener('click', toggleMenu);
    
    // Keyboard handler for accessibility
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleMenu(e);
        }
    });
} else {
    console.error('Mobile navigation elements not found:', {
        hamburger: !!hamburger,
        navMenu: !!navMenu
    });
}

// Consolidated navigation link handler (mobile menu + smooth scrolling)
const navLinks = document.querySelectorAll('.nav-link');
console.log(`Found ${navLinks.length} navigation links`);

navLinks.forEach((link, index) => {
    link.addEventListener('click', function (e) {
        console.log(`Navigation link ${index + 1} clicked:`, this.getAttribute('href'));
        
        // First, close the mobile menu if it's open
        if (hamburger && navMenu) {
            const wasMenuOpen = hamburger.classList.contains('active');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update accessibility attributes
            hamburger.setAttribute('aria-expanded', 'false');
            navMenu.setAttribute('aria-hidden', 'true');
            
            if (wasMenuOpen) {
                console.log('Mobile menu closed via nav link');
            }
        }
        
        // Then handle smooth scrolling for hash links
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                console.log(`Smooth scrolling to ${href} (offset: ${offsetPosition}px)`);
                
                // Small delay to ensure menu closes before scrolling
                setTimeout(() => {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 150);
            } else {
                console.warn(`Target element not found for ${href}`);
            }
        }
    });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
const demoBanner = document.getElementById('demo-banner');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add background blur effect
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    // Hide/show navbar and demo banner on scroll
    const isScrollingDown = scrollTop > lastScrollTop && scrollTop > 200;
    
    if (isScrollingDown) {
        navbar.style.transform = 'translateY(-100%)';
        // Hide demo banner too, but only if it's visible (not permanently hidden by X click)
        if (demoBanner && !demoBanner.classList.contains('hidden')) {
            demoBanner.style.transform = 'translateY(-100%)';
        }
    } else {
        navbar.style.transform = 'translateY(0)';
        // Show demo banner too, but only if it's visible (not permanently hidden by X click)
        if (demoBanner && !demoBanner.classList.contains('hidden')) {
            demoBanner.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollTop = scrollTop;
});

// Enhanced Contact Form Handling
const contactForm = document.getElementById('contact-form');

// Real-time email validation
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('email-feedback');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function updateEmailFeedback(isValid) {
    emailFeedback.innerHTML = '';
    emailFeedback.className = 'input-feedback';
    
    if (isValid) {
        emailFeedback.classList.add('valid');
        emailFeedback.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>';
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    } else {
        emailFeedback.classList.add('invalid');
        emailFeedback.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
    }
}

emailInput.addEventListener('input', function() {
    const email = this.value.trim();
    if (email.length > 0) {
        updateEmailFeedback(validateEmail(email));
    } else {
        emailFeedback.className = 'input-feedback';
        emailInput.classList.remove('valid', 'invalid');
    }
});

// Enhanced form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnSpinner = submitBtn.querySelector('.btn-spinner');
    const formSuccess = document.getElementById('form-success');
    
    // Validate required fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message || !validateEmail(email)) {
        showNotification('Please fill in all required fields with valid information.', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnSpinner.style.display = 'inline-flex';
    
    try {
        // Google Forms Configuration
        const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSc2euAdM5pwQPoewLx8ZC9CFMzDbVVDi8TW58IcoOah6YNnxg/formResponse';
        const GOOGLE_FORM_FIELDS = {
            name: 'entry.1645488632',
            email: 'entry.881299443', 
            company: 'entry.2062573081',
            service: 'entry.697179097',
            message: 'entry.1555863920'
        };
        
        // Get all form data
        const company = document.getElementById('company').value.trim();
        const serviceRaw = document.getElementById('service').value;
        
        // Map service values to match Google Forms options EXACTLY (case-sensitive!)
        const serviceMap = {
            'cloud': 'Cloud Infrastructure',
            'security': 'Cybersecurity', 
            'network': 'Network Management',
            'support': 'IT support',  // Note: lowercase 's' to match Google Form exactly!
            'consultation': 'General Consultation'
        };
        const service = serviceMap[serviceRaw] || serviceRaw || 'General Consultation';
        
        // Prepare form data for Google Forms using URLSearchParams
        const formData = new URLSearchParams();
        formData.append(GOOGLE_FORM_FIELDS.name, name);
        formData.append(GOOGLE_FORM_FIELDS.email, email);
        formData.append(GOOGLE_FORM_FIELDS.company, company || 'Not specified');
        formData.append(GOOGLE_FORM_FIELDS.service, service || 'General inquiry');
        formData.append(GOOGLE_FORM_FIELDS.message, message);
        
        // Submit to Google Forms
        const response = await fetch(GOOGLE_FORM_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors', // Required for Google Forms
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        
        // Show success message
        formSuccess.classList.add('show');
        contactForm.reset();
        emailFeedback.className = 'input-feedback';
        emailInput.classList.remove('valid', 'invalid');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 5000);
        
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('There was an error sending your message. Please try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnSpinner.style.display = 'none';
    }
});

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        max-width: 400px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Enhanced Scroll Animations
function initScrollAnimations() {
    // Enhanced intersection observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add stagger delay for service cards
                if (entry.target.classList.contains('stagger-animation')) {
                    const staggerElements = entry.target.parentElement.querySelectorAll('.stagger-animation');
                    staggerElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('animate');
                        }, index * 150);
                    });
                } else {
                    entry.target.classList.add('animated');
                }
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.addEventListener('DOMContentLoaded', () => {
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(el => {
            scrollObserver.observe(el);
        });
        
        // Animate hero content on load
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            setTimeout(() => {
                heroContent.classList.add('loaded');
            }, 500);
        }
        
        // Add loading skeleton effect to partners initially
        const partnerItems = document.querySelectorAll('.partner-item');
        partnerItems.forEach((item, index) => {
            item.classList.add('loading');
            setTimeout(() => {
                item.classList.remove('loading');
            }, 1000 + (index * 100));
        });
    });
}

// Initialize scroll animations
initScrollAnimations();


// WhatsApp integration helper
function openWhatsApp() {
    const phoneNumber = '1234567890'; // Replace with actual phone number
    const message = encodeURIComponent('Hello! I\'m interested in your IT services. Can we discuss my requirements?');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Add click handler for WhatsApp button
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.querySelector('.btn-whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openWhatsApp();
        });
    }
});

// Keyboard navigation improvements
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        console.log('Mobile menu closed via Escape key');
    }
});

// Click outside to close mobile menu
document.addEventListener('click', (e) => {
    // Check if menu is open and click is outside the navigation area
    if (hamburger && navMenu && hamburger.classList.contains('active')) {
        const navbar = document.getElementById('navbar');
        
        // If click is outside the navbar area, close the menu
        if (navbar && !navbar.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            console.log('Mobile menu closed via outside click');
        }
    }
});

// Prevent menu from closing when clicking on the menu itself
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.addEventListener('click', (e) => {
            // Don't let clicks on the navbar bubble up to the document
            // This prevents the click-outside handler from firing
            e.stopPropagation();
        });
    }
});

// Mobile-specific touch and orientation handling
// Close menu on orientation change
window.addEventListener('orientationchange', () => {
    if (hamburger && navMenu && hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        console.log('Mobile menu closed due to orientation change');
    }
});

// Enhanced touch handling for mobile devices
document.addEventListener('DOMContentLoaded', () => {
    // Add touch support for hamburger button
    if (hamburger) {
        hamburger.addEventListener('touchstart', (e) => {
            // Prevent double-tap zoom on mobile
            e.preventDefault();
        });
        
        // Add visual feedback for touch
        hamburger.addEventListener('touchstart', () => {
            hamburger.style.transform = 'scale(0.95)';
        });
        
        hamburger.addEventListener('touchend', () => {
            hamburger.style.transform = 'scale(1)';
        });
    }
    
    // Handle touch events on navigation links for better mobile UX
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('touchstart', () => {
            link.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
        });
        
        link.addEventListener('touchend', () => {
            setTimeout(() => {
                link.style.backgroundColor = '';
            }, 150);
        });
    });
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);


// Hero GIF Loading Management
function initHeroGif() {
    const gifContainer = document.querySelector('.hero-gif-container');
    const gif = document.querySelector('.hero-gif');
    
    if (!gifContainer || !gif) return;
    
    // Only load on desktop with good connection
    if (window.innerWidth > 1024 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        
        // Check connection speed (if available)
        if ('connection' in navigator) {
            const connection = navigator.connection;
            // Only load on fast connections (4g, wifi)
            if (connection.effectiveType === '4g' || connection.effectiveType === 'wifi') {
                loadHeroGif();
            }
        } else {
            // Fallback: load after delay
            setTimeout(loadHeroGif, 2000);
        }
    }
    
    function loadHeroGif() {
        // Create a new image to preload
        const preloadImg = new Image();
        preloadImg.onload = () => {
            // Show container once loaded
            gifContainer.style.display = 'block';
            console.log('🎬 Hero GIF loaded successfully');
        };
        preloadImg.onerror = () => {
            console.log('❌ Hero GIF failed to load');
        };
        preloadImg.src = gif.src;
    }
}

// Console welcome message
console.log('%c🚀 VIV53 IT Services Website', 'color: #d4af37; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with modern web technologies for optimal performance', 'color: #b0b0b0; font-size: 12px;');

// Initialize hero GIF loading
document.addEventListener('DOMContentLoaded', initHeroGif);

// Technology Partner Tooltips
function initPartnerTooltips() {
    const tooltip = document.getElementById('tooltip');
    const partnerItems = document.querySelectorAll('.partner-item[data-tooltip]');
    
    if (!tooltip) return;
    
    partnerItems.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            const tooltipText = this.getAttribute('data-tooltip');
            if (!tooltipText) return;
            
            tooltip.textContent = tooltipText;
            tooltip.classList.add('visible');
            
            // Position tooltip
            const rect = this.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            
            let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
            let top = rect.top - tooltipRect.height - 15;
            
            // Keep tooltip within viewport
            if (left < 10) left = 10;
            if (left + tooltipRect.width > window.innerWidth - 10) {
                left = window.innerWidth - tooltipRect.width - 10;
            }
            if (top < 10) {
                top = rect.bottom + 15;
                tooltip.style.transform = 'translateY(0) rotateX(180deg)';
            } else {
                tooltip.style.transform = 'translateY(0) rotateX(0deg)';
            }
            
            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
        });
        
        item.addEventListener('mouseleave', function() {
            tooltip.classList.remove('visible');
        });
    });
    
    // Hide tooltip on scroll
    window.addEventListener('scroll', function() {
        tooltip.classList.remove('visible');
    });
}

// Initialize partner tooltips
document.addEventListener('DOMContentLoaded', initPartnerTooltips);

// Service Card Toggle Functionality
function toggleService(button) {
    const serviceCard = button.closest('.service-card');
    const details = serviceCard.querySelector('.service-details');
    const isExpanded = details.classList.contains('expanded');
    
    if (isExpanded) {
        // Collapse
        details.classList.remove('expanded');
        button.classList.remove('expanded');
        button.innerHTML = `
                        Learn More 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 0.5rem;">
                            <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                    `;
    } else {
        // Expand
        details.classList.add('expanded');
        button.classList.add('expanded');
        button.innerHTML = `
                        Show Less 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 0.5rem;">
                            <polyline points="18,15 12,9 6,15"></polyline>
                        </svg>
                    `;
    }
}
