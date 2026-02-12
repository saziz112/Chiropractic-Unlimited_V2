import React from 'react';
import { MapPin, Phone, Clock, Info, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO, HOURS, SOCIAL_LINKS } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Location: React.FC = () => {
    return (
        <section id="location" className="py-16 md:py-24 bg-brand-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Info Side */}
                    <div className="order-2 lg:order-1">
                        <RevealOnScroll>
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Visit Us</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-10">
                                Contact & Location
                            </h2>

                            <div className="space-y-10">
                                {/* Address Block */}
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm border border-gray-100 group-hover:border-brand-primary/30 transition-colors">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-lg font-bold text-brand-primary mb-2 font-display">Our Location</h4>
                                        <p className="text-brand-muted mb-3">{BUSINESS_INFO.address}</p>
                                        <div className="inline-block bg-white px-4 py-3 rounded-lg border border-gray-200 shadow-sm mb-4">
                                            <p className="text-sm text-brand-text flex gap-2 items-start">
                                                <Info className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                                                <span>{BUSINESS_INFO.locationNote}</span>
                                            </p>
                                        </div>
                                        <a
                                            href={SOCIAL_LINKS.google}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                                        >
                                            <Navigation size={16} /> Get Directions
                                        </a>
                                    </div>
                                </div>

                                {/* Phone Block */}
                                <div className="flex items-start group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm border border-gray-100 group-hover:border-brand-primary/30 transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-lg font-bold text-brand-primary mb-2 font-display">Phone</h4>
                                        <p className="text-brand-muted mb-1">Call us for an appointment.</p>
                                        <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-2xl font-bold text-brand-primary hover:text-brand-secondary transition-colors font-display">
                                            {BUSINESS_INFO.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Hours Block */}
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm border border-gray-100">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div className="ml-6 w-full max-w-md">
                                        <h4 className="text-lg font-bold text-brand-primary mb-4 font-display">Practice Hours</h4>
                                        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                            <ul className="space-y-3">
                                                {HOURS.map((item) => (
                                                    <li key={item.day} className="flex justify-between text-sm border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                                                        <span className="font-medium text-brand-primary w-24">{item.day}</span>
                                                        <span className={`${item.hours === 'Closed' ? 'text-brand-muted/50' : 'text-brand-text font-medium'}`}>
                                                            {item.hours}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Map Side */}
                    <div className="order-1 lg:order-2 h-full min-h-[350px] md:min-h-[500px]">
                        <RevealOnScroll delay={200} className="h-full">
                            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group">
                                <iframe
                                    src={BUSINESS_INFO.mapUrl}
                                    width="100%"
                                    height="100%"
                                    className="border-0 min-h-[350px] md:min-h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps Location"
                                ></iframe>
                                <a
                                    href={SOCIAL_LINKS.google}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-md py-2 px-4 rounded-lg shadow-md text-sm font-bold text-brand-primary flex items-center gap-2 hover:bg-white transition-colors"
                                >
                                    Valley, Alabama <ExternalLink size={14} />
                                </a>
                            </div>
                        </RevealOnScroll>
                    </div>

                </div>
            </div>
        </section>
    );
};