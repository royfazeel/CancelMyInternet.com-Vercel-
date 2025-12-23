// CancelMyInternet.com - Clean Business Theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const isOpen = item.classList.contains('open');
            
            // Close all others
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('open');
            });
            
            // Toggle current
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    // Floating Contact Form
    const floatingBtn = document.querySelector('.floating-btn');
    const floatingForm = document.querySelector('.floating-form');
    
    if (floatingBtn && floatingForm) {
        floatingBtn.addEventListener('click', () => {
            floatingForm.classList.toggle('active');
        });
        
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!floatingBtn.contains(e.target) && !floatingForm.contains(e.target)) {
                floatingForm.classList.remove('active');
            }
        });
    }

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to elements
    document.querySelectorAll('.step-card, .testimonial-card, .pricing-card, .card, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeObserver.observe(el);
    });

    // Counter Animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString() + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString() + '+';
                    }
                };
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(counter => {
        counterObserver.observe(counter);
    });

    // Form Submission
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let valid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (valid) {
                // Show success message
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.textContent;
                btn.textContent = '✓ Message Sent!';
                btn.style.background = '#16a34a';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    this.reset();
                    
                    // Close floating form if applicable
                    const floatingForm = this.closest('.floating-form');
                    if (floatingForm) {
                        floatingForm.classList.remove('active');
                    }
                }, 2000);
            }
        });
    });

    // Provider Logo Hover (show popup)
    document.querySelectorAll('.provider-logo').forEach(logo => {
        logo.addEventListener('click', () => {
            const provider = logo.getAttribute('data-provider');
            if (provider) {
                showProviderPopup(provider);
            }
        });
    });

    // Brand Logo SVGs - Real provider logos
    const brandLogos = {
        verizon: `<svg viewBox="0 0 100 40" width="70" height="28">
            <text x="50" y="28" text-anchor="middle" font-family="Arial Black, sans-serif" font-size="22" font-weight="900" fill="#cd040b">verizon</text>
            <path d="M93 8l-8 24h-4l8-24h4z" fill="#cd040b"/>
        </svg>`,
        spectrum: `<svg viewBox="0 0 120 40" width="80" height="28">
            <text x="60" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#0066cc">SPECTRUM</text>
        </svg>`,
        xfinity: `<svg viewBox="0 0 100 40" width="70" height="28">
            <text x="50" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#e31937">xfinity</text>
        </svg>`,
        att: `<svg viewBox="0 0 100 50" width="70" height="35">
            <circle cx="50" cy="25" r="22" fill="none" stroke="#00a8e0" stroke-width="3"/>
            <path d="M30 25 Q50 10 70 25 Q50 40 30 25" fill="none" stroke="#00a8e0" stroke-width="2"/>
            <text x="50" y="52" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#00a8e0">AT&T</text>
        </svg>`,
        optimum: `<svg viewBox="0 0 110 40" width="75" height="28">
            <text x="55" y="28" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#d4930d">optimum</text>
        </svg>`
    };

    // Provider info for popup
    const providerInfo = {
        verizon: { 
            name: 'Verizon', 
            fullName: 'Verizon Fios',
            tagline: 'Get expert help canceling your Verizon Fios Internet or TV service.',
            class: 'verizon'
        },
        spectrum: { 
            name: 'Spectrum', 
            fullName: 'Spectrum',
            tagline: 'Navigate your Spectrum cancellation with our expert phone guidance.',
            class: 'spectrum'
        },
        xfinity: { 
            name: 'Xfinity', 
            fullName: 'Xfinity / Comcast',
            tagline: 'Cancel your Xfinity service hassle-free with our assistance.',
            class: 'xfinity'
        },
        att: { 
            name: 'AT&T', 
            fullName: 'AT&T Internet & U-verse',
            tagline: 'Get guidance for canceling your AT&T Internet or U-verse TV.',
            class: 'att'
        },
        optimum: { 
            name: 'Optimum', 
            fullName: 'Optimum',
            tagline: 'Cancel your Optimum service smoothly with our expert help.',
            class: 'optimum'
        }
    };

    // Popup Functions
    let popupInterval = null;
    let currentProvider = 'verizon';
    const providers = ['verizon', 'spectrum', 'xfinity', 'att', 'optimum'];
    
    // Start popup cycle on page load
    function startPopupCycle() {
        // Show first popup after 2 seconds
        setTimeout(() => {
            showProviderPopup(getRandomProvider());
        }, 2000);
    }
    
    // Get random provider or cycle through them
    function getRandomProvider() {
        return providers[Math.floor(Math.random() * providers.length)];
    }

    window.showProviderPopup = function(provider) {
        const overlay = document.getElementById('providerPopup');
        const popup = document.getElementById('popupContent');
        const logoEl = document.getElementById('popupLogo');
        const titleEl = document.getElementById('popupTitle');
        const subtitleEl = document.getElementById('popupSubtitle');
        
        if (overlay && popup) {
            currentProvider = provider || getRandomProvider();
            const info = providerInfo[currentProvider] || providerInfo.verizon;
            const logo = brandLogos[currentProvider] || brandLogos.verizon;
            
            // Remove all provider classes and add current one
            popup.className = 'popup ' + info.class;
            
            // Update content
            if (logoEl) logoEl.innerHTML = logo;
            if (titleEl) titleEl.textContent = `Cancel ${info.fullName}`;
            if (subtitleEl) subtitleEl.textContent = info.tagline;
            
            // Show popup
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Clear any existing interval
            if (popupInterval) {
                clearTimeout(popupInterval);
            }
        }
    };

    window.closePopup = function() {
        const popup = document.getElementById('providerPopup');
        if (popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reshow popup after 4 seconds with a different provider
            popupInterval = setTimeout(() => {
                showProviderPopup(getRandomProvider());
            }, 4000);
        }
    };
    
    // Start the popup cycle when page loads
    startPopupCycle();

    // Close popup on overlay click
    const popupOverlay = document.getElementById('providerPopup');
    if (popupOverlay) {
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                closePopup();
            }
        });
    }

    // Close popup on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const popup = document.getElementById('providerPopup');
            if (popup && popup.classList.contains('active')) {
                closePopup();
            }
            const floatingForm = document.querySelector('.floating-form');
            if (floatingForm) {
                floatingForm.classList.remove('active');
            }
        }
    });

    // Mobile Menu (placeholder for future implementation)
    const mobileToggle = document.querySelector('.mobile-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            // Add mobile menu functionality here
            console.log('Mobile menu clicked');
        });
    }

    // Lazy Load Images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }

    console.log('%c🚀 CancelMyInternet.com', 'font-size: 20px; font-weight: bold; color: #2563eb;');
    console.log('%cIndependent Third-Party Service', 'font-size: 12px; color: #6b7280;');
});
