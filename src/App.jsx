import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { SmoothScroll } from './components/SmoothScroll';
import { BackToTop } from './components/BackToTop';

import { HomePage } from './pages/HomePage';
import { SolutionsOverviewPage } from './pages/SolutionsOverviewPage';
import { LaboratorySolutionsPage } from './pages/LaboratorySolutionsPage';
import { SpinningSolutionsPage } from './pages/SpinningSolutionsPage';
import { SugarSolutionsPage } from './pages/SugarSolutionsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CompanyPage } from './pages/CompanyPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState('');
  const [modalDepartment, setModalDepartment] = useState('Sales');

  const handleOpenEnquiry = (product = '', department = 'Sales') => {
    setModalProduct(product);
    setModalDepartment(department);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="site-canvas">
          <Header onOpenEnquiry={handleOpenEnquiry} />

          <main className="site-main" id="main-content">
            <Routes>
              <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/solutions" element={<SolutionsOverviewPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/solutions/laboratory" element={<LaboratorySolutionsPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/solutions/spinning" element={<SpinningSolutionsPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/solutions/sugar" element={<SugarSolutionsPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/products/:slug" element={<ProductDetailPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/company" element={<CompanyPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/news" element={<NewsPage onOpenEnquiry={handleOpenEnquiry} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            </Routes>
          </main>

          <BackToTop />

          <Footer onOpenEnquiry={handleOpenEnquiry} />

          <EnquiryModal
            isOpen={enquiryModalOpen}
            onClose={handleCloseEnquiry}
            initialProduct={modalProduct}
            initialDepartment={modalDepartment}
          />
        </div>

        <style>{`
          .site-canvas {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .site-main {
            flex: 1 0 auto;
          }
        `}</style>
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
