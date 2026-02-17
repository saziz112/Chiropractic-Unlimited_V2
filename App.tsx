import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './HomePage';
import { ConditionDetailPage } from './components/ConditionDetailPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { PatientDetailPage } from './components/PatientDetailPage';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { Analytics } from '@vercel/analytics/react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Small timeout to allow content to render before scrolling to hash
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-primary selection:text-white">
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/conditions/:slug" element={<ConditionDetailPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/patients/:slug" element={<PatientDetailPage />} />
          </Routes>
        </main>
        <Footer />
        <ExitIntentPopup />
      </div>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;