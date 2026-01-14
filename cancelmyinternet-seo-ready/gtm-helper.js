/**
 * GTM DataLayer Helper for CancelMyInternet.com
 * Version: 1.0
 * 
 * This file handles all Google Tag Manager and GA4 event tracking.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a GTM container at tagmanager.google.com
 * 2. Replace 'GTM-XXXXXXX' with your actual GTM container ID
 * 3. Create a GA4 property at analytics.google.com
 * 4. In GTM, add a GA4 Configuration tag with your Measurement ID (G-XXXXXXXXXX)
 * 5. Create custom event tags for each event below
 */

// ============================================
// GTM CONTAINER INITIALIZATION
// ============================================

// Initialize dataLayer before GTM loads
window.dataLayer = window.dataLayer || [];

// GTM Container Code - Add this to <head> on all pages
// Replace GTM-XXXXXXX with your actual container ID
/*
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
*/

// GTM noscript fallback - Add this immediately after opening <body> tag
/*
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
*/


// ============================================
// CORE EVENT TRACKING FUNCTIONS
// ============================================

/**
 * Push event to dataLayer
 * @param {string} eventName - Event name for GA4
 * @param {object} eventParams - Event parameters
 */
function gtmEvent(eventName, eventParams = {}) {
    // Add timestamp and page info to all events
    const enrichedParams = {
        ...eventParams,
        page_path: window.location.pathname,
        page_title: document.title,
        page_url: window.location.href,
        timestamp: new Date().toISOString()
    };
    
    window.dataLayer.push({
        event: eventName,
        ...enrichedParams
    });
    
    // Debug logging (only in development)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('📊 GTM Event:', eventName, enrichedParams);
    }
}


// ============================================
// PHONE CLICK TRACKING
// ============================================

/**
 * Track phone number clicks
 * @param {string} phoneNumber - Phone number clicked
 * @param {string} location - Where on page (header, footer, cta, popup, hero)
 */
function trackPhoneClick(phoneNumber, location) {
    gtmEvent('phone_click', {
        phone_number: phoneNumber,
        click_location: location,
        event_category: 'engagement',
        event_label: `${location}_phone_click`
    });
}

// Auto-attach to all phone links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
        link.addEventListener('click', function() {
            const phone = this.href.replace('tel:', '');
            const location = this.dataset.location || detectLinkLocation(this);
            trackPhoneClick(phone, location);
        });
    });
});

/**
 * Detect where a link is located on the page
 */
function detectLinkLocation(element) {
    if (element.closest('.header, nav')) return 'header';
    if (element.closest('.footer')) return 'footer';
    if (element.closest('.popup, .modal')) return 'popup';
    if (element.closest('.hero')) return 'hero';
    if (element.closest('.cta-section, .cta-band')) return 'cta_section';
    return 'page_content';
}


// ============================================
// FORM TRACKING
// ============================================

/**
 * Track form interactions
 * @param {string} formName - Form identifier
 * @param {string} action - start, field_focus, submit, success, error
 * @param {object} details - Additional details
 */
function trackFormInteraction(formName, action, details = {}) {
    gtmEvent(`form_${action}`, {
        form_name: formName,
        event_category: 'form',
        event_label: `${formName}_${action}`,
        ...details
    });
}

/**
 * Track form start (first field focus)
 */
function trackFormStart(formName) {
    trackFormInteraction(formName, 'start');
}

/**
 * Track form submission
 */
function trackFormSubmit(formName, success = true) {
    trackFormInteraction(formName, success ? 'submit' : 'error', {
        form_success: success
    });
}

// Auto-attach form tracking
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('form').forEach(function(form) {
        const formName = form.id || form.name || 'unnamed_form';
        let formStarted = false;
        
        // Track first field focus
        form.querySelectorAll('input, textarea, select').forEach(function(field) {
            field.addEventListener('focus', function() {
                if (!formStarted) {
                    formStarted = true;
                    trackFormStart(formName);
                }
            }, { once: true });
        });
        
        // Track form submission
        form.addEventListener('submit', function() {
            trackFormSubmit(formName, true);
        });
    });
});


// ============================================
// FAQ TRACKING
// ============================================

/**
 * Track FAQ expansion
 * @param {string} questionText - The FAQ question
 * @param {number} questionIndex - Position in list (1-based)
 */
function trackFAQExpand(questionText, questionIndex) {
    gtmEvent('faq_expand', {
        question_text: questionText.substring(0, 100), // Truncate for cleaner data
        question_index: questionIndex,
        event_category: 'engagement',
        event_label: `faq_${questionIndex}`
    });
}


// ============================================
// SCROLL DEPTH TRACKING
// ============================================

let scrollMarkers = [25, 50, 75, 90, 100];
let scrollMarkersTriggered = [];

/**
 * Track scroll depth milestone
 * @param {number} percentage - Scroll percentage reached
 */
function trackScrollDepth(percentage) {
    gtmEvent('scroll_depth', {
        scroll_percentage: percentage,
        event_category: 'engagement',
        event_label: `scroll_${percentage}`
    });
}

// Auto-track scroll depth
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (docHeight === 0) return;
    
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    scrollMarkers.forEach(function(marker) {
        if (scrollPercent >= marker && !scrollMarkersTriggered.includes(marker)) {
            scrollMarkersTriggered.push(marker);
            trackScrollDepth(marker);
        }
    });
}, { passive: true });


// ============================================
// OUTBOUND LINK TRACKING
// ============================================

/**
 * Track outbound link clicks
 * @param {string} url - Destination URL
 * @param {string} linkText - Link text
 */
function trackOutboundClick(url, linkText) {
    gtmEvent('outbound_click', {
        outbound_url: url,
        link_text: linkText.substring(0, 100),
        event_category: 'outbound',
        event_label: new URL(url).hostname
    });
}

// Auto-track outbound links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="http"]').forEach(function(link) {
        // Check if external link
        if (link.hostname !== window.location.hostname) {
            link.addEventListener('click', function() {
                trackOutboundClick(this.href, this.textContent.trim());
            });
        }
    });
});


// ============================================
// PROVIDER PAGE TRACKING
// ============================================

/**
 * Track provider page views with enhanced data
 * @param {string} provider - Provider name
 */
function trackProviderView(provider) {
    gtmEvent('provider_page_view', {
        provider_name: provider,
        event_category: 'pageview',
        event_label: `provider_${provider.toLowerCase().replace(/\s+/g, '_')}`
    });
}


// ============================================
// POPUP TRACKING
// ============================================

/**
 * Track popup interactions
 * @param {string} action - show, dismiss, cta_click
 * @param {string} provider - Provider name (for provider pages)
 */
function trackPopupInteraction(action, provider = 'general') {
    gtmEvent('popup_interaction', {
        popup_action: action,
        provider_name: provider,
        event_category: 'popup',
        event_label: `popup_${action}_${provider.toLowerCase()}`
    });
}


// ============================================
// CTA BUTTON TRACKING
// ============================================

/**
 * Track CTA button clicks
 * @param {string} ctaText - Button text
 * @param {string} ctaLocation - Where on page
 * @param {string} ctaType - primary, secondary, outline
 */
function trackCTAClick(ctaText, ctaLocation, ctaType = 'primary') {
    gtmEvent('cta_click', {
        cta_text: ctaText.substring(0, 50),
        cta_location: ctaLocation,
        cta_type: ctaType,
        event_category: 'cta',
        event_label: `${ctaLocation}_${ctaType}`
    });
}


// ============================================
// PAGE TIMING TRACKING
// ============================================

/**
 * Track time on page
 * Called when user leaves or at intervals
 */
let pageLoadTime = Date.now();
let timeOnPageIntervals = [30, 60, 120, 300]; // seconds
let timeIntervalsTriggered = [];

setInterval(function() {
    const secondsOnPage = Math.round((Date.now() - pageLoadTime) / 1000);
    
    timeOnPageIntervals.forEach(function(interval) {
        if (secondsOnPage >= interval && !timeIntervalsTriggered.includes(interval)) {
            timeIntervalsTriggered.push(interval);
            gtmEvent('time_on_page', {
                seconds: interval,
                event_category: 'engagement',
                event_label: `time_${interval}s`
            });
        }
    });
}, 5000);


// ============================================
// ECOMMERCE / CONVERSION TRACKING
// ============================================

/**
 * Track when user views pricing
 */
function trackPricingView() {
    gtmEvent('view_pricing', {
        event_category: 'conversion_funnel',
        event_label: 'pricing_page_view'
    });
}

/**
 * Track service selection
 * @param {string} serviceName - Name of service selected
 * @param {number} price - Price of service
 */
function trackServiceSelect(serviceName, price) {
    gtmEvent('select_service', {
        service_name: serviceName,
        service_price: price,
        event_category: 'conversion_funnel',
        event_label: serviceName
    });
}


// ============================================
// UTM PARAMETER HANDLING
// ============================================

/**
 * Get UTM parameters from URL
 * @returns {object} UTM parameters
 */
function getUTMParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_content: params.get('utm_content') || '',
        utm_term: params.get('utm_term') || ''
    };
}

/**
 * Store UTM params in session for attribution
 */
function storeUTMParams() {
    const utmParams = getUTMParams();
    if (utmParams.utm_source) {
        sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
        
        // Push to dataLayer for GTM
        gtmEvent('utm_captured', utmParams);
    }
}

// Capture UTM on page load
document.addEventListener('DOMContentLoaded', storeUTMParams);


// ============================================
// ERROR TRACKING
// ============================================

/**
 * Track JavaScript errors
 */
window.addEventListener('error', function(event) {
    gtmEvent('js_error', {
        error_message: event.message,
        error_source: event.filename,
        error_line: event.lineno,
        event_category: 'error'
    });
});


// ============================================
// EXPORT FUNCTIONS FOR GLOBAL USE
// ============================================

window.GTM = {
    // Core
    event: gtmEvent,
    
    // Phone
    trackPhoneClick: trackPhoneClick,
    
    // Forms
    trackFormStart: trackFormStart,
    trackFormSubmit: trackFormSubmit,
    trackFormInteraction: trackFormInteraction,
    
    // Engagement
    trackFAQExpand: trackFAQExpand,
    trackScrollDepth: trackScrollDepth,
    trackOutboundClick: trackOutboundClick,
    trackCTAClick: trackCTAClick,
    
    // Provider/Popup
    trackProviderView: trackProviderView,
    trackPopupInteraction: trackPopupInteraction,
    
    // Conversion
    trackPricingView: trackPricingView,
    trackServiceSelect: trackServiceSelect,
    
    // Utilities
    getUTMParams: getUTMParams
};

// Log initialization
console.log('✅ GTM Helper initialized for CancelMyInternet.com');
