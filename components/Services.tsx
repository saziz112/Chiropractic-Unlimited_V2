import React from 'react';
import { SERVICES } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <RevealOnScroll>
            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Holistic Care</span>
            <h2 className="text-4xl md:text-5xl font-display text-brand-primary mb-6">
              Unlock Your Body's Potential
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              We don't just treat symptoms; we enhance function. Our integrated approach combines chiropractic expertise with nursing knowledge.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-brand-bg rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:bg-white border border-transparent hover:border-gray-100 group h-full flex flex-col items-start">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-3 font-display">{service.title}</h4>
                <p className="text-brand-muted leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};