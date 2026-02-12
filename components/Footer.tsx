import React from 'react';
import { BUSINESS_INFO, NAV_ITEMS, SOCIAL_LINKS } from '../constants';
import { Facebook, Instagram, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white pt-20 pb-10 border-t border-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-2 pr-8">
            <div className="mb-6">
                 <h2 className="text-3xl font-display font-bold text-white tracking-wide mb-2">
                    CHIROPRACTIC
                 </h2>
                 <span className="block text-brand-accent text-sm tracking-[0.3em] font-medium uppercase opacity-80">Unlimited</span>
            </div>
            <p className="text-white/70 mb-8 max-w-sm leading-relaxed">
              Holistic wellness and chiropractic care in the heart of Valley, Alabama. Dedicated to helping you reach your optimal health.
            </p>
            <div className="flex gap-4">
                <a 
                  href={SOCIAL_LINKS.facebook} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all duration-300"
                  aria-label="Facebook"
                >
                    <Facebook size={18} />
                </a>
                <a 
                  href={SOCIAL_LINKS.instagram} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all duration-300"
                  aria-label="Instagram"
                >
                    <Instagram size={18} />
                </a>
                <a 
                  href={SOCIAL_LINKS.google} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-all duration-300"
                  aria-label="Google Business Profile"
                >
                    <MapPin size={18} />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-6">Explore</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/70 hover:text-white transition-colors relative group">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-6">Visit Us</h3>
            <address className="not-italic text-white/70 space-y-4">
              <p className="leading-relaxed">{BUSINESS_INFO.address}</p>
              <p className="text-sm opacity-50">Inside Workout Anytime</p>
              <p>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="text-white font-medium hover:text-brand-accent transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white/70 hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </p>
            </address>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};