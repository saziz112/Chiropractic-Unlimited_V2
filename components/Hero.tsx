import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { BUSINESS_INFO } from '../constants';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center bg-brand-primary overflow-hidden">
            {/* Full-bleed background video */}
            <div className="absolute inset-0 z-0">
                <video
                    src="/clinic-approach.mp4"
                    poster="/clinic-approach-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                />
                {/* Horizontal fade: solid on left → transparent on right (wellabs-style) */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/70 via-50% to-transparent"></div>
                {/* Vertical vignette: subtle dark at top and bottom for legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/30 via-transparent to-brand-primary/40"></div>
                {/* Mobile: stronger overall darken for text contrast on small screens */}
                <div className="absolute inset-0 lg:hidden bg-brand-primary/40"></div>
            </div>

            {/* Content overlay */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-16 md:pb-24">
                <div className="max-w-2xl">
                    <RevealOnScroll>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6 w-fit">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
                            <span className="text-xs font-semibold text-white/90 uppercase tracking-widest">Now accepting new patients</span>
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.05] mb-6 tracking-tight drop-shadow-2xl">
                            Chiropractor in <br />
                            <span className="text-brand-accent">Valley, AL</span>
                            <span className="font-classic italic font-light opacity-80 text-2xl md:text-3xl lg:text-4xl block mt-3">Become The Best Version Of Yourself</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/85 mb-10 font-light leading-relaxed max-w-xl drop-shadow-lg">
                            Treating the root cause and healing from the inside out — chiropractic wellness and integrated care from <strong className="font-semibold text-white">Dr. Jason Bang DC FNP</strong>, the only DC + Family Nurse Practitioner in Valley.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#booking"
                                className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-brand-primary transition-all duration-300 bg-white rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 cursor-pointer hover:-translate-y-0.5"
                                aria-label="Book an Appointment"
                            >
                                Book Appointment
                            </a>
                            <a
                                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-300 border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white cursor-pointer backdrop-blur-sm"
                                aria-label={`Call us at ${BUSINESS_INFO.phone}`}
                            >
                                {BUSINESS_INFO.phone}
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};