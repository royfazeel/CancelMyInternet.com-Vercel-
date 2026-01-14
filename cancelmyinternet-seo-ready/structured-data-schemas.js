/**
 * Structured Data (JSON-LD) Templates for CancelMyInternet.com
 * 
 * These schema templates should be added to the <head> section of each page.
 * Copy the relevant JSON-LD blocks and paste them inside <script type="application/ld+json"> tags.
 */

// ============================================
// ORGANIZATION SCHEMA (Homepage only)
// ============================================
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CancelMyInternet.com",
  "alternateName": "Cancel My Internet",
  "url": "https://cancelmyinternet.com",
  "logo": "https://cancelmyinternet.com/logo.png",
  "description": "Independent third-party service providing phone guidance and assistance for canceling internet and cable TV services. Not affiliated with any provider.",
  "email": "support@cancelmyinternet.com",
  "telephone": "+1-888-524-0250",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-888-524-0250",
    "contactType": "customer service",
    "email": "support@cancelmyinternet.com",
    "availableLanguage": "English",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  }
};

// ============================================
// WEBSITE SCHEMA (Homepage only)
// ============================================
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CancelMyInternet.com",
  "url": "https://cancelmyinternet.com",
  "description": "Independent cancellation assistance for internet and cable TV services",
  "publisher": {
    "@type": "Organization",
    "name": "CancelMyInternet.com"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://cancelmyinternet.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// ============================================
// SERVICE SCHEMA (Homepage & Provider Pages)
// ============================================
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Cancellation Assistance",
  "name": "Internet & Cable Cancellation Guidance",
  "description": "Independent phone-based guidance service helping consumers cancel their internet and cable TV services. We provide scripts, talking points, and expert tips.",
  "provider": {
    "@type": "Organization",
    "name": "CancelMyInternet.com",
    "url": "https://cancelmyinternet.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cancellation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Internet Only Cancellation Assistance"
        },
        "price": "29.99",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bundle Cancellation Assistance (Internet + TV)"
        },
        "price": "39.99",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "TV Only Cancellation Assistance"
        },
        "price": "29.99",
        "priceCurrency": "USD"
      }
    ]
  }
};

// ============================================
// FAQ SCHEMA (FAQ Page)
// ============================================
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is CancelMyInternet.com affiliated with any internet or cable provider?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. CancelMyInternet.com is an independent third-party service. We are NOT affiliated with, endorsed by, or connected to Verizon, Spectrum, AT&T, Optimum, Xfinity, or any other internet or cable TV provider. We provide guidance and coaching to help you cancel your own service."
      }
    },
    {
      "@type": "Question",
      "name": "What does your cancellation assistance service include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our service includes phone-based guidance through the cancellation process, custom scripts and talking points for your provider, tips for handling retention offers, a checklist for equipment returns and final billing, and preparation for what to expect on the call. We guide you - you make the actual cancellation call to your provider."
      }
    },
    {
      "@type": "Question",
      "name": "How much does the cancellation assistance service cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our pricing is simple and transparent: $29.99 for internet only or TV only cancellation assistance, and $39.99 for bundle (both internet and TV) cancellation assistance. There are no hidden fees. Payment is collected during the consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Can you guarantee my service will be cancelled?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, we cannot guarantee cancellation outcomes. Final decisions rest with your service provider based on your account status, contract terms, and their policies. We provide expert guidance and preparation to help you navigate the process as smoothly as possible."
      }
    },
    {
      "@type": "Question",
      "name": "What information do I need to cancel my service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You'll typically need: your account number (found on your bill), the name on the account, your service address, your account PIN or security verification, and your preferred service end date. We'll help you prepare all of this during our consultation."
      }
    },
    {
      "@type": "Question",
      "name": "What is your refund policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If we are unable to provide the consultation service as described, you may be eligible for a refund. Refunds are processed within 5-7 business days. Once the consultation is completed, refunds are generally not available as the service has been rendered. Contact support@cancelmyinternet.com for refund inquiries."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to return equipment after canceling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most providers require you to return rented equipment (modems, routers, cable boxes, DVRs) within a specific timeframe, usually 14-30 days. Failure to return equipment typically results in charges of $100-$300 per item. We include equipment return guidance in your cancellation checklist."
      }
    },
    {
      "@type": "Question",
      "name": "What are your business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team is available Monday through Friday, 9:00 AM to 6:00 PM Eastern Time. We are closed on weekends and major US holidays. You can reach us at (888) 524-0250 or support@cancelmyinternet.com."
      }
    }
  ]
};

// ============================================
// HOW-TO SCHEMA (How It Works Page)
// ============================================
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Cancel Your Internet or Cable Service",
  "description": "Step-by-step guide to canceling your internet or cable TV service with expert guidance from CancelMyInternet.com",
  "totalTime": "PT30M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Submit Your Request",
      "text": "Call us at (888) 524-0250 or contact us online. Share your provider name, service type, and preferred cancellation date.",
      "url": "https://cancelmyinternet.com/how-it-works#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Get Your Cancellation Script",
      "text": "We prepare custom talking points for your specific provider, including how to handle retention offers and common objections.",
      "url": "https://cancelmyinternet.com/how-it-works#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Make the Cancellation Call",
      "text": "Using our guidance, you call your provider directly and request cancellation. We prepare you for what to expect.",
      "url": "https://cancelmyinternet.com/how-it-works#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Confirm and Complete",
      "text": "Get a confirmation number, review your final bill expectations, and follow our equipment return checklist.",
      "url": "https://cancelmyinternet.com/how-it-works#step-4"
    }
  ]
};

// ============================================
// BREADCRUMB SCHEMAS (All Inner Pages)
// ============================================

// Cancel Verizon Breadcrumb
const breadcrumbVerizon = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cancelmyinternet.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cancel Verizon",
      "item": "https://cancelmyinternet.com/cancel-verizon"
    }
  ]
};

// Cancel Spectrum Breadcrumb
const breadcrumbSpectrum = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cancelmyinternet.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cancel Spectrum",
      "item": "https://cancelmyinternet.com/cancel-spectrum"
    }
  ]
};

// Cancel AT&T Breadcrumb
const breadcrumbATT = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cancelmyinternet.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cancel AT&T",
      "item": "https://cancelmyinternet.com/cancel-att"
    }
  ]
};

// Cancel Optimum Breadcrumb
const breadcrumbOptimum = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cancelmyinternet.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cancel Optimum",
      "item": "https://cancelmyinternet.com/cancel-optimum"
    }
  ]
};

// How It Works Breadcrumb
const breadcrumbHowItWorks = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cancelmyinternet.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "How It Works",
      "item": "https://cancelmyinternet.com/how-it-works"
    }
  ]
};

// Pricing Breadcrumb
const breadcrumbPricing = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cancelmyinternet.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Pricing",
      "item": "https://cancelmyinternet.com/pricing"
    }
  ]
};

// FAQ Breadcrumb
const breadcrumbFAQ = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cancelmyinternet.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "FAQ",
      "item": "https://cancelmyinternet.com/faq"
    }
  ]
};

// About Breadcrumb
const breadcrumbAbout = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cancelmyinternet.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://cancelmyinternet.com/about"
    }
  ]
};

// Contact Breadcrumb
const breadcrumbContact = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cancelmyinternet.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://cancelmyinternet.com/contact"
    }
  ]
};

// ============================================
// PROVIDER-SPECIFIC FAQ SCHEMAS
// ============================================

// Verizon FAQ Schema
const faqSchemaVerizon = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Verizon's cancellation phone number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Verizon's customer service number is 1-800-VERIZON (1-800-837-4966). You can also cancel through My Verizon app or online, but phone is often fastest for immediate cancellation. Note: CancelMyInternet.com is NOT Verizon - we provide guidance for your call."
      }
    },
    {
      "@type": "Question",
      "name": "Does Verizon Fios have early termination fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your agreement. If you accepted a promotional rate with a 1 or 2-year commitment, you may owe $10-15 for each remaining month. Month-to-month plans have no ETF. Check your last bill or My Verizon for contract status."
      }
    },
    {
      "@type": "Question",
      "name": "How long do I have to return Verizon equipment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Verizon typically gives you 30 days to return equipment after cancellation. We recommend returning within 14 days to be safe. Keep your return receipt for at least 90 days in case of billing disputes."
      }
    },
    {
      "@type": "Question",
      "name": "Can I keep my Verizon email address after canceling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can keep your @verizon.net email by signing up for Verizon's free email service. Make sure to set this up BEFORE your service ends."
      }
    }
  ]
};

// Spectrum FAQ Schema
const faqSchemaSpectrum = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Spectrum have cancellation fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, Spectrum does not have contracts or early termination fees for residential customers. You can cancel anytime without penalty. However, you won't receive a prorated refund for unused days if you cancel mid-billing cycle."
      }
    },
    {
      "@type": "Question",
      "name": "How do I avoid Spectrum's retention offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply be polite but firm. Say 'I appreciate the offer, but my decision is final. Please proceed with the cancellation.' Don't explain your reasons in detail - this gives them more angles to counter."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel Spectrum online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, Spectrum requires you to call 1-833-267-6094 to cancel. This is intentional to give their retention team a chance to keep you. CancelMyInternet.com can prepare you to navigate this call efficiently."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to my Spectrum email after canceling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spectrum email addresses (@charter.net, @twc.com, etc.) are typically deactivated 60 days after service cancellation. We recommend switching to Gmail, Outlook, or another free email provider before you cancel."
      }
    }
  ]
};

// AT&T FAQ Schema
const faqSchemaATT = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is AT&T's cancellation fee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AT&T's early termination fee depends on your agreement type. For 12-month promotional commitments, it's typically $15/month remaining (up to $180 max). Equipment installment plans require paying the remaining balance. Month-to-month customers have no ETF."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel AT&T Internet but keep wireless?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, AT&T Internet and AT&T Wireless are separate accounts (despite being the same company). Canceling internet won't affect your wireless service, but you may lose any bundle discounts you were receiving."
      }
    },
    {
      "@type": "Question",
      "name": "How do I cancel AT&T U-verse TV only?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can cancel U-verse TV while keeping internet. Call 1-800-288-2020 and specify you only want to cancel TV service. They may offer a reduced TV package or internet-only rate."
      }
    },
    {
      "@type": "Question",
      "name": "What's the AT&T cancellation phone number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The main AT&T customer service number is 1-800-288-2020 for internet/TV. For internet only, you might be directed to 1-800-288-2747. Note: CancelMyInternet.com is NOT AT&T - we provide guidance for your call."
      }
    }
  ]
};

// ============================================
// USAGE INSTRUCTIONS
// ============================================
/*

HOW TO ADD STRUCTURED DATA TO YOUR PAGES:

1. HOMEPAGE (index.html) - Add all three:
   <script type="application/ld+json">
   [paste organizationSchema JSON here]
   </script>
   <script type="application/ld+json">
   [paste websiteSchema JSON here]
   </script>
   <script type="application/ld+json">
   [paste serviceSchema JSON here]
   </script>

2. FAQ PAGE (faq.html) - Add:
   <script type="application/ld+json">
   [paste faqSchema JSON here]
   </script>
   <script type="application/ld+json">
   [paste breadcrumbFAQ JSON here]
   </script>

3. HOW IT WORKS PAGE (how-it-works.html) - Add:
   <script type="application/ld+json">
   [paste howToSchema JSON here]
   </script>
   <script type="application/ld+json">
   [paste breadcrumbHowItWorks JSON here]
   </script>

4. PROVIDER PAGES (cancel-verizon.html, etc.) - Add:
   <script type="application/ld+json">
   [paste serviceSchema JSON here]
   </script>
   <script type="application/ld+json">
   [paste appropriate breadcrumb JSON here]
   </script>
   <script type="application/ld+json">
   [paste provider-specific FAQ schema here]
   </script>

5. OTHER PAGES - Add appropriate breadcrumb only

TEST YOUR STRUCTURED DATA:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/

*/

// Export for use in build scripts if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    organizationSchema,
    websiteSchema,
    serviceSchema,
    faqSchema,
    howToSchema,
    breadcrumbVerizon,
    breadcrumbSpectrum,
    breadcrumbATT,
    breadcrumbOptimum,
    breadcrumbHowItWorks,
    breadcrumbPricing,
    breadcrumbFAQ,
    breadcrumbAbout,
    breadcrumbContact,
    faqSchemaVerizon,
    faqSchemaSpectrum,
    faqSchemaATT
  };
}
