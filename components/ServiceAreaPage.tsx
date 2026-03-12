import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SERVICE_AREAS, CONDITIONS, BUSINESS_INFO, HOURS } from '../constants';
import { ArrowLeft, MapPin, Clock, Phone, CalendarCheck, ArrowRight, Navigation, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { StructuredData } from './StructuredData';

function renderBoldText(text: string) {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
}

export const ServiceAreaPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const area = SERVICE_AREAS.find(a => a.slug === slug);

    if (!area) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-bg">
                <div className="text-center">
                    <h1 className="text-4xl font-display text-brand-primary mb-4">Area Not Found</h1>
                    <Link to="/" className="text-brand-accent hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://chirounlimitedwellness.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Service Areas",
                "item": "https://chirounlimitedwellness.com/#location"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `Chiropractor Near ${area.city}, ${area.state}`,
                "item": `https://chirounlimitedwellness.com/locations/${slug}`
            }
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Chiropractic",
        "name": BUSINESS_INFO.name,
        "url": "https://chirounlimitedwellness.com",
        "telephone": BUSINESS_INFO.phone,
        "email": BUSINESS_INFO.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "3731 20th Ave",
            "addressLocality": "Valley",
            "addressRegion": "AL",
            "postalCode": "36854",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "City",
            "name": area.city,
            "containedInPlace": {
                "@type": "State",
                "name": area.state === "AL" ? "Alabama" : "Georgia"
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>{area.metaTitle}</title>
                <meta name="description" content={area.metaDescription} />
                <link rel="canonical" href={`https://chirounlimitedwellness.com/locations/${slug}`} />

                <meta property="og:title" content={area.metaTitle} />
                <meta property="og:description" content={area.metaDescription} />
                <meta property="og:url" content={`https://chirounlimitedwellness.com/locations/${slug}`} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Chiropractic Unlimited" />
                <meta property="og:locale" content="en_US" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={area.metaTitle} />
                <meta name="twitter:description" content={area.metaDescription} />
            </Helmet>
            <StructuredData data={[breadcrumbSchema, localBusinessSchema]} />

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-end bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
                <div className="absolute top-20 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-16 pt-40">
                    <Link to="/#location" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Location
                    </Link>

                    <RevealOnScroll animation="slide-left">
                        <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Service Area</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                            {area.title}
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-4">
                            {area.description}
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex items-center gap-2 text-white/90">
                                <Navigation className="w-5 h-5 text-brand-accent" />
                                <span className="font-semibold">{area.distance}</span> from {area.city}
                            </div>
                            <div className="flex items-center gap-2 text-white/90">
                                <Clock className="w-5 h-5 text-brand-accent" />
                                <span className="font-semibold">{area.driveTime}</span> drive
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#booking-cta"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                <CalendarCheck className="w-5 h-5" />
                                Book a Consultation
                            </a>
                            <a
                                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                {BUSINESS_INFO.phone}
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealOnScroll animation="fade-up">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary mb-6">
                                Chiropractic Care for {area.city}, {area.state} Residents
                            </h2>
                            {area.intro.split('\n\n').map((para, i) => (
                                <p key={i} className="text-brand-muted text-lg leading-relaxed mb-4 last:mb-0">
                                    {renderBoldText(para)}
                                </p>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="fade-up">
                        <div className="max-w-3xl">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Why Choose Us</span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary mb-6">
                                Why {area.city} Patients Choose Chiropractic Unlimited
                            </h2>
                            {area.whyChoose.split('\n\n').map((para, i) => (
                                <p key={i} className="text-brand-muted text-lg leading-relaxed mb-4 last:mb-0">
                                    {renderBoldText(para)}
                                </p>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Conditions We Treat */}
            <section className="py-16 md:py-24 bg-brand-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl animate-float"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <RevealOnScroll animation="slide-left">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">What We Treat</span>
                            <h2 className="text-3xl md:text-4xl font-display mb-6">
                                Conditions We Treat for {area.city} Patients
                            </h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                {renderBoldText(area.conditionsServed)}
                            </p>
                        </RevealOnScroll>

                        <RevealOnScroll animation="slide-right" delay={150}>
                            <div className="grid grid-cols-2 gap-3">
                                {CONDITIONS.map((condition) => (
                                    <div
                                        key={condition.slug}
                                        className="group cursor-pointer bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                                        onClick={() => navigate(`/conditions/${condition.slug}`)}
                                    >
                                        <h3 className="text-white font-semibold text-sm mb-1">{condition.title}</h3>
                                        <div className="flex items-center gap-1 text-brand-accent text-xs group-hover:translate-x-1 transition-transform">
                                            Learn more <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Directions & Info */}
            <section className="py-16 md:py-24 bg-brand-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="fade-up">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Directions Card */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-primary/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-brand-accent/10 rounded-xl">
                                        <MapPin className="w-6 h-6 text-brand-accent" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-brand-primary">Directions from {area.city}</h3>
                                </div>
                                <p className="text-brand-muted leading-relaxed mb-4">{area.directions}</p>
                                <div className="bg-brand-bg p-4 rounded-xl">
                                    <p className="font-semibold text-brand-primary mb-1">{BUSINESS_INFO.name}</p>
                                    <p className="text-brand-muted text-sm">{BUSINESS_INFO.address}</p>
                                    <p className="text-brand-muted text-sm">{BUSINESS_INFO.locationNote}</p>
                                </div>
                            </div>

                            {/* Hours Card */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-primary/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-brand-secondary/10 rounded-xl">
                                        <Clock className="w-6 h-6 text-brand-secondary" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-brand-primary">Office Hours</h3>
                                </div>
                                <div className="space-y-3">
                                    {HOURS.map((h) => (
                                        <div key={h.day} className="flex justify-between items-center py-2 border-b border-brand-primary/5 last:border-0">
                                            <span className="font-medium text-brand-text">{h.day}</span>
                                            <span className={`text-sm ${h.hours === 'Closed' ? 'text-red-500' : 'text-brand-accent font-semibold'}`}>
                                                {h.hours}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                                    className="mt-6 inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-primary transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    Call {BUSINESS_INFO.phone}
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Embedded Map */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="scale-up">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary">Find Us</h2>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[16/9] md:aspect-[21/9]">
                            <iframe
                                src={BUSINESS_INFO.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Map showing Chiropractic Unlimited location near ${area.city}, ${area.state}`}
                            ></iframe>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* FAQs */}
            {area.faqs && area.faqs.length > 0 && (
                <section className="py-16 md:py-24 bg-brand-bg">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <RevealOnScroll animation="scale-up">
                            <div className="text-center mb-12">
                                <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Got Questions?</span>
                                <h2 className="text-3xl md:text-4xl font-display text-brand-primary">
                                    Frequently Asked Questions from {area.city} Patients
                                </h2>
                            </div>
                        </RevealOnScroll>

                        <div className="space-y-4">
                            {area.faqs.map((faq, idx) => (
                                <RevealOnScroll key={idx} delay={idx * 100} animation={idx % 2 === 0 ? 'slide-left' : 'slide-right'}>
                                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-brand-primary/5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                        <h3 className="font-bold text-brand-primary text-lg mb-3">{faq.question}</h3>
                                        <p className="text-brand-muted leading-relaxed">{faq.answer}</p>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Banner */}
            <section id="booking-cta" className="py-16 md:py-24 bg-brand-accent text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <RevealOnScroll animation="scale-up">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Ready to Feel Better, {area.city}?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Schedule a consultation with <Link to="/about" className="underline hover:text-white transition-colors">Dr. Jason Bang (DC, FNP)</Link> — just {area.driveTime} from {area.city}. Take the first step toward lasting relief.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/#booking"
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-brand-primary font-bold rounded-full hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
                            >
                                <CalendarCheck className="w-5 h-5" />
                                Book Appointment
                            </Link>
                            <a
                                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/30 font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
                            >
                                <Phone className="w-5 h-5" />
                                Call {BUSINESS_INFO.phone}
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Other Service Areas */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="fade-up">
                        <div className="text-center mb-12">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">We Also Serve</span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary">Other Communities We Serve</h2>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll animation="stagger">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {SERVICE_AREAS.filter(a => a.slug !== slug).map((otherArea) => (
                                <div
                                    key={otherArea.slug}
                                    className="group cursor-pointer bg-brand-bg p-6 rounded-2xl border border-brand-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                    onClick={() => navigate(`/locations/${otherArea.slug}`)}
                                >
                                    <div className="flex items-start gap-3 mb-3">
                                        <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-brand-primary text-lg group-hover:text-brand-accent transition-colors">
                                                {otherArea.city}, {otherArea.state}
                                            </h3>
                                            <p className="text-brand-muted text-sm">{otherArea.distance} &middot; {otherArea.driveTime} drive</p>
                                        </div>
                                    </div>
                                    <p className="text-brand-muted text-sm mb-3">{otherArea.description}</p>
                                    <div className="flex items-center gap-1 text-brand-accent text-sm font-semibold group-hover:translate-x-1 transition-transform">
                                        Learn more <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </>
    );
};
