import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircleMore } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { buildWhatsAppLink } from './config/site';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { DairyFeedPage } from './pages/DairyFeedPage';
import { CattleFatteningPage } from './pages/CattleFatteningPage';
import { FaqPage } from './pages/FAQPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { QualityPage } from './pages/QualityPage';
import { ResourcesPage } from './pages/ResourcesPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with NutriNova Feed on WhatsApp"
      title="Chat with us"
    >
      <MessageCircleMore size={24} />
    </a>
  );
}

function AppLayout() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main className="page-shell">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<ProductDetailPage />} />
            <Route path="/dairy-feed" element={<DairyFeedPage />} />
            <Route path="/cattle-fattening" element={<CattleFatteningPage />} />
            <Route path="/quality-manufacturing" element={<QualityPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
