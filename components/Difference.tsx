import React from 'react';
import { DIFFERENCE_POINTS } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Difference: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-primary text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
            <RevealOnScroll>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">What Makes Us Different?</h3>
                <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed font-light">
                    We are more than just a clinic—we are a family dedicated to transforming lives through care that comes from the heart.
                </p>
            </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {DIFFERENCE_POINTS.map((point, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                    <div className="text-center group">
                        <div className="bg-white/5 border border-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-accent backdrop-blur-sm shadow-inner group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                            {point.icon}
                        </div>
                        <h4 className="text-xl font-bold font-display mb-4 text-white">{point.title}</h4>
                        <p className="text-white/70 text-base leading-relaxed">
                            {point.description}
                        </p>
                    </div>
                </RevealOnScroll>
            ))}
        </div>
      </div>
    </section>
  );
};