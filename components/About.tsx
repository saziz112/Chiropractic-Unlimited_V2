import React from 'react';
import { BIO_TEXT, BUSINESS_INFO } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 gap-16 items-center">

          {/* Image Column */}
          <div className="lg:col-span-5 relative mb-16 lg:mb-0">
            <RevealOnScroll>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Updated Doctor Image URL */}
                <img
                  src="https://i.ibb.co/cXh09B2q/Jason-B.jpg"
                  alt={BUSINESS_INFO.doctor}
                  className="w-full h-auto object-cover max-h-[700px]"
                />

                {/* Gradient overlay for text readability at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-display font-bold text-2xl">{BUSINESS_INFO.doctor}</p>
                  <p className="text-white/80 font-medium text-sm tracking-wide">Chiropractic Unlimited</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-secondary/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
            </RevealOnScroll>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={200}>
              <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Meet The Doctor</span>
              <h2 className="text-4xl md:text-5xl font-display text-brand-primary mb-8 leading-tight">
                Compassionate Care, <br />Global Experience.
              </h2>

              <div className="space-y-6 text-brand-text/80 leading-relaxed font-sans text-lg">
                {BIO_TEXT.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 flex gap-6">
                <div className="px-8 py-4 bg-brand-bg rounded-xl border border-brand-primary/10 text-center min-w-[120px]">
                  <span className="block text-2xl font-bold text-brand-primary font-display mb-1">DC</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Doctor of Chiropractic</span>
                </div>
                <div className="px-8 py-4 bg-brand-bg rounded-xl border border-brand-primary/10 text-center min-w-[120px]">
                  <span className="block text-2xl font-bold text-brand-primary font-display mb-1">FNP</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Family Nurse Practitioner</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};