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

    // Popup Functions
    window.showProviderPopup = function(provider) {
        const popup = document.getElementById('providerPopup');
        if (popup) {
            // Update popup content based on provider
            const logos = {
                verizon: { name: 'Verizon', color: '#cd040b' },
                spectrum: { name: 'Spectrum', color: '#0066cc' },
                optimum: { name: 'Optimum', color: '#f5a623' },
                att: { name: 'AT&T', color: '#00a8e0' },
                xfinity: { name: 'Xfinity', color: '#e31937' }
            };
            
            const info = logos[provider] || logos.verizon;
            const logoEl = popup.querySelector('.popup-logo');
            const titleEl = popup.querySelector('.popup h2');
            
            if (logoEl) {
                logoEl.innerHTML = `<span style="font-size: 28px; font-weight: 800; color: ${info.color}">${info.name}</span>`;
            }
            if (titleEl) {
                titleEl.textContent = `Cancel ${info.name} Service`;
            }
            
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closePopup = function() {
        const popup = document.getElementById('providerPopup');
        if (popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

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
            closePopup();
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
