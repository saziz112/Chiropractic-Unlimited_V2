import React from 'react';
import { SERVICES } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { useNavigate } from 'react-router-dom';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <RevealOnScroll>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block" aria-hidden="true">Holistic Care</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-6">
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
              <div
                className="bg-white rounded-2xl overflow-hidden transition-all duration-250 hover:shadow-2xl border border-gray-100 group h-full flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 outline-none"
                tabIndex={0}
                role="article"
                onClick={() => navigate(`/services/${service.slug}`)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
                    {service.icon}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-brand-primary mb-3 font-display">{service.title}</h4>
                  <p className="text-brand-muted leading-relaxed text-sm flex-grow">
                    {service.description}
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