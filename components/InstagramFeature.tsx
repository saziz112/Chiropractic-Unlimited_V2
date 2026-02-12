import React from 'react';
import { Instagram } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const InstagramFeature: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-bg relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 font-medium text-sm mb-6 border border-pink-100 shadow-sm">
                    <Instagram size={16} />
                    <span>@chiropracticunlimited</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display text-brand-primary mb-6">
                    Real Patients, Real Results
                </h2>
                <p className="text-brand-muted text-lg leading-relaxed mb-8">
                    Watch how Dr. Jason helps patients regain their mobility and health.
                </p>
                <a 
                    href="https://www.instagram.com/chiropracticunlimited/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1 hover:scale-105"
                >
                    Follow on Instagram
                </a>
            </RevealOnScroll>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center justify-center max-w-4xl mx-auto">
            
            {/* Video 1 */}
            <RevealOnScroll delay={100} className="w-full flex justify-center">
                 {/* Custom Brand Wrapper */}
                <div className="relative group w-full max-w-[340px]">
                     {/* Outer Glow */}
                    <div className="absolute inset-0 bg-brand-primary/20 rounded-[3rem] blur-2xl transform group-hover:scale-105 transition-transform duration-500 -z-10"></div>
                    
                    {/* Bezel Frame - Brand Primary Color */}
                    <div className="relative bg-brand-primary rounded-[2.5rem] p-3 shadow-2xl border-4 border-brand-accent/30 transition-transform duration-500 hover:-translate-y-2">
                        {/* Inner Screen Container */}
                        <div className="relative rounded-[2rem] overflow-hidden bg-white aspect-[9/16] isolate border border-black/10">
                             <iframe 
                                src="https://www.instagram.com/reel/CVOiq84D0YV/embed/"
                                className="w-full h-full absolute inset-0 border-0"
                                allowFullScreen
                                scrolling="no"
                                title="Chiropractic Adjustment Video 1"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

            {/* Video 2 */}
            <RevealOnScroll delay={200} className="w-full flex justify-center md:mt-24">
                 <div className="relative group w-full max-w-[340px]">
                    <div className="absolute inset-0 bg-brand-secondary/20 rounded-[3rem] blur-2xl transform group-hover:scale-105 transition-transform duration-500 -z-10"></div>
                    
                    <div className="relative bg-brand-primary rounded-[2.5rem] p-3 shadow-2xl border-4 border-brand-accent/30 transition-transform duration-500 hover:-translate-y-2">
                        <div className="relative rounded-[2rem] overflow-hidden bg-white aspect-[9/16] isolate border border-black/10">
                            <iframe 
                                src="https://www.instagram.com/reel/CRpq1wBDUfb/embed/"
                                className="w-full h-full absolute inset-0 border-0"
                                allowFullScreen
                                scrolling="no"
                                title="Chiropractic Adjustment Video 2"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};