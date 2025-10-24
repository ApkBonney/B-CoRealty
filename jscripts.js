// Properties Data with Multiple Images
const propertiesData = [
    {
        id: 1,
        title: "Luxury Villa in Cantonments",
        price: "$850,000",
        address: "7 Rangoon Close, Cantonments, Accra",
        description: "Stunning 5-bedroom villa with modern amenities, swimming pool, and spacious garden perfect for family living.",
        type: "villa",
        bedrooms: 5,
        bathrooms: 4,
        sqft: 4500,
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ],
        featured: true
    },
    {
        id: 2,
        title: "Modern Apartment in Airport Residential",
        price: "$450,000",
        address: "24 Airport City, Accra",
        description: "Spacious 3-bedroom apartment with panoramic city views, modern kitchen, and premium finishes.",
        type: "apartment",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 2200,
        images: [
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ],
        featured: true
    },
    {
        id: 3,
        title: "Executive Condo in East Legon",
        price: "$320,000",
        address: "East Legon Hills, Accra",
        description: "Fully furnished executive condo with gym access, 24/7 security, and modern amenities.",
        type: "condo",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1800,
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ],
        featured: true
    },
    {
        id: 4,
        title: "Family Home in Roman Ridge",
        price: "$650,000",
        address: "Roman Ridge, Accra",
        description: "Beautiful 4-bedroom family home with large garden, perfect for entertaining and family living.",
        type: "house",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 3200,
        images: [
            "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2084&q=80",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2092&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
        ],
        featured: true
    },
    {
        id: 5,
        title: "Penthouse in Osu",
        price: "$1,200,000",
        address: "Osu, Accra",
        description: "Luxurious penthouse with rooftop terrace, ocean views, and premium finishes throughout.",
        type: "apartment",
        bedrooms: 4,
        bathrooms: 4,
        sqft: 3800,
        images: [
            "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        ],
        featured: true
    },
    {
        id: 6,
        title: "Contemporary Villa in Labone",
        price: "$750,000",
        address: "Labone, Accra",
        description: "Modern 4-bedroom villa with open-plan living, swimming pool, and landscaped garden.",
        type: "villa",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2800,
        images: [
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ],
        featured: true
    }
];

// DOM Elements
const propertiesContainer = document.getElementById('properties-container');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');
const prevNav = document.querySelector('.prev-nav');
const nextNav = document.querySelector('.next-nav');
const currentImageEl = document.getElementById('currentImage');
const totalImagesEl = document.getElementById('totalImages');

// Property Details Modal Elements
const propertyDetailsModal = document.getElementById('propertyDetailsModal');
const closeDetailsModal = document.querySelector('.close-details-modal');
const detailsTitle = document.getElementById('detailsTitle');
const detailsPrice = document.getElementById('detailsPrice');
const detailsAddress = document.getElementById('detailsAddress');
const detailsDescription = document.getElementById('detailsDescription');
const detailsBedrooms = document.getElementById('detailsBedrooms');
const detailsBathrooms = document.getElementById('detailsBathrooms');
const detailsSqft = document.getElementById('detailsSqft');
const detailsType = document.getElementById('detailsType');

// Gallery State
let currentGalleryImages = [];
let currentImageIndex = 0;

// Initialize Properties
document.addEventListener('DOMContentLoaded', function() {
    displayProperties(propertiesData);
    setupEventListeners();
});

// Display Properties
function displayProperties(properties) {
    propertiesContainer.innerHTML = '';
    
    if (properties.length === 0) {
        propertiesContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-home"></i>
                <h3>No Properties Found</h3>
                <p>Try adjusting your filters to see more properties.</p>
            </div>
        `;
        return;
    }
    
    properties.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertiesContainer.appendChild(propertyCard);
    });
}

// Create Property Card
function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.innerHTML = `
        <div class="property-image" data-property-id="${property.id}">
            <img src="${property.images[0]}" alt="${property.title}" loading="lazy">
            ${property.featured ? '<div class="property-badge">Featured</div>' : ''}
        </div>
        <div class="property-content">
            <div class="property-price">${property.price}</div>
            <div class="property-address">
                <i class="fas fa-map-marker-alt"></i> ${property.address}
            </div>
            <div class="property-description">${property.description}</div>
            <div class="property-features">
                <div class="feature">
                    <i class="fas fa-bed"></i>
                    <span>Bedrooms</span>
                    <div class="feature-value">${property.bedrooms}</div>
                </div>
                <div class="feature">
                    <i class="fas fa-bath"></i>
                    <span>Bathrooms</span>
                    <div class="feature-value">${property.bathrooms}</div>
                </div>
                <div class="feature">
                    <i class="fas fa-ruler-combined"></i>
                    <span>Sq Ft</span>
                    <div class="feature-value">${property.sqft}</div>
                </div>
            </div>
            <div class="property-actions">
                <button class="btn btn-primary view-details" data-property-id="${property.id}">
                    <i class="fas fa-eye"></i> View Details
                </button>
                <button class="btn btn-secondary schedule-tour" data-property-id="${property.id}">
                    <i class="fas fa-calendar"></i> Schedule Tour
                </button>
                <button class="btn btn-payment make-offer" data-property-id="${property.id}">
                    <i class="fas fa-file-contract"></i> Make Offer
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Setup Event Listeners
function setupEventListeners() {
    // Image Gallery
    propertiesContainer.addEventListener('click', function(e) {
        if (e.target.closest('.property-image')) {
            const propertyId = e.target.closest('.property-image').dataset.propertyId;
            openImageGallery(parseInt(propertyId));
        }
    });
    
    // Modal Controls
    closeModal.addEventListener('click', closeImageGallery);
    prevNav.addEventListener('click', showPreviousImage);
    nextNav.addEventListener('click', showNextImage);
    
    // Property Details Modal
    closeDetailsModal.addEventListener('click', closePropertyDetailsModal);
    
    // Keyboard Navigation
    document.addEventListener('keydown', function(e) {
        if (imageModal.style.display === 'block') {
            if (e.key === 'Escape') closeImageGallery();
            if (e.key === 'ArrowLeft') showPreviousImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
        if (propertyDetailsModal.style.display === 'block' && e.key === 'Escape') {
            closePropertyDetailsModal();
        }
    });
    
    // Close modals when clicking outside
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            closeImageGallery();
        }
    });
    
    propertyDetailsModal.addEventListener('click', function(e) {
        if (e.target === propertyDetailsModal) {
            closePropertyDetailsModal();
        }
    });
    
    // Property Actions
    propertiesContainer.addEventListener('click', function(e) {
        if (e.target.closest('.view-details')) {
            const propertyId = e.target.closest('.view-details').dataset.propertyId;
            viewPropertyDetails(parseInt(propertyId));
        }
        
        if (e.target.closest('.schedule-tour')) {
            const propertyId = e.target.closest('.schedule-tour').dataset.propertyId;
            scheduleTour(parseInt(propertyId));
        }
        
        if (e.target.closest('.make-offer')) {
            const propertyId = e.target.closest('.make-offer').dataset.propertyId;
            makeOffer(parseInt(propertyId));
        }
    });
    
    // Filter Functionality
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyFilters);
    }
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }
}

// Image Gallery Functions
function openImageGallery(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    if (property) {
        currentGalleryImages = property.images;
        currentImageIndex = 0;
        updateModalImage();
        imageModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeImageGallery() {
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateModalImage() {
    modalImage.src = currentGalleryImages[currentImageIndex];
    currentImageEl.textContent = currentImageIndex + 1;
    totalImagesEl.textContent = currentGalleryImages.length;
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
    updateModalImage();
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
    updateModalImage();
}

// Property Details Modal Functions
function viewPropertyDetails(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    if (property) {
        openPropertyDetailsModal(property);
    }
}

function openPropertyDetailsModal(property) {
    // Set main content
    detailsTitle.textContent = property.title;
    detailsPrice.textContent = property.price;
    detailsAddress.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${property.address}`;
    detailsDescription.textContent = property.description;
    detailsBedrooms.textContent = property.bedrooms;
    detailsBathrooms.textContent = property.bathrooms;
    detailsSqft.textContent = property.sqft.toLocaleString();
    detailsType.textContent = property.type.charAt(0).toUpperCase() + property.type.slice(1);
    
    // Show modal
    propertyDetailsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePropertyDetailsModal() {
    propertyDetailsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Property Action Functions
function scheduleTour(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    alert(`Scheduling tour for: ${property.title}\nOur team will contact you to arrange a viewing.`);
}

function makeOffer(propertyId) {
    const property = propertiesData.find(p => p.id === propertyId);
    alert(`Making offer for: ${property.title}\nPrice: ${property.price}\nRedirecting to offer form...`);
    simulatePaymentProcess(property);
}

function simulatePaymentProcess(property) {
    console.log('Starting payment process for:', property.title);
    setTimeout(() => {
        alert(`Offer submitted for ${property.title}!\nOur team will review your offer and contact you within 24 hours.`);
    }, 2000);
}

// Filter Functions
function applyFilters() {
    const typeFilter = document.getElementById('property-type').value;
    const bedroomsFilter = document.getElementById('bedrooms').value;
    const bathroomsFilter = document.getElementById('bathrooms').value;
    const priceFilter = document.getElementById('price-range').value;
    
    const filteredProperties = propertiesData.filter(property => {
        if (typeFilter !== 'all' && property.type !== typeFilter) return false;
        if (bedroomsFilter !== 'all' && property.bedrooms < parseInt(bedroomsFilter)) return false;
        if (bathroomsFilter !== 'all' && property.bathrooms < parseInt(bathroomsFilter)) return false;
        
        if (priceFilter !== 'all') {
            const price = parseInt(property.price.replace(/[$,]/g, ''));
            if (priceFilter === '800000+' && price < 800000) return false;
            if (priceFilter !== '800000+') {
                const [min, max] = priceFilter.split('-').map(Number);
                if (price < min || price > max) return false;
            }
        }
        
        return true;
    });
    
    displayProperties(filteredProperties);
}

function resetFilters() {
    document.getElementById('property-type').value = 'all';
    document.getElementById('bedrooms').value = 'all';
    document.getElementById('bathrooms').value = 'all';
    document.getElementById('price-range').value = 'all';
    
    displayProperties(propertiesData);
}

// Set active navigation
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

// Initialize when page loads
document.addEventListener('DOMContentLoaded', setActiveNav);

function initializeAnalytics() {
    console.log('Checking analytics permissions...');
    // Load Google Analytics only if user has consented
    const analyticsAllowed = getCookie('analyticsCookies') === 'true';
    console.log('Analytics allowed:', analyticsAllowed);
    // Explicitly update Google Analytics consent
    if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
            'analytics_storage': analyticsAllowed ? 'granted' : 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
        });
    }
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

// Call this on every page load
document.addEventListener('DOMContentLoaded', function() {
    initializeAnalytics();
});

// Cookie Functions for Properties Pages
function getCookie(name) {
    try {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) {
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
            }
        }
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
        document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/;SameSite=Lax";
    } catch (error) {
        console.error('Error setting cookie:', error);
    }
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

// Apply cookie preferences on page load
function applyCookiePreferences() {
    const analyticsAllowed = getCookie('analyticsCookies') !== 'false';
    
    if (analyticsAllowed) {
        initializeAnalytics();
    }
    
    console.log('Cookie Preferences Applied:', {
        analytics: analyticsAllowed
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    applyCookiePreferences();
});

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');
    
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }
    
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on links
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});
