// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    // FAQ functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // Carousel Data
    const carouselItems = [
        {
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
            title: "Luxury Villa in Cantonments",
            description: "Stunning 5-bedroom villa with modern amenities and swimming pool"
        },
        {
            image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
            title: "Modern Apartment in Airport Residential",
            description: "Spacious 3-bedroom apartment with panoramic city views"
        },
        {
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "Executive Condo in East Legon",
            description: "Fully furnished executive condo with gym access and 24/7 security"
        },
        {
            image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
            title: "Family Home in Roman Ridge",
            description: "Beautiful 4-bedroom family home with large garden"
        },
        {
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            title: "Penthouse in Osu",
            description: "Luxurious penthouse with rooftop terrace and ocean views"
        }
    ];

    // DOM Elements
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.getElementById('indicators');
    const thumbnails = document.getElementById('thumbnails');
    const autoPlayToggle = document.getElementById('autoPlayToggle');
    const currentSlideEl = document.getElementById('currentSlide');
    const totalSlidesEl = document.getElementById('totalSlides');

    // Carousel State
    let currentIndex = 0;
    let autoPlayInterval;
    let isAutoPlay = true;
    const autoPlayDelay = 5000; // 5 seconds

    // Check if carousel elements exist
    if (carousel && prevBtn && nextBtn) {
        // Initialize Carousel
        function initCarousel() {
            // Set total slides count
            if (totalSlidesEl) {
                totalSlidesEl.textContent = carouselItems.length;
            }
            
            // Create carousel items
            carouselItems.forEach((item, index) => {
                // Main carousel item
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';
                carouselItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="carousel-image">
                    <div class="carousel-caption">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;
                carousel.appendChild(carouselItem);
                
                // Indicator
                if (indicators) {
                    const indicator = document.createElement('div');
                    indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
                    indicator.dataset.index = index;
                    indicators.appendChild(indicator);
                }
                
                // Thumbnail
                if (thumbnails) {
                    const thumbnail = document.createElement('div');
                    thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                    thumbnail.dataset.index = index;
                    thumbnail.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
                    thumbnails.appendChild(thumbnail);
                }
            });
            
            // Start auto-play
            startAutoPlay();
        }

        // Update Carousel Position
        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update indicators
            document.querySelectorAll('.indicator').forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
            
            // Update thumbnails
            document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
                thumbnail.classList.toggle('active', index === currentIndex);
            });
            
            // Update counter
            if (currentSlideEl) {
                currentSlideEl.textContent = currentIndex + 1;
            }
        }

        // Next Slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            updateCarousel();
        }

        // Previous Slide
        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            updateCarousel();
        }

        // Go to Specific Slide
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        // Auto-play Functions
        function startAutoPlay() {
            if (isAutoPlay) {
                autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
                if (autoPlayToggle) {
                    autoPlayToggle.classList.add('active');
                }
            }
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
            if (autoPlayToggle) {
                autoPlayToggle.classList.remove('active');
            }
        }

        function toggleAutoPlay() {
            isAutoPlay = !isAutoPlay;
            if (isAutoPlay) {
                startAutoPlay();
            } else {
                stopAutoPlay();
            }
        }

        // Event Listeners
        function setupEventListeners() {
            // Navigation buttons
            prevBtn.addEventListener('click', () => {
                prevSlide();
                if (isAutoPlay) {
                    stopAutoPlay();
                    startAutoPlay();
                }
            });
            
            nextBtn.addEventListener('click', () => {
                nextSlide();
                if (isAutoPlay) {
                    stopAutoPlay();
                    startAutoPlay();
                }
            });
            
            // Indicators
            if (indicators) {
                indicators.addEventListener('click', (e) => {
                    if (e.target.classList.contains('indicator')) {
                        const index = parseInt(e.target.dataset.index);
                        goToSlide(index);
                        if (isAutoPlay) {
                            stopAutoPlay();
                            startAutoPlay();
                        }
                    }
                });
            }
            
            // Thumbnails
            if (thumbnails) {
                thumbnails.addEventListener('click', (e) => {
                    if (e.target.closest('.thumbnail')) {
                        const thumbnail = e.target.closest('.thumbnail');
                        const index = parseInt(thumbnail.dataset.index);
                        goToSlide(index);
                        if (isAutoPlay) {
                            stopAutoPlay();
                            startAutoPlay();
                        }
                    }
                });
            }
            
            // Auto-play toggle
            if (autoPlayToggle) {
                autoPlayToggle.addEventListener('click', toggleAutoPlay);
            }
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                }
            });
            
            // Pause auto-play on hover
            carousel.addEventListener('mouseenter', stopAutoPlay);
            carousel.addEventListener('mouseleave', () => {
                if (isAutoPlay) startAutoPlay();
            });
        }

        // Initialize Carousel
        initCarousel();
        setupEventListeners();
    }

    // Dynamic Year for Footer
    const yearElement = document.querySelector('.copyright p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = `&copy; ${currentYear} B&CoRealty. All rights reserved.`;
    }
});

// Set active navigation based on current page
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call this when the page loads
document.addEventListener('DOMContentLoaded', setActiveNav);


function getCookie(name) {
    try {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) {
                const value = decodeURIComponent(c.substring(nameEQ.length, c.length));
                console.log('Cookie found:', name, value);
                return value;
            }
        }
        console.log('Cookie not found:', name);
        return null;
    } catch (error) {
        console.error('Error reading cookie:', error);
        return null;
    }
}

function setCookie(name, value, days) {
    try {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        const cookieString = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/;SameSite=Lax";
        document.cookie = cookieString;
        console.log('Cookie set:', name, value);
    } catch (error) {
        console.error('Error setting cookie:', error);
    }
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

// Cookies Consent Functionality
document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const cookieModal = document.getElementById('cookieModal');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieReject = document.getElementById('cookieReject');
    const cookieSettings = document.getElementById('cookieSettings');
    const closeModal = document.querySelector('.close-modal');
    const savePreferences = document.getElementById('savePreferences');
    
    // Check if user has already made a choice
    if (cookieConsent) {
        // Improved cookie check
        const cookieChoice = getCookie('cookieConsent');
        console.log('Cookie consent status:', cookieChoice);
        
        if (!cookieChoice || cookieChoice === 'null' || cookieChoice === 'undefined') {
            // Show cookie consent after 2 seconds
            setTimeout(() => {
                cookieConsent.style.display = 'block';
                cookieConsent.style.opacity = '0';
                cookieConsent.style.transition = 'opacity 0.3s ease';
                
                // Trigger reflow
                cookieConsent.offsetHeight;
                
                cookieConsent.style.opacity = '1';
            }, 2000);
        } else {
            // Hide consent banner if choice was already made
            cookieConsent.style.display = 'none';
            console.log('Cookie consent already given:', cookieChoice);
        }
    }
    
    // Accept All Cookies
    if (cookieAccept) {
        cookieAccept.addEventListener('click', function() {
            setCookie('cookieConsent', 'all', 365);
            setCookie('analyticsCookies', 'true', 365);
            setCookie('marketingCookies', 'true', 365);
            setCookie('preferenceCookies', 'true', 365);
            cookieConsent.style.display = 'none';
            showThankYouMessage('Thank you for accepting cookies!');
            // Google Analytics consent feedback
            if (typeof gtag === 'function') {
                gtag('consent', 'update', {
                    'analytics_storage': 'granted',
                    'ad_storage': 'granted',
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted'
                });
            }
        });
    }
    
    // Reject All Cookies (only essential)
    if (cookieReject) {
        cookieReject.addEventListener('click', function() {
            setCookie('cookieConsent', 'essential', 365);
            setCookie('analyticsCookies', 'false', 365);
            setCookie('marketingCookies', 'false', 365);
            setCookie('preferenceCookies', 'false', 365);
            cookieConsent.style.display = 'none';
            showThankYouMessage('Essential cookies only have been set.');
            // Google Analytics consent feedback
            if (typeof gtag === 'function') {
                gtag('consent', 'update', {
                    'analytics_storage': 'denied',
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied'
                });
            }
        });
    }
    
    // Open Settings Modal
    if (cookieSettings) {
        cookieSettings.addEventListener('click', function() {
            if (cookieModal) {
                cookieModal.style.display = 'block';
                
                // Set toggle states based on current preferences
                const analyticsChecked = getCookie('analyticsCookies') !== 'false';
                const marketingChecked = getCookie('marketingCookies') === 'true';
                const preferenceChecked = getCookie('preferenceCookies') !== 'false';
                
                document.getElementById('analyticsCookies').checked = analyticsChecked;
                document.getElementById('marketingCookies').checked = marketingChecked;
                document.getElementById('preferenceCookies').checked = preferenceChecked;
            }
        });
    }
    
    // Close Modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            if (cookieModal) {
                cookieModal.style.display = 'none';
            }
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === cookieModal) {
            cookieModal.style.display = 'none';
        }
    });
    
    // Save Preferences
    if (savePreferences) {
        savePreferences.addEventListener('click', function() {
            const analyticsChecked = document.getElementById('analyticsCookies').checked;
            const marketingChecked = document.getElementById('marketingCookies').checked;
            const preferenceChecked = document.getElementById('preferenceCookies').checked;
            
            setCookie('cookieConsent', 'custom', 365);
            setCookie('analyticsCookies', analyticsChecked.toString(), 365);
            setCookie('marketingCookies', marketingChecked.toString(), 365);
            setCookie('preferenceCookies', preferenceChecked.toString(), 365);
            
            if (cookieModal) cookieModal.style.display = 'none';
            if (cookieConsent) cookieConsent.style.display = 'none';
            
            showThankYouMessage('Your cookie preferences have been saved!');
            // Google Analytics consent feedback
            if (typeof gtag === 'function') {
                gtag('consent', 'update', {
                    'analytics_storage': analyticsChecked ? 'granted' : 'denied',
                    'ad_storage': marketingChecked ? 'granted' : 'denied',
                    'ad_user_data': marketingChecked ? 'granted' : 'denied',
                    'ad_personalization': marketingChecked ? 'granted' : 'denied'
                });
            }
            // Apply preferences
            applyCookiePreferences();
        });
    }
    
    // Apply cookie preferences on page load
    applyCookiePreferences();
});

function applyCookiePreferences() {
    const analyticsAllowed = getCookie('analyticsCookies') !== 'false';
    const marketingAllowed = getCookie('marketingCookies') === 'true';
    const preferencesAllowed = getCookie('preferenceCookies') !== 'false';
    
    // Initialize analytics if allowed
    if (analyticsAllowed) {
        initializeAnalytics();
    }
    
    // Initialize marketing tools if allowed
    if (marketingAllowed) {
        initializeMarketing();
    }
    
    // Apply preferences if allowed
    if (preferencesAllowed) {
        applyUserPreferences();
    }
    
    console.log('Cookie Preferences Applied:', {
        analytics: analyticsAllowed,
        marketing: marketingAllowed,
        preferences: preferencesAllowed
    });
}

function initializeAnalytics() {
    console.log('Checking analytics permissions...');
    
    // Load Google Analytics only if user has consented
    const analyticsAllowed = getCookie('analyticsCookies') === 'true';
    
    console.log('Analytics allowed:', analyticsAllowed);
    
    if (analyticsAllowed) {
        console.log('Loading Google Analytics...');
        loadAnalytics();
    } else {
        console.log('Analytics disabled - user has not consented');
        // Set a dummy gtag function to prevent errors
        window.gtag = window.gtag || function() {
            console.log('Analytics disabled: ', arguments);
        };
    }
}

function loadAnalytics() {
    console.log('Loading Google Analytics script...');
    
    var gtaScript = document.createElement("script");
    gtaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-L0EM544EFD";
    gtaScript.async = true;
    
    gtaScript.onload = function() {
        console.log('Google Analytics script loaded successfully');
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-L0EM544EFD');
        console.log('Google Analytics initialized');
        
        // Track pageview
        gtag('event', 'page_view');
    };
    
    gtaScript.onerror = function() {
        console.error('Failed to load Google Analytics script');
    };
    
    document.head.appendChild(gtaScript);
}


function initializeMarketing() {
    // Add your marketing tools here (Facebook Pixel, etc.)
    console.log('Marketing cookies initialized');
}

function applyUserPreferences() {
    // Apply user preferences like theme, language, etc.
    console.log('Preference cookies applied');
}

function showThankYouMessage(message) {
    // Create and show a thank you message
    const thankYou = document.createElement('div');
    thankYou.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #48bb78;
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10002;
        animation: slideInRight 0.3s ease;
    `;
    thankYou.textContent = message;
    document.body.appendChild(thankYou);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        thankYou.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(thankYou);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Email Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const emailPopup = document.getElementById('emailPopup');
    const successMessage = document.getElementById('successMessage');
    const closePopup = document.querySelector('.close-popup');
    const emailForm = document.getElementById('emailForm');
    const successBtn = document.querySelector('.success-btn');
    
    // Show popup after 10 seconds or when user is about to leave
    let popupShown = false;
    
    function showEmailPopup() {
        const emailPopupShown = getCookie('emailPopupShown');
        console.log('Email popup cookie:', emailPopupShown);
        
        if (!popupShown && (!emailPopupShown || emailPopupShown === 'false')) {
            setTimeout(() => {
                if (emailPopup) {
                    emailPopup.style.display = 'block';
                    emailPopup.style.opacity = '0';
                    emailPopup.style.transition = 'opacity 0.3s ease';
                    
                    // Trigger reflow
                    emailPopup.offsetHeight;
                    
                    emailPopup.style.opacity = '1';
                    popupShown = true;
                }
            }, 10000); // 10 seconds
        } else {
            console.log('Email popup already shown or user declined');
        }
    }
    
    // Exit intent detection
    function setupExitIntent() {
        document.addEventListener('mouseout', function(e) {
            const emailPopupShown = getCookie('emailPopupShown');
            if (!popupShown && (!emailPopupShown || emailPopupShown === 'false') && e.relatedTarget === null) {
                if (emailPopup) {
                    emailPopup.style.display = 'block';
                    popupShown = true;
                    setCookie('emailPopupShown', 'true', 7);
                }
            }
        });
    }

    // Close popup
    if (closePopup) {
        closePopup.addEventListener('click', function() {
            if (emailPopup) {
                emailPopup.style.display = 'none';
                setCookie('emailPopupShown', 'true', 7); // Set cookie when user closes
            }
        });
    }

    // Form submission
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('popupName').value;
            const email = document.getElementById('popupEmail').value;
            const phone = document.getElementById('popupPhone') ? document.getElementById('popupPhone').value : '';
            const interest = document.getElementById('popupInterest').value;
            
            // Build mailto link
            const mailto = `mailto:adombonney1@gmail.com?subject=New%20Subscription%20from%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(phone)}%0AInterest:%20${encodeURIComponent(interest)}`;
            window.location.href = mailto;
        });
    }
    
    // Close success message
    if (successBtn) {
        successBtn.addEventListener('click', function() {
            if (successMessage) {
                successMessage.style.display = 'none';
            }
        });
    }
    
    // Close when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === emailPopup) {
            emailPopup.style.display = 'none';
        }
        if (e.target === successMessage) {
            successMessage.style.display = 'none';
        }
    });
    
    // Initialize popup
    showEmailPopup();
    setupExitIntent();
});

// Stats Counter Animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 16);
    });
}

// Intersection Observer to trigger animation when section is in view
function initStatsObserver() {
    const statsSection = document.querySelector('.stats');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of section is visible
    
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initStatsObserver();
});

// Stats Counter Animation for About Us Page
function animateAboutStats() {
    const statNumbers = document.querySelectorAll('.about-stats .stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const target = parseInt(finalValue.replace(/[^0-9]/g, ''));
        const suffix = finalValue.replace(/[0-9]/g, '');
        let current = 0;
        
        const counter = setInterval(() => {
            current += Math.ceil(target / 30); // Adjust speed here
            if (current >= target) {
                current = target;
                clearInterval(counter);
            }
            stat.textContent = current + suffix;
        }, 50);
    });
}

// Intersection Observer for About Us stats
function initAboutStatsObserver() {
    const aboutSection = document.querySelector('.about');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateAboutStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

// Update your existing DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // For home page stats
    initStatsObserver();
    
    // For about page stats
    initAboutStatsObserver();
});


// Temporary debug function
function debugAnalytics() {
    console.log('=== ANALYTICS DEBUG ===');
    console.log('Cookie analyticsCookies:', getCookie('analyticsCookies'));
    console.log('Window.dataLayer:', window.dataLayer);
    console.log('Window.gtag type:', typeof window.gtag);
    console.log('Google Analytics script loaded:', document.querySelector('script[src*="googletagmanager.com"]') !== null);
    initializeAnalytics();
}

// Call this in browser console: debugAnalytics()