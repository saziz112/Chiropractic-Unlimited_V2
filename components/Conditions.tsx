import React from 'react';
import { CONDITIONS } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { ArrowRight } from 'lucide-react';

export const Conditions: React.FC = () => {
  return (
    <section id="conditions" className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll>
            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Relief & Recovery</span>
            <h2 className="text-4xl md:text-5xl font-display text-brand-primary mb-6">
              Conditions We Treat
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              Are you tired of living with pain that holds you back? We help patients find relief from a wide range of chronic and acute conditions through targeted, non-invasive care.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CONDITIONS.map((condition, index) => (
            <RevealOnScroll key={index} delay={index * 50}>
              <div className="group cursor-pointer relative">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-sm bg-white mb-4 transition-all duration-300 group-hover:shadow-xl">
                    <img 
                        src={condition.image} 
                        alt={condition.title}
                        className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:brightness-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity duration-300"></div>
                    
                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                         <h4 className="text-white font-bold font-sans text-base leading-tight mb-1">
                            {condition.title}
                        </h4>
                        <div className="w-full h-0.5 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <div className="text-center mt-12">
             <a href="#services" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors group">
                View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
        </div>
      </div>
    </section>
  );
};