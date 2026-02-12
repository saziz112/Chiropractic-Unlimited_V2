import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { Conditions } from './components/Conditions';
import { Difference } from './components/Difference';
import { Testimonials } from './components/Testimonials';
import { SpecialOffer } from './components/SpecialOffer';
import { HowItWorks } from './components/HowItWorks';
import { InstagramFeature } from './components/InstagramFeature';
import { BookingSection } from './components/BookingSection';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Conditions />
        <Testimonials />
        <Difference />
        <HowItWorks />
        <Services />
        <SpecialOffer />
        <About />
        <InstagramFeature />
        <BookingSection />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;