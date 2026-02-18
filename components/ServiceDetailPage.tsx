import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { ArrowLeft, CheckCircle2, Phone, CalendarCheck, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { StructuredData } from './StructuredData';

function renderBoldText(text: string) {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
}

export const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const service = SERVICES.find(s => s.slug === slug);
    const relatedServices = SERVICES.filter(s => s.slug !== slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-bg">
                <div className="text-center">
                    <h1 className="text-4xl font-display text-brand-primary mb-4">Service Not Found</h1>
                    <Link to="/" className="text-brand-accent hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{service.metaTitle || `${service.title} | Chiropractic Unlimited`}</title>
                <meta name="description" content={service.metaDescription || service.description} />
                <meta property="og:title" content={service.metaTitle || service.title} />
                <meta property="og:description" content={service.metaDescription || service.description} />
                <meta property="og:image" content={service.image} />
                <meta property="og:url" content={`https://chiropracticunlimited.com/services/${slug}`} />
                <meta property="og:type" content="article" />
            </Helmet>

            <StructuredData data={[
                ...(service.faqs ? [{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": service.faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                }] : []),
                {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://chiropracticunlimited.com"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Services",
                            "item": "https://chiropracticunlimited.com/#services"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": service.title,
                            "item": `https://chiropracticunlimited.com/services/${slug}`
                        }
                    ]
                }
            ]} />

            {/* Hero Banner */}
            <section className="relative min-h-[60vh] flex items-end bg-brand-primary overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover opacity-30 transition-transform duration-[20s] ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-brand-primary/40"></div>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-10 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-16 pt-40">
                    <Link to="/#services" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <RevealOnScroll animation="slide-left">
                        <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Our Services</span>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-brand-accent">
                                {service.icon}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                                {service.title}
                            </h1>
                        </div>
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                            {service.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#booking-cta"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-accent text-white font-bold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-pulse-glow"
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

            {/* Full Description */}
            <section className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <RevealOnScroll animation="fade-up">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary mb-6">What is {service.title}?</h2>
                            <p className="text-brand-muted text-lg leading-relaxed">
                                {service.fullDescription}
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="scale-up">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Why Choose This Service</span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary">Key Benefits</h2>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll animation="stagger">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {service.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-brand-bg border border-brand-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                                    <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                                    <span className="text-brand-text font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Treatment Approach */}
            {service.approach && (
                <section className="py-16 md:py-24 bg-brand-primary text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl animate-float"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <RevealOnScroll animation="slide-left">
                                <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">How It Works</span>
                                <h2 className="text-3xl md:text-4xl font-display mb-6">Our Approach</h2>
                                <p className="text-white/80 text-lg leading-relaxed">
                                    {renderBoldText(service.approach)}
                                </p>
                            </RevealOnScroll>

                            <RevealOnScroll animation="slide-right" delay={150}>
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-brand-accent/20 rounded-3xl blur-xl"></div>
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                        <img
                                            src={service.image}
                                            alt={`${service.title} treatment`}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply"></div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
                <section className="py-16 md:py-24 bg-brand-bg">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <RevealOnScroll animation="scale-up">
                            <div className="text-center mb-12">
                                <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Got Questions?</span>
                                <h2 className="text-3xl md:text-4xl font-display text-brand-primary">Frequently Asked Questions</h2>
                            </div>
                        </RevealOnScroll>

                        <div className="space-y-4">
                            {service.faqs.map((faq, idx) => (
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
                            Ready to Experience {service.title}?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Take the first step toward better health. Schedule a consultation with Dr. Jason Bang today.
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

            {/* Related Services */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <RevealOnScroll animation="fade-up">
                        <div className="text-center mb-12">
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Explore More</span>
                            <h2 className="text-3xl md:text-4xl font-display text-brand-primary">Other Services We Offer</h2>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll animation="stagger">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedServices.map((related) => (
                                <div
                                    key={related.slug}
                                    className="group cursor-pointer"
                                    onClick={() => navigate(`/services/${related.slug}`)}
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-sm bg-white mb-3 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                                        <img
                                            src={related.image}
                                            alt={related.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="text-brand-accent mb-1">{related.icon}</div>
                                            <h4 className="text-white font-bold text-sm leading-tight mb-1">{related.title}</h4>
                                            <div className="flex items-center gap-1 text-white/70 text-xs group-hover:text-brand-accent transition-colors duration-300">
                                                Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>
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
