import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Download, FileText, ChevronRight, Layers, ShieldCheck, Mail, Phone, Calculator, Printer, Eye, X } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SpecTable } from '../components/SpecTable';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products';

export function ProductDetailPage({ onOpenEnquiry }) {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/products/easy-evenness-tester" replace />;
  }

  const [activeImage, setActiveImage] = useState(product.primaryImage);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'features' | 'converter' | 'modules'
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Technical Textile Unit Converter for Spinning Laboratories
  const [calcInput, setCalcInput] = useState('20');
  const [calcFromUnit, setCalcFromUnit] = useState('Ne'); // Ne, Nm, tex, dtex, Den

  const computeConvertedUnits = (valStr, from) => {
    const val = parseFloat(valStr);
    if (isNaN(val) || val <= 0) return { tex: '—', Ne: '—', Nm: '—', dtex: '—', Den: '—' };

    let tex = 0;
    if (from === 'tex') tex = val;
    else if (from === 'Ne') tex = 590.54 / val;
    else if (from === 'Nm') tex = 1000 / val;
    else if (from === 'dtex') tex = val / 10;
    else if (from === 'Den') tex = val / 9;

    return {
      tex: tex.toFixed(2),
      Ne: (590.54 / tex).toFixed(2),
      Nm: (1000 / tex).toFixed(2),
      dtex: (tex * 10).toFixed(1),
      Den: (tex * 9).toFixed(1)
    };
  };

  const converted = computeConvertedUnits(calcInput, calcFromUnit);

  const relatedProductsList = productsData.filter(p => 
    product.relatedProducts && product.relatedProducts.includes(p.slug)
  );

  return (
    <div className="product-detail-page">
      {/* Breadcrumb Bar */}
      <section className="product-breadcrumb-bar bg-warm-ivory border-bottom-hairline">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Solutions', href: '/solutions' },
              { label: product.category, href: `/solutions/${product.categorySlug}` },
              { label: product.name }
            ]}
          />
        </div>
      </section>

      {/* Hero Showcase Area */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="product-hero-layout">
            {/* Left: Gallery & Image Viewer */}
            <div className="product-gallery-col">
              <div className="main-image-display" onClick={() => setLightboxOpen(true)} title="Click to inspect enlarged view">
                <span className="drafting-crosshair" style={{ top: '8px', left: '8px' }} />
                <span className="drafting-crosshair" style={{ top: '8px', right: '8px' }} />
                <span className="drafting-crosshair" style={{ bottom: '8px', left: '8px' }} />
                <span className="drafting-crosshair" style={{ bottom: '8px', right: '8px' }} />

                <img
                  src={activeImage}
                  alt={product.name}
                  className="main-view-img"
                />
                
                {product.badge && (
                  <span className="main-image-badge font-mono">{product.badge}</span>
                )}

                <div className="inspect-lens-hint font-mono">
                  <Eye size={13} />
                  <span>ENLARGE VIEW</span>
                </div>
              </div>

              {product.gallery && product.gallery.length > 1 && (
                <div className="thumbnail-track">
                  {product.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      className={`thumbnail-btn ${activeImage === img.url ? 'active' : ''}`}
                      onClick={() => setActiveImage(img.url)}
                      title={img.title}
                    >
                      <img src={img.url} alt={img.title} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Technical Summary & Actions */}
            <div className="product-summary-col">
              <div className="product-meta-header font-mono">
                <span className="product-code-pill">{product.code}</span>
                <span className="product-cat-label">{product.category}</span>
                <span className="product-origin-label">SAVOGNA D’ISONZO (GO), ITALY</span>
              </div>

              <h1 className="product-main-title">{product.name}</h1>
              <p className="product-tagline-lead">{product.tagline}</p>

              <p className="product-body-overview">
                {product.description}
              </p>

              <div className="product-action-block">
                <button
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(product.name, 'Sales')}
                >
                  <span>Request Technical Quotation</span>
                  <ArrowUpRight size={15} />
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry(product.name, 'Sales')}
                >
                  <Download size={14} />
                  <span>Download Specs PDF</span>
                </button>
              </div>

              {/* Fast Facts Card */}
              <div className="fast-facts-card">
                <div className="fast-fact-item">
                  <span className="fact-label">Manufacturing Origin:</span>
                  <strong className="fact-val">Savogna d’Isonzo (GO), Italy · 100% In-House</strong>
                </div>
                <div className="fast-fact-item">
                  <span className="fact-label">Software Platform:</span>
                  <strong className="fact-val font-mono">Microsoft .NET / Windows 10 & 11</strong>
                </div>
                <div className="fast-fact-item">
                  <span className="fact-label">Reference Standard:</span>
                  <strong className="fact-val font-mono">ISO 2062 / ASTM D2256 / ACIMIT Certified</strong>
                </div>
                <div className="fast-fact-item">
                  <span className="fact-label">Database Synchronization:</span>
                  <strong className="fact-val">Link Job Real-Time Inter-Machine SQL</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs: Specifications, Features, Metrology Unit Converter, Modules */}
      <section className="section bg-warm-ivory border-top-hairline">
        <div className="container">
          <div className="product-tabs-header">
            <button
              className={`product-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              <span>Certified Specifications</span>
              <span className="tab-count font-mono">({product.specifications?.length || 0})</span>
            </button>
            <button
              className={`product-tab-btn ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              <span>Capabilities & Applications</span>
              <span className="tab-count font-mono">({product.features?.length || 0})</span>
            </button>
            <button
              className={`product-tab-btn ${activeTab === 'converter' ? 'active' : ''}`}
              onClick={() => setActiveTab('converter')}
            >
              <Calculator size={15} style={{ marginRight: '4px' }} />
              <span>Textile Count Calculator</span>
            </button>
            {product.modularOptions && (
              <button
                className={`product-tab-btn ${activeTab === 'modules' ? 'active' : ''}`}
                onClick={() => setActiveTab('modules')}
              >
                <span>Modular Add-Ons</span>
                <span className="tab-count font-mono">({product.modularOptions.length})</span>
              </button>
            )}
          </div>

          <div className="product-tab-content-panel">
            {/* Tab 1: Technical Specs */}
            {activeTab === 'specs' && (
              <div className="tab-pane-fade">
                <SpecTable
                  specifications={product.specifications}
                  title={`${product.name} — Verified Engineering Specifications`}
                />
                
                <div className="spec-notes-box font-mono">
                  <ShieldCheck size={18} color="#A48256" style={{ flexShrink: 0 }} />
                  <span>
                    SPECIFICATIONS VERIFIED AGAINST TOMSIC S.R.L. OFFICIAL ENGINEERING ARCHIVES. CALIBRATION CONDUCTED PRIOR TO DISPATCH AT SAVOGNA D'ISONZO.
                  </span>
                </div>
              </div>
            )}

            {/* Tab 2: Features & Applications */}
            {activeTab === 'features' && (
              <div className="tab-pane-fade">
                <div className="features-applications-grid">
                  <div className="features-list-col">
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>Engineered Capabilities</h3>
                    <div className="features-detailed-stack">
                      {product.features?.map((f, i) => (
                        <div key={i} className="feature-block-item">
                          <strong className="feature-item-title">{f.title}</strong>
                          <p className="feature-item-desc">{f.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="applications-list-col">
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>Mill Applications</h3>
                    <ul className="applications-detailed-list">
                      {product.applications?.map((app, i) => (
                        <li key={i} className="app-item">
                          <CheckCircle2 size={16} color="#A48256" className="app-icon" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Textile Count Converter (Authentic Engineering Tool!) */}
            {activeTab === 'converter' && (
              <div className="tab-pane-fade">
                <div className="converter-panel-card">
                  <div className="converter-header">
                    <div>
                      <span className="text-meta font-mono">LABORATORY METROLOGY UTILITY</span>
                      <h3 style={{ fontSize: '1.45rem', marginTop: '0.25rem' }}>Textile Yarn Count & Linear Density Converter</h3>
                      <p style={{ color: '#5C7080', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                        Used daily in spinning laboratories to calibrate test protocols across English Cotton (Ne), Metric (Nm), Tex, Decitex, and Denier.
                      </p>
                    </div>
                  </div>

                  <div className="converter-calc-row">
                    <div className="calc-input-group">
                      <label htmlFor="calc-val" className="font-mono">ENTER VALUE:</label>
                      <input
                        id="calc-val"
                        type="number"
                        step="0.1"
                        value={calcInput}
                        onChange={(e) => setCalcInput(e.target.value)}
                        className="font-mono tabular-nums"
                      />
                    </div>

                    <div className="calc-unit-group">
                      <label htmlFor="calc-unit" className="font-mono">SELECT SOURCE SYSTEM:</label>
                      <select
                        id="calc-unit"
                        value={calcFromUnit}
                        onChange={(e) => setCalcFromUnit(e.target.value)}
                        className="font-mono"
                      >
                        <option value="Ne">Ne (English Cotton Count)</option>
                        <option value="Nm">Nm (Metric Number)</option>
                        <option value="tex">tex (Grams per 1,000 meters)</option>
                        <option value="dtex">dtex (Decitex - Synthetics)</option>
                        <option value="Den">Den (Denier - Filaments)</option>
                      </select>
                    </div>
                  </div>

                  <div className="converter-results-grid">
                    <div className={`result-box ${calcFromUnit === 'Ne' ? 'source-box' : ''}`}>
                      <span className="result-label font-mono">Ne (English Cotton)</span>
                      <strong className="result-val font-mono tabular-nums">{converted.Ne}</strong>
                      <span className="result-sub">tex = 590.54 / Ne</span>
                    </div>

                    <div className={`result-box ${calcFromUnit === 'Nm' ? 'source-box' : ''}`}>
                      <span className="result-label font-mono">Nm (Metric Number)</span>
                      <strong className="result-val font-mono tabular-nums">{converted.Nm}</strong>
                      <span className="result-sub">Nm = 1000 / tex</span>
                    </div>

                    <div className={`result-box ${calcFromUnit === 'tex' ? 'source-box' : ''}`}>
                      <span className="result-label font-mono">tex (Universal Mass)</span>
                      <strong className="result-val font-mono tabular-nums">{converted.tex}</strong>
                      <span className="result-sub">g / 1,000 meters</span>
                    </div>

                    <div className={`result-box ${calcFromUnit === 'dtex' ? 'source-box' : ''}`}>
                      <span className="result-label font-mono">dtex (Decitex)</span>
                      <strong className="result-val font-mono tabular-nums">{converted.dtex}</strong>
                      <span className="result-sub">dtex = tex * 10</span>
                    </div>

                    <div className={`result-box ${calcFromUnit === 'Den' ? 'source-box' : ''}`}>
                      <span className="result-label font-mono">Denier</span>
                      <strong className="result-val font-mono tabular-nums">{converted.Den}</strong>
                      <span className="result-sub">Den = tex * 9</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Modular Options */}
            {activeTab === 'modules' && product.modularOptions && (
              <div className="tab-pane-fade">
                <div className="modules-grid">
                  {product.modularOptions.map((mod, i) => (
                    <div key={i} className="module-item-card">
                      <div className="module-header">
                        <Layers size={17} color="#A48256" />
                        <h4 className="module-name">{mod.name}</h4>
                      </div>
                      <p className="module-desc">{mod.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technical Catalogue Request Box */}
      <section className="section-sm bg-white border-top-hairline">
        <div className="container">
          <div className="catalogue-banner">
            <div className="catalogue-info">
              <FileText size={30} color="#A48256" className="cat-icon" />
              <div>
                <span className="badge-overline">TECHNICAL ARCHIVE</span>
                <h3 style={{ fontSize: '1.35rem', marginTop: '0.2rem' }}>
                  {product.officialCatalogName || 'TOMSIC Technical Specification Leaflet'}
                </h3>
                <p style={{ color: '#5C7080', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                  Dimensional engineering diagrams, pneumatic parameters, power ratings, and sample report prints.
                </p>
              </div>
            </div>

            <div className="catalogue-action">
              <button
                className="btn btn-primary"
                onClick={() => onOpenEnquiry && onOpenEnquiry(product.name, 'Sales')}
              >
                <span>Request Document PDF</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProductsList.length > 0 && (
        <section className="section bg-warm-ivory border-top-hairline">
          <div className="container">
            <div className="section-title-wrap" style={{ marginBottom: '2.5rem' }}>
              <span className="badge-overline">INTER-MACHINE INTEGRATION</span>
              <h2>Related Systems & Instruments</h2>
              <p style={{ color: '#5C7080', fontSize: '1.05rem', marginTop: '0.35rem' }}>
                Compatible testing units communicating via unified Link Job database records.
              </p>
            </div>

            <div className="related-products-grid">
              {relatedProductsList.map(rel => (
                <ProductCard key={rel.slug} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-backdrop" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>
              <X size={22} />
            </button>
            <img src={activeImage} alt={product.name} className="lightbox-img" />
            <span className="lightbox-caption font-mono">{product.name} · High-Resolution Inspection</span>
          </div>
        </div>
      )}

      <style>{`
        .product-breadcrumb-bar {
          padding: 0.5rem 0;
        }
        .product-detail-page {
          overflow-x: hidden;
          width: 100%;
        }
        .product-hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          min-width: 0;
        }
        .product-gallery-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          min-width: 0;
          max-width: 100%;
        }
        .product-summary-col {
          min-width: 0;
          max-width: 100%;
        }
        .main-image-display {
          position: relative;
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem;
          box-shadow: var(--shadow-card);
          cursor: zoom-in;
        }
        .main-view-img {
          max-height: 100%;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-smooth);
        }
        .main-image-display:hover .main-view-img {
          transform: scale(1.02);
        }
        .main-image-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background-color: var(--color-graphite);
          color: #FFFFFF;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-xs);
        }
        .inspect-lens-hint {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.6875rem;
          color: var(--color-steel-blue);
          background-color: rgba(255, 255, 255, 0.85);
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-hairline);
        }
        .thumbnail-track {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          max-width: 100%;
          width: 100%;
          padding-bottom: 0.5rem;
          -webkit-overflow-scrolling: touch;
        }
        .thumbnail-btn {
          width: 80px;
          height: 80px;
          background: #FAF9F6;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          padding: 0.35rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color var(--transition-fast);
          flex-shrink: 0;
        }
        .thumbnail-btn img {
          max-height: 100%;
          width: auto;
          object-fit: contain;
        }
        .thumbnail-btn:hover {
          border-color: var(--color-muted-bronze);
        }
        .thumbnail-btn.active {
          border-color: var(--color-muted-bronze);
          box-shadow: 0 0 0 2px rgba(164, 130, 86, 0.3);
        }

        /* Product Summary Col */
        .product-meta-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        .product-code-pill {
          background-color: var(--color-graphite);
          color: #FFFFFF;
          font-size: 0.725rem;
          font-weight: 700;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-xs);
          letter-spacing: 0.05em;
        }
        .product-cat-label {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--color-muted-bronze);
          text-transform: uppercase;
        }
        .product-origin-label {
          font-size: 0.725rem;
          color: var(--color-steel-blue);
        }
        .product-main-title {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          margin-bottom: 0.6rem;
          line-height: 1.15;
        }
        .product-tagline-lead {
          font-size: 1.15rem;
          font-weight: 500;
          color: #4D606E;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .product-body-overview {
          font-size: 0.975rem;
          line-height: 1.65;
          color: #384A59;
          margin-bottom: 2rem;
        }
        .product-action-block {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.25rem;
          flex-wrap: wrap;
        }
        .fast-facts-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 1.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .fast-fact-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.825rem;
        }
        .fact-label {
          color: #647887;
        }
        .fact-val {
          color: var(--color-graphite);
          text-align: right;
        }

        /* Tabs */
        .product-tabs-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          border-bottom: 2px solid var(--border-subtle);
          margin-bottom: 2rem;
          overflow-x: auto;
        }
        .product-tab-btn {
          background: none;
          border: none;
          padding: 1rem 0.25rem;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-steel-blue);
          cursor: pointer;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color var(--transition-fast);
          white-space: nowrap;
        }
        .product-tab-btn:hover {
          color: var(--color-graphite);
        }
        .product-tab-btn.active {
          color: var(--color-graphite);
          font-weight: 700;
        }
        .product-tab-btn.active::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--color-muted-bronze);
        }
        .tab-count {
          font-size: 0.775rem;
          color: #8E9EA9;
        }
        .tab-pane-fade {
          animation: tabFade 0.25s var(--ease-editorial);
        }
        @keyframes tabFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .spec-notes-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: #5C7080;
          margin-top: 1rem;
          line-height: 1.5;
        }
        .features-applications-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3.5rem;
        }
        .features-detailed-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .feature-block-item {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-sm);
        }
        .feature-item-title {
          display: block;
          font-size: 1.05rem;
          color: var(--color-graphite);
          margin-bottom: 0.35rem;
        }
        .feature-item-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #4D606E;
        }
        .applications-detailed-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
        }
        .app-item {
          display: flex;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: #384A59;
          line-height: 1.5;
        }
        .app-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* Converter Panel Card */
        .converter-panel-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2.5rem;
          box-shadow: var(--shadow-card);
        }
        .converter-calc-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 1.75rem 0;
          padding: 1.5rem;
          background-color: var(--color-warm-ivory);
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-hairline);
        }
        .calc-input-group, .calc-unit-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .calc-input-group label, .calc-unit-group label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-graphite);
        }
        .calc-input-group input, .calc-unit-group select {
          padding: 0.65rem 0.85rem;
          border: 1px solid #CFD8DE;
          border-radius: var(--radius-xs);
          font-size: 1rem;
          color: var(--color-graphite);
          background-color: #FFFFFF;
        }
        .converter-results-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }
        .result-box {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 1.25rem 1rem;
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
          text-align: center;
          transition: background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
        }
        .result-box:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-subtle);
        }
        .result-box.source-box {
          background-color: #F5EFE6;
          border-color: #D6BC96;
        }
        .result-label {
          font-size: 0.7rem;
          color: var(--color-steel-blue);
          margin-bottom: 0.4rem;
        }
        .result-val {
          font-size: 1.75rem;
          color: var(--color-graphite);
          line-height: 1;
          margin-bottom: 0.4rem;
          transition: color var(--transition-fast);
        }
        .result-sub {
          font-size: 0.65rem;
          color: #8E9EA9;
          font-family: var(--font-mono);
        }

        /* Modules */
        .modules-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .module-item-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 1.5rem;
        }
        .module-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
        }
        .module-name {
          font-size: 1.05rem;
          color: var(--color-graphite);
        }
        .module-desc {
          font-size: 0.875rem;
          line-height: 1.55;
          color: #4D606E;
        }
        .catalogue-banner {
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          padding: 2.25rem 2.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .catalogue-info {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .cat-icon {
          flex-shrink: 0;
        }
        .related-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        /* Lightbox */
        .lightbox-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 100%;
          height: 100%;
          background-color: rgba(13, 19, 24, 0.85);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .lightbox-content {
          position: relative;
          max-width: 900px;
          max-height: 90vh;
          background: #FFFFFF;
          padding: 2rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-modal);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-steel-blue);
        }
        .lightbox-img {
          max-height: 70vh;
          width: auto;
          object-fit: contain;
        }
        .lightbox-caption {
          margin-top: 1rem;
          font-size: 0.8125rem;
          color: var(--color-steel-blue);
        }

        @media (max-width: 1024px) {
          .product-hero-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .features-applications-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .converter-results-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .related-products-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .product-action-block {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          .product-action-block .btn {
            width: 100%;
            justify-content: center;
          }
          .catalogue-banner {
            flex-direction: column;
            align-items: stretch;
            gap: 1.25rem;
            padding: 1.5rem 1.15rem;
          }
          .catalogue-banner .btn {
            width: 100%;
            justify-content: center;
          }
          .product-tabs-header {
            gap: 1rem;
            padding-bottom: 0.25rem;
            -webkit-overflow-scrolling: touch;
          }
          .product-tab-btn {
            font-size: 0.9375rem;
            padding: 0.75rem 0.2rem;
          }
          .converter-calc-row {
            grid-template-columns: 1fr;
          }
          .converter-results-grid {
            grid-template-columns: 1fr 1fr;
          }
          .modules-grid {
            grid-template-columns: 1fr;
          }
          .related-products-grid {
            grid-template-columns: 1fr;
          }
          .main-image-display {
            height: 260px;
            padding: 1rem;
          }
          .inspect-lens-hint {
            bottom: 0.65rem;
            right: 0.65rem;
            font-size: 0.625rem;
            padding: 0.2rem 0.45rem;
          }
          .thumbnail-btn {
            width: 64px;
            height: 64px;
            flex-shrink: 0;
          }
          .product-main-title {
            font-size: clamp(1.75rem, 5.2vw, 2.5rem);
          }
          .product-origin-label {
            font-size: 0.6875rem;
          }
        }
      `}</style>
    </div>
  );
}
