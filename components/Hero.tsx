import React from 'react';
import { PlayCircle } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { BUSINESS_INFO } from '../constants';

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center bg-brand-primary overflow-hidden pt-32 pb-16 md:pb-24">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop"
                    alt="Background Texture"
                    className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/95 to-brand-secondary/80"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
                        <RevealOnScroll>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
                                Chiropractor in <br />
                                <span className="text-brand-secondary">Valley, AL</span> <br />
                                <span className="font-classic italic font-light opacity-80 text-3xl md:text-4xl block mt-2">Become The Best Version Of Yourself</span>
                            </h1>

                            <p className="text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Getting to the root cause and healing from the inside out through chiropractic wellness and integrated care.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a
                                    href="#booking"
                                    className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-brand-primary transition-all duration-300 bg-white rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-50 cursor-pointer"
                                    aria-label="Book an Appointment"
                                >
                                    Book Appointment
                                </a>
                                <a
                                    href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                                    className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-300 border-2 border-white/20 rounded-full hover:bg-white/10 hover:border-white cursor-pointer"
                                    aria-label={`Call us at ${BUSINESS_INFO.phone}`}
                                >
                                    {BUSINESS_INFO.phone}
                                </a>
                            </div>

                            <div className="mt-10 flex items-center gap-3 text-white/60 hover:text-white cursor-pointer transition-colors group w-fit mx-auto lg:mx-0">
                                <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium tracking-widest uppercase border-b border-transparent group-hover:border-white transition-all">See How We Help</span>
                            </div>

                        </RevealOnScroll>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end relative">
                        <RevealOnScroll delay={200} className="w-full max-w-md lg:max-w-none">
                            {/* Main Image Container */}
                            <div className="relative">
                                {/* Decorative Circle */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 border border-white/20 rounded-full"></div>
                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-accent/20 rounded-full blur-xl"></div>

                                <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    <img
                                        src="https://i.ibb.co/cXh09B2q/Jason-B.jpg"
                                        alt="Dr. Jason Bang - Advanced Chiropractic Diagnostics"
                                        className="w-full h-full object-cover object-center"
                                    />
                                    {/* Floating Badge */}
                                    <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl max-w-[220px] border border-white/20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></div>
                                            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Accepting Patients</span>
                                        </div>
                                        <p className="text-brand-text text-sm font-semibold leading-relaxed">Start your journey to recovery today.</p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                </div>
            </div>
        </section>
    );
};