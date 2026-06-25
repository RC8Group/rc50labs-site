import { Navigate, Route, Routes } from 'react-router-dom';
import { AgeGate } from './components/AgeGate';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AffiliatePage } from './pages/AffiliatePage';
import { CategoryPage } from './pages/CategoryPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { LegalPage } from './pages/LegalPage';
import { ProductPage } from './pages/ProductPage';
import { ShopPage } from './pages/ShopPage';
import { WholesalePage } from './pages/WholesalePage';

function SiteShell() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/wholesale" element={<WholesalePage />} />
          <Route path="/affiliate" element={<AffiliatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage page="privacy" />} />
          <Route path="/terms" element={<LegalPage page="terms" />} />
          <Route
            path="/research-use-disclaimer"
            element={<LegalPage page="research-use-disclaimer" />}
          />
          <Route path="/shipping-returns" element={<LegalPage page="shipping-returns" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AgeGate>
      <SiteShell />
    </AgeGate>
  );
}
