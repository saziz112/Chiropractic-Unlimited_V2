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
import { BookingSection } from './components/BookingSection';
import { StructuredData } from './components/StructuredData';
import { BUSINESS_INFO, HOURS } from './constants';
import { Helmet } from 'react-helmet-async';

export const HomePage: React.FC = () => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Chiropractor",
        "name": BUSINESS_INFO.name,
        "image": "https://i.ibb.co/cXh09B2q/Jason-B.jpg",
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
            "latitude": 32.82,
            "longitude": -85.17
        },
        "url": "https://chiropracticunlimited.com",
        "priceRange": "$$",
        "openingHoursSpecification": HOURS.map(h => ({
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": h.day,
            "opens": h.hours === "Closed" ? "00:00" : h.hours.split(' – ')[0],
            "closes": h.hours === "Closed" ? "00:00" : h.hours.split(' – ')[1]
        }))
    };

    return (
        <>
            <Helmet>
                <title>Chiropractor in Valley, AL | Chiropractic Unlimited</title>
                <meta name="description" content="Chiropractic Unlimited in Valley, AL offers advanced spinal correction, integrated care, and holistic wellness. Dr. Jason Bang DC FNP treats the root cause of pain." />
                <meta property="og:title" content="Chiropractor in Valley, AL | Chiropractic Unlimited" />
                <meta property="og:description" content="Advanced spinal correction, integrated care, and holistic wellness in Valley, AL. Dr. Jason Bang DC FNP." />
                <meta property="og:image" content="https://i.ibb.co/cXh09B2q/Jason-B.jpg" />
                <meta property="og:url" content="https://chiropracticunlimited.com/" />
                <meta property="og:type" content="website" />
            </Helmet>
            <StructuredData data={localBusinessSchema} />
            <Hero />
            <Conditions />
            <Testimonials />
            <Difference />
            <HowItWorks />
            <Services />
            <SpecialOffer />
            <About />
            <InstagramFeature />
            <BookingSection />
            <Location />
        </>
    );
};
