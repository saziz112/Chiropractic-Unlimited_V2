import React from 'react';
import { Instagram, Play } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const reels = [
    {
        url: "https://www.instagram.com/reel/CVOiq84D0YV/",
        thumbnail: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop",
        title: "Spinal Adjustment Session",
        glowColor: "bg-brand-primary/20",
    },
    {
        url: "https://www.instagram.com/reel/CRpq1wBDUfb/",
        thumbnail: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=600&auto=format&fit=crop",
        title: "Patient Recovery Story",
        glowColor: "bg-brand-secondary/20",
    },
];

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
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl hover:shadow-pink-500/30 hover:brightness-110 cursor-pointer"
                >
                    Follow on Instagram
                </a>
            </RevealOnScroll>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center justify-center max-w-4xl mx-auto">

            {reels.map((reel, idx) => (
                <RevealOnScroll key={idx} delay={(idx + 1) * 100} className={`w-full flex justify-center ${idx === 1 ? 'md:mt-24' : ''}`}>
                    <a
                        href={reel.url}
                        target="_blank"
                        rel="noreferrer"
                        className="relative group w-full max-w-[340px] block"
                    >
                        {/* Outer Glow */}
                        <div className={`absolute inset-0 ${reel.glowColor} rounded-[3rem] blur-2xl transform group-hover:opacity-80 transition-opacity duration-500 -z-10`}></div>

                        {/* Bezel Frame */}
                        <div className="relative bg-brand-primary rounded-[2.5rem] p-3 shadow-2xl border-4 border-brand-accent/30 transition-shadow duration-300 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]">
                            {/* Inner Screen Container */}
                            <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[9/16] border border-black/10">
                                <img
                                    src={reel.thumbnail}
                                    alt={reel.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>

                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                                        <Play className="w-7 h-7 md:w-8 md:h-8 text-brand-primary fill-brand-primary ml-1" />
                                    </div>
                                </div>

                                {/* Bottom label */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                                    <div className="flex items-center gap-2 text-white text-sm font-medium">
                                        <Instagram size={14} />
                                        <span>Watch on Instagram</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </RevealOnScroll>
            ))}

        </div>
      </div>
    </section>
  );
};