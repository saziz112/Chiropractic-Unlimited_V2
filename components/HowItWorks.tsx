import React from 'react';
import { HOW_IT_WORKS } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
            <RevealOnScroll>
                <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Our Process</span>
                <h2 className="text-4xl md:text-5xl font-display text-brand-primary mb-4">
                    The Healing Journey
                </h2>
                <p className="text-brand-muted text-lg max-w-2xl mx-auto">
                    We follow a structured path to not just relieve pain, but to restore your health completely.
                </p>
            </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((step, index) => (
                <RevealOnScroll key={index} delay={index * 150}>
                    <div className="relative p-10 rounded-2xl h-full bg-brand-bg/50 border border-brand-primary/5 transition-all duration-300 hover:bg-brand-primary hover:shadow-2xl group overflow-hidden cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 outline-none" tabIndex={0}>
                        {/* Background Number */}
                        <div className="text-[10rem] font-display font-bold text-brand-primary/5 absolute -top-10 -right-4 group-hover:text-white/5 transition-colors duration-500 leading-none select-none">
                            {step.step}
                        </div>
                        
                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold text-brand-primary mb-4 group-hover:text-white transition-colors duration-300 font-display">
                                {step.title}
                            </h4>
                            <div className="w-12 h-1 bg-brand-accent mb-6 group-hover:bg-white transition-colors duration-300"></div>
                            <p className="text-brand-text/80 group-hover:text-white/90 transition-colors duration-300 text-base leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                </RevealOnScroll>
            ))}
        </div>
      </div>
    </section>
  );
};