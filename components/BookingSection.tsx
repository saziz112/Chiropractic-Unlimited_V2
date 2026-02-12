import React from 'react';
import { CalendarCheck } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const BookingSection: React.FC = () => {
  return (
    <section id="booking" className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
           <div className="absolute top-20 left-20 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
           <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary font-medium text-sm mb-6 border border-brand-primary/10">
                    <CalendarCheck size={16} />
                    <span>Easy Online Scheduling</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display text-brand-primary mb-6">
                    Book Your Appointment
                </h2>
                <p className="text-brand-muted text-lg leading-relaxed">
                    Ready to start your journey to better health? Select a time below that works best for your schedule.
                </p>
            </RevealOnScroll>
        </div>

        <RevealOnScroll delay={200}>
            <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
                {/* Loading state / Background */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 -z-10">
                    <div className="animate-pulse text-brand-muted">Loading calendar...</div>
                </div>
                
                <iframe
                    src="https://cal.com/valleychirounlimited/30min?user=valleychirounlimited&embed=true"
                    style={{width: '100%', height: '100%', minHeight: '750px', border: 'none'}}
                    title="Book an appointment"
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </div>
            
            <p className="text-center text-sm text-brand-muted mt-6">
                Prefer to call? Reach us at <a href="tel:3342190150" className="text-brand-primary font-bold hover:underline">(334) 219-0150</a>
            </p>
        </RevealOnScroll>
      </div>
    </section>
  );
};