import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Location } from './components/Location';
import { Conditions } from './components/Conditions';
import { Difference } from './components/Difference';
import { Testimonials } from './components/Testimonials';
import { SpecialOffer } from './components/SpecialOffer';
import { HowItWorks } from './components/HowItWorks';
import { InstagramFeature } from './components/InstagramFeature';
import { LatestBlog } from './components/LatestBlog';
import { BookingSection } from './components/BookingSection';
import { StructuredData } from './components/StructuredData';
import { BUSINESS_INFO, HOURS, SOCIAL_LINKS, SERVICES, GEO_COORDINATES } from './constants';
import { Helmet } from 'react-helmet-async';

export const HomePage: React.FC = () => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Chiropractor",
        "@id": "https://chirounlimitedwellness.com/#organization",
        "name": BUSINESS_INFO.name,
        "description": "Chiropractic Unlimited provides advanced spinal correction, integrated wellness care, and holistic health services in Valley, AL. Dr. Jason Bang DC FNP combines chiropractic expertise with nursing knowledge for comprehensive patient care.",
        "image": "https://chirounlimitedwellness.com/jason-bang.jpg",
        "telephone": BUSINESS_INFO.phone,
        "email": BUSINESS_INFO.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_INFO.address.split(',')[0],
            "addressLocality": "Valley",
            "addressRegion": "AL",
            "postalCode": "36854",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            ...GEO_COORDINATES
        },
        "url": "https://chirounlimitedwellness.com",
        "priceRange": "$$",
        "paymentAccepted": "Cash, Credit Card, Debit Card",
        "currenciesAccepted": "USD",
        "sameAs": [
            SOCIAL_LINKS.instagram,
            SOCIAL_LINKS.google,
        ],
        "hasMap": "https://www.google.com/maps?q=3731+20th+Ave,+Valley,+AL+36854",
        "areaServed": [
            {
                "@type": "City",
                "name": "Valley",
                "containedInPlace": { "@type": "State", "name": "Alabama" }
            },
            {
                "@type": "City",
                "name": "Lanett",
                "containedInPlace": { "@type": "State", "name": "Alabama" }
            },
            {
                "@type": "City",
                "name": "West Point",
                "containedInPlace": { "@type": "State", "name": "Georgia" }
            },
            {
                "@type": "City",
                "name": "LaGrange",
                "containedInPlace": { "@type": "State", "name": "Georgia" }
            },
            {
                "@type": "City",
                "name": "Opelika",
                "containedInPlace": { "@type": "State", "name": "Alabama" }
            },
            {
                "@type": "City",
                "name": "Auburn",
                "containedInPlace": { "@type": "State", "name": "Alabama" }
            }
        ],
        "founder": {
            "@type": "Person",
            "@id": "https://chirounlimitedwellness.com/about#person",
            "name": "Dr. Jason Bang",
            "jobTitle": "Doctor of Chiropractic & Family Nurse Practitioner",
            "description": "Dr. Jason Bang DC FNP is a graduate of Life University with dual credentials in chiropractic and nursing. He brings a uniquely integrated approach to patient care.",
            "image": "https://chirounlimitedwellness.com/jason-bang.jpg",
            "url": "https://chirounlimitedwellness.com/about",
            "medicalSpecialty": "Musculoskeletal"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Chiropractic Services",
            "itemListElement": SERVICES.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "MedicalTherapy",
                    "name": service.title,
                    "description": service.description,
                    "url": `https://chirounlimitedwellness.com/services/${service.slug}`
                }
            }))
        },
        "openingHoursSpecification": HOURS.filter(h => h.hours !== "Closed").map(h => {
            const [openStr, closeStr] = h.hours.split(' – ');
            const to24 = (t: string) => {
                const [time, period] = t.split(' ');
                let [hr, min] = time.split(':').map(Number);
                if (period === 'PM' && hr !== 12) hr += 12;
                if (period === 'AM' && hr === 12) hr = 0;
                return `${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
            };
            return {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": h.day,
                "opens": to24(openStr),
                "closes": to24(closeStr)
            };
        })
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://chirounlimitedwellness.com/#website",
        "name": "Chiropractic Unlimited",
        "url": "https://chirounlimitedwellness.com",
        "publisher": {
            "@type": "Chiropractor",
            "@id": "https://chirounlimitedwellness.com/#organization"
        },
        "inLanguage": "en-US"
    };

    const heroVideoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Dr. Jason Bang Arriving at Chiropractic Unlimited",
        "description": "Short video showing Dr. Jason Bang walking up to the Chiropractic Unlimited storefront in Valley, AL — the real clinical environment patients visit for chiropractic and integrated wellness care.",
        "thumbnailUrl": "https://chirounlimitedwellness.com/clinic-approach-poster.jpg",
        "contentUrl": "https://chirounlimitedwellness.com/clinic-approach.mp4",
        "uploadDate": "2026-05-04",
        "duration": "PT21S",
        "publisher": {
            "@type": "Chiropractor",
            "@id": "https://chirounlimitedwellness.com/#organization"
        }
    };

    return (
        <>
            <Helmet>
                <title>Chiropractic Unlimited | Valley, AL Chiropractor (DC + FNP)</title>
                <meta name="description" content="Chiropractic Unlimited in Valley, AL offers advanced spinal correction, integrated care, and holistic wellness. Dr. Jason Bang DC FNP treats the root cause of pain." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://chirounlimitedwellness.com/" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Chiropractor in Valley, AL | Chiropractic Unlimited" />
                <meta property="og:description" content="Advanced spinal correction, integrated care, and holistic wellness in Valley, AL. Dr. Jason Bang DC FNP." />
                <meta property="og:image" content="https://chirounlimitedwellness.com/jason-bang.jpg" />
                <meta property="og:url" content="https://chirounlimitedwellness.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiropractic Unlimited" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Chiropractor in Valley, AL | Chiropractic Unlimited" />
                <meta name="twitter:description" content="Advanced spinal correction, integrated care, and holistic wellness in Valley, AL. Dr. Jason Bang DC FNP." />
                <meta name="twitter:image" content="https://chirounlimitedwellness.com/jason-bang.jpg" />
            </Helmet>
            <StructuredData data={[localBusinessSchema, websiteSchema, heroVideoSchema]} />
            <Hero />
            <Conditions />
            <Testimonials />
            <Difference />
            <HowItWorks />
            <Services />
            <SpecialOffer />
            <About />
            <InstagramFeature />
            <LatestBlog />
            <BookingSection />
            <Location />
        </>
    );
};
