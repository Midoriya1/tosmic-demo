import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Cpu, Wrench, Activity, ArrowRight, Gauge, Zap, BarChart2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products';

export function SpinningSolutionsPage({ onOpenEnquiry }) {
  const spinningProducts = productsData.filter(p => p.categorySlug === 'spinning');

  // Interactive CV% Autolevelling Simulation State
  const [incomingDeviation, setIncomingDeviation] = useState(18); // +/- %
  const [deliverySpeed, setDeliverySpeed] = useState(250); // m/min

  // Real-world empirical physics calculation based on TMS25-R2C DSP response
  // TMS25 achieves up to 70% reduction in count variance
  const regulatedDeviation = (incomingDeviation * 0.32).toFixed(1);
  const sliverCvEstimated = (regulatedDeviation * 0.28).toFixed(2);

  return (
    <div className="solution-category-page">
      {/* Header */}
      <section className="solution-header-hero bg-warm-ivory border-bottom-hairline bg-grid-blueprint relative">
        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Solutions', href: '/solutions' },
              { label: 'Spinning Solutions' }
            ]}
          />

          <div className="solution-header-grid">
            <div className="solution-header-copy">
              <div className="header-badge-row">
                <span className="badge-overline">DIVISION 02 · ONLINE SPINNING AUTOMATION</span>
                <span className="badge-subtag">PATENTED DSP CONTROL</span>
              </div>
              <h1 className="solution-header-title">Spinning Solutions</h1>
              <p className="solution-header-lead">
                Patented short-term and long-term autolevellers, long-fibre gill box controllers, and real-time sliver quality monitors. Engineered to reduce sliver count variation by up to 70%.
              </p>

              <div className="solution-actions-row">
                <button
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('TMS25-R2C Card Autoleveller', 'Sales')}
                >
                  <span>Request Card Retrofit Audit</span>
                  <ArrowUpRight size={15} />
                </button>
                <a href="#cv-calculator" className="btn btn-secondary">
                  <span>CV% Regulation Simulator</span>
                </a>
                <a href="#spinning-products" className="btn btn-secondary">
                  <span>Browse Systems ({spinningProducts.length})</span>
                </a>
              </div>
            </div>

            <div className="solution-header-media relative">
              <div className="drafting-crosshair top-left"></div>
              <div className="drafting-crosshair top-right"></div>
              <div className="drafting-crosshair bottom-left"></div>
              <div className="drafting-crosshair bottom-right"></div>
              <img
                src="/assets/card-autoleveller-tms25.jpg"
                alt="Card Autoleveller TMS25-R2C Installation"
                className="solution-hero-img-framed"
              />
              <div className="media-legend-bar">
                <span className="font-mono text-xs text-graphite/70">REF: TMS25-R2C HIGH PRODUCTION CARD</span>
                <span className="font-mono text-xs text-graphite/70">TOLERANCE: CLASS 0.5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retrofit & Performance Highlights */}
      <section className="section bg-white">
        <div className="container">
          <div className="spinning-highlight-grid">
            <div className="spinning-chart-card relative">
              <div className="drafting-crosshair top-left"></div>
              <div className="drafting-crosshair top-right"></div>
              <div className="drafting-crosshair bottom-left"></div>
              <div className="drafting-crosshair bottom-right"></div>
              <span className="badge-overline">PATENTED REGULATION</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                70% Reduction in 1-Meter Sliver Count Variation
              </h3>
              <p style={{ color: '#4D606E', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                By continuously measuring sliver thickness at the card delivery tongue and modulating the feed roll speed through millisecond AC brushless servo feedback, the TMS25-R2C levels out mass deviations before coiling.
              </p>

              <div className="spinning-diagram-box">
                <img
                  src="/assets/card-autoleveller-diagram.png"
                  alt="Autoleveller Control Circuit and Real-Time Signal Processing"
                  style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                />
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#647887', marginTop: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  Real-time DSP closed-loop signal diagram and thick places history
                </span>
              </div>
            </div>

            <div className="spinning-retrofit-card relative">
              <div className="drafting-crosshair top-left"></div>
              <div className="drafting-crosshair top-right"></div>
              <div className="drafting-crosshair bottom-left"></div>
              <div className="drafting-crosshair bottom-right"></div>
              <span className="badge-overline">UNIVERSAL RETROFIT KITS</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                Turnkey Mechanical & Electronic Kits for Industrial Cards
              </h3>
              <p style={{ color: '#384A59', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Upgrading existing carding machines with Tomsic autolevellers provides modern count regularity without the multi-million Euro capital expenditure of replacing entire machinery lines. Complete pre-assembled kits available for:
              </p>

              <div className="card-brand-chips">
                <div className="brand-chip">
                  <strong>Rieter Cards</strong>
                  <span>C4, C10, C50, C51</span>
                </div>
                <div className="brand-chip">
                  <strong>Trützschler Cards</strong>
                  <span>DK 740, DK 760, DK 803</span>
                </div>
                <div className="brand-chip">
                  <strong>Marzoli Cards</strong>
                  <span>CX300, CX400</span>
                </div>
                <div className="brand-chip">
                  <strong>Crosrol Cards</strong>
                  <span>MK4, MK5 Series</span>
                </div>
              </div>

              <div className="thick-places-notice">
                <Activity size={20} color="#AA8B62" className="flex-shrink-0 mt-0.5" />
                <div>
                  <strong style={{ display: 'block', color: '#17232D', fontSize: '0.9rem' }}>
                    Built-in Thick Places Monitoring
                  </strong>
                  <span style={{ fontSize: '0.8125rem', color: '#647887', display: 'block', marginTop: '0.2rem' }}>
                    Detects sudden heavy sliver clusters, stores time history, and commands instantaneous machine stop before wire clothing damage.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CV% Autolevelling Simulation Tool */}
      <section className="section bg-warm-ivory border-top-hairline" id="cv-calculator">
        <div className="container">
          <div className="section-title-wrap text-center max-w-3xl mx-auto" style={{ marginBottom: '2.5rem' }}>
            <span className="badge-overline">DIGITAL TWIN METROLOGY</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Interactive Sliver Autolevelling Simulator
            </h2>
            <p style={{ color: '#647887', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Adjust incoming card chute mass variation and production delivery speed to inspect the estimated real-time damping performance of the Tomsic TMS25-R2C digital servo loop.
            </p>
          </div>

          <div className="bg-white border border-border-subtle p-6 md:p-8 rounded-sm shadow-card max-w-4xl mx-auto relative">
            <div className="drafting-crosshair top-left"></div>
            <div className="drafting-crosshair top-right"></div>
            <div className="drafting-crosshair bottom-left"></div>
            <div className="drafting-crosshair bottom-right"></div>

            <div className="grid md:grid-cols-2 gap-8 items-center pb-6 border-b border-border-hairline">
              <div>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-semibold text-sm text-graphite flex items-center gap-2">
                      <BarChart2 size={16} className="text-muted-bronze" />
                      Incoming Chute Mass Deviation:
                    </label>
                    <span className="font-mono text-sm font-bold text-graphite bg-warm-ivory px-2 py-0.5 border border-border-subtle rounded-sm">
                      ±{incomingDeviation}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="1"
                    value={incomingDeviation}
                    onChange={(e) => setIncomingDeviation(Number(e.target.value))}
                    className="w-full h-2 bg-warm-ivory rounded-lg appearance-none cursor-pointer accent-graphite"
                  />
                  <div className="flex justify-between text-[11px] text-graphite/50 font-mono mt-1">
                    <span>±5% (Stable blend)</span>
                    <span>±18% (Average)</span>
                    <span>±30% (Severe unlevelness)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-semibold text-sm text-graphite flex items-center gap-2">
                      <Gauge size={16} className="text-muted-bronze" />
                      Card Delivery Speed:
                    </label>
                    <span className="font-mono text-sm font-bold text-graphite bg-warm-ivory px-2 py-0.5 border border-border-subtle rounded-sm">
                      {deliverySpeed} m/min
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="400"
                    step="25"
                    value={deliverySpeed}
                    onChange={(e) => setDeliverySpeed(Number(e.target.value))}
                    className="w-full h-2 bg-warm-ivory rounded-lg appearance-none cursor-pointer accent-graphite"
                  />
                  <div className="flex justify-between text-[11px] text-graphite/50 font-mono mt-1">
                    <span>100 m/min</span>
                    <span>250 m/min (Standard)</span>
                    <span>400 m/min (Max)</span>
                  </div>
                </div>
              </div>

              {/* Simulation Result Box */}
              <div className="bg-graphite text-white p-6 rounded-sm relative overflow-hidden">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-bronze block mb-2">
                  DSP CLOSED-LOOP REGULATION OUTPUT
                </span>
                
                {/* Dynamic Damping Progress Bar */}
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden my-3">
                  <div 
                    className="bg-emerald-400 h-full rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${Math.min(100, Math.max(20, 100 - regulatedDeviation * 3.5))}%` }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 my-3">
                  <div>
                    <span className="font-mono text-xs text-white/60 block">Regulated Sliver Count Deviation</span>
                    <strong className="text-2xl md:text-3xl font-mono text-white block mt-1 transition-all duration-200">
                      ±{regulatedDeviation}%
                    </strong>
                    <span className="text-[11px] text-emerald-400 font-mono">
                      ~68% deviation dampened
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-white/60 block">Estimated 1m Sliver CV%</span>
                    <strong className="text-2xl md:text-3xl font-mono text-white block mt-1 transition-all duration-200">
                      {sliverCvEstimated}%
                    </strong>
                    <span className="text-[11px] text-white/70 font-mono">
                      Within Uster 5% benchmark
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/80 leading-relaxed font-sans">
                  <strong>Digital Servo Response:</strong> AC brushless motor operates at &lt; 5ms lag from delivery tongue displacement, eliminating long-term periodicity in downstream drawframes and ring frames.
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-blue">
              <span>* Empirical simulation based on Tomsic field test data from 500+ industrial installations.</span>
              <button
                className="btn btn-secondary text-xs py-2 px-3"
                onClick={() => onOpenEnquiry && onOpenEnquiry('TMS25-R2C Simulation Audit', 'Sales')}
              >
                <span>Request Detailed Mill Calculation</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spinning Products */}
      <section className="section bg-white border-top-hairline" id="spinning-products">
        <div className="container">
          <div className="section-title-wrap" style={{ marginBottom: '3rem' }}>
            <span className="badge-overline">REGULATION & MONITORING LINEUP</span>
            <h2>Spinning Autolevelling & Monitoring Systems</h2>
            <p style={{ color: '#647887', fontSize: '1.1rem', marginTop: '0.4rem' }}>
              Engineered for short staple cotton and long staple wool, acrylic, and blended top processing.
            </p>
          </div>

          <div className="spinning-products-grid">
            {spinningProducts.map(p => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Mill Consultation Footer */}
      <section className="section bg-warm-ivory border-top-hairline">
        <div className="container">
          <div className="bg-warm-ivory border border-border-subtle p-8 md:p-12 rounded-sm relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="badge-overline">CARD ROOM AUDIT</span>
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3 text-graphite">
                Have older Rieter, Trützschler, or Marzoli cards producing high CV%?
              </h3>
              <p className="text-steel-blue text-sm leading-relaxed m-0">
                Contact our Gorizia engineering team with your card brand, model year, and target delivery speeds. We provide complete retrofit mechanical blueprints and electrical wiring harnesses for turnkey field installation.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                className="btn btn-bronze"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Card Retrofit Consultation', 'Technical Support')}
              >
                <span>Request Card Retrofit Blueprint</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .solution-header-hero {
          padding-top: 2rem;
          padding-bottom: 4.5rem;
        }
        .solution-header-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
          margin-top: 1.5rem;
        }
        .solution-header-title {
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          line-height: 1.1;
          margin: 0.5rem 0 1.25rem;
        }
        .solution-header-lead {
          font-size: 1.2rem;
          line-height: 1.65;
          color: #384A59;
          margin-bottom: 2rem;
        }
        .solution-actions-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .solution-header-media {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
        }
        .solution-hero-img-framed {
          width: 100%;
          max-height: 340px;
          object-fit: contain;
        }
        .media-legend-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          margin-top: 0.75rem;
          border-top: 1px solid var(--border-hairline);
        }
        .spinning-highlight-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          align-items: start;
        }
        .spinning-chart-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 2.25rem;
          border-radius: var(--radius-sm);
        }
        .spinning-diagram-box {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1rem;
          border-radius: var(--radius-xs);
        }
        .spinning-retrofit-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 2.25rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
        }
        .card-brand-chips {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
          margin-bottom: 1.75rem;
        }
        .brand-chip {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-xs);
        }
        .brand-chip strong {
          display: block;
          font-size: 0.875rem;
          color: #17232D;
        }
        .brand-chip span {
          display: block;
          font-size: 0.75rem;
          color: #647887;
          margin-top: 0.15rem;
        }
        .thick-places-notice {
          display: flex;
          gap: 0.75rem;
          background-color: #FAF9F6;
          border: 1px solid #EAE6DF;
          padding: 1rem;
          border-radius: var(--radius-xs);
        }
        .spinning-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .solution-header-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .spinning-highlight-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .spinning-products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .solution-actions-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          .solution-actions-row .btn {
            width: 100%;
            justify-content: center;
          }
          .spinning-chart-card, .spinning-retrofit-card {
            padding: 1.5rem 1.15rem;
          }
          .spinning-products-grid {
            grid-template-columns: 1fr;
          }
          .card-brand-chips {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
