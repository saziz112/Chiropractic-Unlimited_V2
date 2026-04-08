import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './HomePage';
import { ExitIntentPopup } from './components/ExitIntentPopup';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Lazy-loaded routes for code splitting
const AboutPage = lazy(() => import('./AboutPage').then(m => ({ default: m.AboutPage })));
const PrivacyPage = lazy(() => import('./PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./TermsPage').then(m => ({ default: m.TermsPage })));
const ConditionDetailPage = lazy(() => import('./components/ConditionDetailPage').then(m => ({ default: m.ConditionDetailPage })));
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const PatientDetailPage = lazy(() => import('./components/PatientDetailPage').then(m => ({ default: m.PatientDetailPage })));
const ServiceAreaPage = lazy(() => import('./components/ServiceAreaPage').then(m => ({ default: m.ServiceAreaPage })));
const BlogListingPage = lazy(() => import('./components/BlogListingPage').then(m => ({ default: m.BlogListingPage })));
const BlogDetailPage = lazy(() => import('./components/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));
const PricingPage = lazy(() => import('./PricingPage').then(m => ({ default: m.PricingPage })));

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
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/conditions/:slug" element={<ConditionDetailPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/patients/:slug" element={<PatientDetailPage />} />
              <Route path="/locations/:slug" element={<ServiceAreaPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/blog" element={<BlogListingPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ExitIntentPopup />
      </div>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;