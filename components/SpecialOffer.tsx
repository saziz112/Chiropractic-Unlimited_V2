import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { BUSINESS_INFO } from '../constants';

export const SpecialOffer: React.FC = () => {
  return (
    <section id="offers" className="py-16 md:py-24 bg-brand-primary relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>
        
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
            <div className="bg-gradient-to-br from-brand-secondary to-brand-primary border border-white/10 rounded-3xl p-8 md:p-16 text-center md:flex md:items-center md:justify-between gap-12 shadow-2xl relative overflow-hidden">
                {/* Shine effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-pulse"></div>

                <div className="text-left md:w-3/5 relative z-10">
                    <div className="inline-block bg-brand-accent text-brand-primary font-bold px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-6">
                        Limited Time Offer
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">New Patient Special</h3>
                    <p className="text-white/90 text-lg mb-2">
                        Includes Consultation, Comprehensive Exam, and Report of Findings.
                    </p>
                    <p className="text-sm text-white/60 italic mt-4">
                        * A $350 Value. Terms and conditions apply.
                    </p>
                </div>
                
                <div className="mt-10 md:mt-0 md:w-2/5 flex flex-col items-center relative z-10">
                    <div className="flex items-start text-white mb-6">
                        <span className="text-2xl font-medium mt-2">$</span>
                        <span className="text-7xl font-bold font-display">20</span>
                    </div>
                    <a 
                        href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`}
                        className="bg-white hover:bg-gray-50 text-brand-primary font-bold py-4 px-8 rounded-full transition-all duration-300 w-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer group"
                    >
                        Schedule Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};