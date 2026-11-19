import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Beaker, AlertTriangle, ShieldCheck, Clock, Gauge, Droplets, Info } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products';

export function SugarSolutionsPage({ onOpenEnquiry }) {
  const sugarProducts = productsData.filter(p => p.categorySlug === 'sugar');
  const [selectedGrade, setSelectedGrade] = useState(2); // default moderate

  const stickinessGrades = [
    {
      level: 0,
      code: 'GRADE 0',
      label: 'Zero / Trace Stickiness',
      color: '#E2F0D9',
      textColor: '#2D5B18',
      reactionColor: '#D4E7C5',
      sugarContent: '< 0.10% sugar content',
      risk: 'Negligible risk of roller lapping.',
      actionProtocol: 'Direct processing without restrictions. Safe for high-speed rotor and ring spinning at standard mill relative humidity (55–65% RH).'
    },
    {
      level: 1,
      code: 'GRADE 1',
      label: 'Light Stickiness',
      color: '#FFF2CC',
      textColor: '#7E6100',
      reactionColor: '#FFE599',
      sugarContent: '0.10% – 0.25% sugar content',
      risk: 'Minor risk of accumulation on drafting aprons over long shifts.',
      actionProtocol: 'Permissible in blowroom laydown up to 50% blend with Grade 0 cotton. Recommended daily cleaning of card crush rolls.'
    },
    {
      level: 2,
      code: 'GRADE 2',
      label: 'Moderate Stickiness',
      color: '#FCE5CD',
      textColor: '#8C3D00',
      reactionColor: '#F6B26B',
      sugarContent: '0.26% – 0.40% sugar content',
      risk: 'High risk of rubber cot lapping, drawframe web sagging, and frequent end breaks.',
      actionProtocol: 'Mandatory quarantine in warehouse. Restrict blend proportion to ≤ 15% mixed with non-sticky lots. Lower spinning room relative humidity to 48–52% RH.'
    },
    {
      level: 3,
      code: 'GRADE 3',
      label: 'Severe / Critical Stickiness',
      color: '#F8CECC',
      textColor: '#8C1D18',
      reactionColor: '#E06666',
      sugarContent: '> 0.40% entomological honeydew',
      risk: 'Immediate mill stoppage. Catastrophic roller wrapping, cylinder choking, and traveler burning.',
      actionProtocol: 'Strict bale rejection or mandatory treatment with Glucosil TMS55 enzyme neutralizing solution prior to opening. Do not process unblended.'
    }
  ];

  const currentGrade = stickinessGrades[selectedGrade];

  const testSteps = [
    {
      time: '00:00',
      title: 'Lint Sampling',
      desc: 'Extract 1.0g representative cotton tufts from diverse spots across the sampled bale.'
    },
    {
      time: '04:00',
      title: 'Reagent Extraction',
      desc: 'Introduce standardized Tomsic TMS54 extraction solution to solubilize entomological insect honeydew.'
    },
    {
      time: '09:00',
      title: 'Thermal Activation',
      desc: 'Place test vial in controlled heat block to trigger specific colorimetric sugar reaction kinetics.'
    },
    {
      time: '15:00',
      title: 'Colorimetric Readout',
      desc: 'Compare reagent coloration against certified optical comparator scale for instant grade classification.'
    }
  ];

  return (
    <div className="solution-category-page">
      {/* Header */}
      <section className="solution-header-hero bg-warm-ivory border-bottom-hairline bg-grid-blueprint relative">
        <div className="container relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Solutions', href: '/solutions' },
              { label: 'Sugar Solutions' }
            ]}
          />

          <div className="solution-header-grid">
            <div className="solution-header-copy">
              <div className="header-badge-row">
                <span className="badge-overline">DIVISION 03 · RAW FIBRE CONTAMINATION METROLOGY</span>
                <span className="badge-subtag">15-MIN PROTOCOL</span>
              </div>
              <h1 className="solution-header-title">Sugar Solutions</h1>
              <p className="solution-header-lead">
                Standardized, fast 15-minute chemical diagnostic method to quantify sticky cotton and entomological sugar contamination before raw bales enter the spinning line.
              </p>

              <div className="solution-actions-row">
                <button
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('TMS54 Cotton Sugar Test', 'Sales')}
                >
                  <span>Order TMS54 Starter Kit</span>
                  <ArrowUpRight size={15} />
                </button>
                <a href="#stickiness-scale" className="btn btn-secondary">
                  <span>Interactive Stickiness Scale</span>
                </a>
                <a href="#sugar-products" className="btn btn-secondary">
                  <span>Browse Products ({sugarProducts.length})</span>
                </a>
              </div>
            </div>

            <div className="solution-header-media relative">
              <img
                src="/assets/cotton-sugar-tms54.jpg"
                alt="TMS54 Cotton Sugar Test Kit"
                className="solution-hero-img-framed"
              />
              <div className="media-legend-bar">
                <span className="font-mono text-xs text-graphite/70">REF: TMS54-BENCH-KIT</span>
                <span className="font-mono text-xs text-graphite/70">ORIGIN: GORIZIA, ITALY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Stickiness Problem & Solution */}
      <section className="section bg-white">
        <div className="container">
          <div className="sugar-problem-grid">
            <div className="problem-card">
              <div className="problem-header">
                <AlertTriangle size={24} color="#D97706" />
                <h3 style={{ fontSize: '1.4rem', color: '#17232D' }}>
                  The Threat: Sticky Cotton Contamination
                </h3>
              </div>
              <p style={{ color: '#4D606E', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Honeydew secreted by insect infestations (specifically <em>Bemisia tabaci</em> whiteflies and cotton aphids) deposits high concentrations of non-reducing complex sugars (melezitose, trehalulose) onto cotton lint.
              </p>
              <p style={{ color: '#4D606E', fontSize: '0.95rem', lineHeight: '1.65' }}>
                When processed under standard spinning room humidity, these sugars liquefy and adhere tenaciously to card wire clothing, drawframe rubber cots, and ring spinning travelers. This results in severe roller lapping, continuous yarn breaks, clogged suction tubes, and crippling mill downtime.
              </p>
            </div>

            <div className="solution-approach-card">
              <div className="problem-header">
                <ShieldCheck size={24} color="#AA8B62" />
                <h3 style={{ fontSize: '1.4rem', color: '#17232D' }}>
                  The Tomsic Protocol: 15-Minute Certainty
                </h3>
              </div>
              <p style={{ color: '#4D606E', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                The Tomsic TMS54 Cotton Sugar Test provides spinning mill laboratories with an affordable, rapid chemical colorimetric method. In just 15 minutes, technician personnel can classify incoming bale lots into standardized stickiness grades before opening.
              </p>
              <ul className="sugar-benefits-list">
                <li>
                  <CheckCircle2 size={16} color="#AA8B62" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Pre-Production Screening:</strong> Quarantines high-risk sticky bales in the warehouse before entering blowroom blend lines.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} color="#AA8B62" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Scientific Blending:</strong> Allows controlled laydown blending of mildly contaminated cotton with clean bales without risking machine stoppage.
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} color="#AA8B62" className="flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Glucosil Standard Calibration:</strong> TMS55 reagent guarantees consistent reaction kinetics regardless of lab ambient temperature.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Colorimetric Stickiness Scale & Diagnostic Protocol */}
      <section className="section bg-warm-ivory border-top-hairline" id="stickiness-scale">
        <div className="container">
          <div className="section-title-wrap text-center max-w-3xl mx-auto" style={{ marginBottom: '2.5rem' }}>
            <span className="badge-overline">LABORATORY CALIBRATION STANDARD</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Interactive Colorimetric Stickiness Scale
            </h2>
            <p style={{ color: '#647887', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Select a stickiness classification grade below to inspect the verified colorimetric threshold, chemical concentration, and mill action protocol.
            </p>
          </div>

          {/* Stickiness Scale Interactive Widget */}
          <div className="scale-widget-card bg-white border border-border-subtle p-6 md:p-8 rounded-sm shadow-card max-w-4xl mx-auto mb-16 relative">
            {/* Grade Selector Tabs */}
            <div className="sugar-grade-tabs" role="tablist">
              {stickinessGrades.map((g, idx) => (
                <button
                  key={g.code}
                  type="button"
                  role="tab"
                  aria-selected={selectedGrade === idx}
                  onClick={() => setSelectedGrade(idx)}
                  className={`sugar-grade-tab ${selectedGrade === idx ? 'active' : ''}`}
                >
                  <div className="tab-top-row">
                    <span className="tab-code font-mono">{g.code}</span>
                    <span
                      className="tab-color-dot"
                      style={{ backgroundColor: g.reactionColor }}
                    />
                  </div>
                  <div className="tab-label">{g.label}</div>
                </button>
              ))}
            </div>

            {/* Selected Grade Detail Box */}
            <div
              className="grade-display-box"
              style={{
                backgroundColor: currentGrade.color,
                borderColor: currentGrade.reactionColor
              }}
            >
              <div className="grade-header-row">
                <div>
                  <div className="grade-badge-title-row">
                    <span className="grade-pill-tag font-mono">
                      {currentGrade.code}
                    </span>
                    <h3 className="grade-name-title">
                      {currentGrade.label}
                    </h3>
                  </div>
                  <div className="grade-conc-text font-mono" style={{ color: currentGrade.textColor }}>
                    Concentration: {currentGrade.sugarContent}
                  </div>
                </div>

                <div className="reaction-badge-card">
                  <span
                    className="reaction-circle-preview"
                    style={{ backgroundColor: currentGrade.reactionColor }}
                  />
                  <div className="reaction-text-col">
                    <span className="reaction-label font-mono">REACTION HUE</span>
                    <strong className="reaction-val font-mono">Calibrated Optical Index</strong>
                  </div>
                </div>
              </div>

              <div className="grade-assessment-grid">
                <div className="assessment-col">
                  <span className="assessment-label font-mono">OPERATIONAL RISK ASSESSMENT</span>
                  <p className="assessment-text">{currentGrade.risk}</p>
                </div>
                <div className="assessment-col">
                  <span className="assessment-label font-mono">RECOMMENDED MILL ACTION PROTOCOL</span>
                  <p className="assessment-text">{currentGrade.actionProtocol}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 15-Minute Protocol Step-by-Step Timeline */}
          <div className="protocol-timeline-box max-w-4xl mx-auto">
            <div className="text-center" style={{ marginBottom: '2rem' }}>
              <span className="badge-overline">EXACT CHEMICAL METHOD</span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#17232D', margin: '0.4rem 0' }}>
                The 15-Minute Testing Procedure
              </h3>
              <p style={{ color: '#647887', fontSize: '0.9375rem' }}>
                No complex chromatography or hazardous gas required. Performed on standard laboratory benchtop.
              </p>
            </div>

            <div className="procedure-steps-grid">
              {testSteps.map((s, idx) => (
                <div key={idx} className="procedure-step-card relative">
                  <div className="step-card-header">
                    <span className="step-time font-mono">{s.time} MIN</span>
                    <span className="step-num font-mono">STEP 0{idx + 1}</span>
                  </div>
                  <h4 className="step-title">{s.title}</h4>
                  <p className="step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sugar Products Portfolio */}
      <section className="section bg-white border-top-hairline" id="sugar-products">
        <div className="container">
          <div className="section-title-wrap" style={{ marginBottom: '3rem' }}>
            <span className="badge-overline">CALIBRATED TESTING SYSTEMS</span>
            <h2>Sugar Solutions Lineup</h2>
            <p style={{ color: '#647887', fontSize: '1.1rem', marginTop: '0.4rem' }}>
              Standardized reagents and testing kits formulated and packaged in Savogna d'Isonzo, Italy.
            </p>
          </div>

          <div className="sugar-products-grid">
            {sugarProducts.map(p => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="section bg-warm-ivory border-top-hairline">
        <div className="container">
          <div className="bg-graphite text-white p-8 md:p-12 rounded-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative z-10 max-w-xl">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-bronze block mb-2">
                MILL RISK AUDIT
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">
                Experiencing roller lapping on your carding or spinning lines?
              </h3>
              <p className="text-white/80 text-sm leading-relaxed m-0">
                Send representative raw cotton tufts directly to the Tomsic laboratory in Gorizia, Italy for complimentary diagnostic sugar level screening and Glucosil neutralization consultation.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <button
                className="btn btn-bronze"
                onClick={() => onOpenEnquiry && onOpenEnquiry('TMS54 Cotton Sugar Screening', 'Service')}
              >
                <span>Request Lab Sample Screening</span>
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
        .grade-display-box {
          transition: background-color var(--transition-normal), border-color var(--transition-normal);
        }
        .scale-widget-card button {
          transition: all var(--transition-fast);
        }
        .sugar-problem-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        .problem-card {
          background-color: #FFFBEB;
          border: 1px solid #FDE68A;
          padding: 2.25rem;
          border-radius: var(--radius-sm);
        }
        .solution-approach-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 2.25rem;
          border-radius: var(--radius-sm);
        }
        .problem-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .sugar-benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          font-size: 0.875rem;
          color: #384A59;
          margin-top: 1.25rem;
          border-top: 1px solid var(--border-hairline);
          padding-top: 1rem;
        }
        .sugar-benefits-list li {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .sugar-benefits-list strong {
          color: #17232D;
        }
        .sugar-products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .sugar-grade-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .sugar-grade-tab {
          padding: 0.85rem 1rem;
          text-align: left;
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 74px;
          box-sizing: border-box;
        }
        .sugar-grade-tab:hover {
          border-color: var(--color-graphite);
          background-color: #FAF9F6;
        }
        .sugar-grade-tab.active {
          border-color: var(--color-graphite);
          background-color: #FFFFFF;
          box-shadow: 0 0 0 2px var(--color-graphite);
        }
        .tab-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.35rem;
        }
        .tab-code {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-graphite);
        }
        .tab-color-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
          display: inline-block;
        }
        .tab-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-graphite);
          line-height: 1.3;
        }
        .grade-display-box {
          padding: 2rem;
          border-radius: var(--radius-sm);
          border-width: 1px;
          border-style: solid;
          transition: background-color var(--transition-normal), border-color var(--transition-normal);
        }
        .grade-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(23, 35, 45, 0.12);
          flex-wrap: wrap;
        }
        .grade-badge-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .grade-pill-tag {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-xs);
          background-color: rgba(0, 0, 0, 0.08);
          color: var(--color-graphite);
        }
        .grade-name-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin: 0;
          font-family: var(--font-heading);
        }
        .grade-conc-text {
          font-size: 0.875rem;
          font-weight: 600;
          margin-top: 0.35rem;
        }
        .reaction-badge-card {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          background-color: rgba(255, 255, 255, 0.95);
          padding: 0.65rem 1rem;
          border-radius: var(--radius-xs);
          border: 1px solid rgba(20, 29, 36, 0.12);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
        }
        .reaction-circle-preview {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid #FFFFFF;
          box-shadow: 0 1px 4px rgba(0,0,0,0.25);
          flex-shrink: 0;
          display: inline-block;
        }
        .reaction-text-col {
          display: flex;
          flex-direction: column;
          line-height: 1.25;
        }
        .reaction-label {
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #5C7080;
          display: block;
          margin-bottom: 0.15rem;
        }
        .reaction-val {
          font-size: 0.8125rem;
          color: #141D24;
          font-weight: 600;
        }
        .grade-assessment-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 1.5rem;
        }
        .assessment-label {
          display: block;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(23, 35, 45, 0.7);
          margin-bottom: 0.35rem;
        }
        .assessment-text {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--color-graphite);
          margin: 0;
          font-weight: 500;
        }
        .procedure-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .procedure-step-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1.5rem 1.25rem;
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
        }
        .step-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .step-time {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-accent);
          background: rgba(197, 55, 39, 0.08);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-xs);
        }
        .step-num {
          font-size: 0.6875rem;
          color: #8E9EA9;
          font-weight: 600;
        }
        .step-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin: 0 0 0.4rem;
        }
        .step-desc {
          font-size: 0.8125rem;
          color: #4D606E;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .solution-header-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .sugar-problem-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .sugar-grade-tabs {
            grid-template-columns: 1fr 1fr;
            gap: 0.65rem;
          }
          .procedure-steps-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .grade-assessment-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .grade-display-box {
            padding: 1.5rem 1.25rem;
          }
        }
        @media (max-width: 640px) {
          .grade-header-row {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          .reaction-badge-card {
            width: 100%;
            box-sizing: border-box;
            justify-content: flex-start;
          }
          .solution-actions-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          .solution-actions-row .btn {
            width: 100%;
            justify-content: center;
          }
          .scale-widget-card {
            padding: 1.25rem 1rem !important;
          }
          .problem-card, .solution-approach-card {
            padding: 1.5rem 1.15rem;
          }
          .sugar-products-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 520px) {
          .sugar-grade-tabs {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .sugar-grade-tab {
            padding: 0.85rem 1rem;
            min-height: auto;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .tab-top-row {
            margin-bottom: 0;
            gap: 0.75rem;
          }
          .tab-code {
            font-size: 0.8125rem;
          }
          .tab-label {
            font-size: 0.8125rem;
            text-align: right;
          }
        }
      `}</style>
    </div>
  );
}
