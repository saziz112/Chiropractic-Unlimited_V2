import React from 'react';
import { TESTIMONIALS, SOCIAL_LINKS } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { Star, ArrowRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block" aria-hidden="true">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-4">
              Patient Experiences
            </h2>
            <a
              href={SOCIAL_LINKS.google}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-all duration-200 group mt-2 cursor-pointer focus-visible:underline"
              aria-label="Read more reviews on Google"
            >
              Read more reviews on Google <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((t, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col relative group border border-gray-100">
                <div className="flex gap-1 mb-6 text-brand-accent" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>

                <p className="text-brand-text/80 text-lg mb-8 flex-grow leading-relaxed font-light">"{t.text}"</p>

                <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold font-display text-xl">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary font-display">{t.author}</p>
                    <p className="text-xs text-brand-muted uppercase tracking-wide font-semibold">{t.type}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};