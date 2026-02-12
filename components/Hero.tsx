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
         <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/95 to-brand-secondary/90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
            <RevealOnScroll>
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium tracking-wider uppercase mb-6 mx-auto lg:mx-0">
                    Holistic Chiropractic Care
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.15] mb-6 tracking-tight">
                    Become The Best <br/>
                    <span className="italic font-light opacity-90">Version Of Yourself</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Getting to the root cause and healing from the inside out through corrective chiropractic care and integrated wellness.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a 
                        href="#location" 
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-primary transition-all duration-300 bg-white rounded-full shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)] hover:scale-[1.02]"
                    >
                        Book Appointment
                    </a>
                     <a 
                        href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`}
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-300 border border-white/30 rounded-full hover:bg-white/10 hover:border-white"
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
                            src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop" 
                            alt="Chiropractic Adjustment" 
                            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                        />
                        {/* Floating Badge */}
                        <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-[200px]">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-xs font-bold text-brand-primary uppercase tracking-wide">Accepting Patients</span>
                            </div>
                            <p className="text-brand-text text-sm font-medium leading-tight">Start your journey to recovery today.</p>
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