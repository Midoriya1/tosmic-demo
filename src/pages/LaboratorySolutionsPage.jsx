import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, FileText, ArrowRight, ShieldAlert, Cpu, Calculator, Check, Award } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products';
import { solutionsData } from '../data/solutions';

export function LaboratorySolutionsPage({ onOpenEnquiry }) {
  const labSolution = solutionsData.find(s => s.slug === 'laboratory');
  const labProducts = productsData.filter(p => p.categorySlug === 'laboratory');

  // Metrology count calculator
  const [calcInput, setCalcInput] = useState('30');
  const [calcFromUnit, setCalcFromUnit] = useState('Ne');

  const calculateUnits = (val, from) => {
    const num = parseFloat(val);
    if (isNaN(num) || num <= 0) {
      return { Ne: '—', Nm: '—', tex: '—', dtex: '—', Den: '—' };
    }

    let tex = 0;
    switch (from) {
      case 'Ne':
        tex = 590.541 / num;
        break;
      case 'Nm':
        tex = 1000 / num;
        break;
      case 'tex':
        tex = num;
        break;
      case 'dtex':
        tex = num / 10;
        break;
      case 'Den':
        tex = num / 9;
        break;
      default:
        tex = num;
    }

    return {
      Ne: (590.541 / tex).toFixed(2),
      Nm: (1000 / tex).toFixed(2),
      tex: tex.toFixed(2),
      dtex: (tex * 10).toFixed(1),
      Den: (tex * 9).toFixed(1)
    };
  };

  const converted = calculateUnits(calcInput, calcFromUnit);

  const testingStandards = [
    {
      code: 'ISO 2062',
      title: 'Tensile Properties of Yarns',
      description: 'Single-end automatic breaking force, tenacity (cN/tex), and elongation at break curves via Tensotester 3.',
      certifiedTolerance: 'Class 0.5 (DIN 51221)'
    },
    {
      code: 'ASTM D2256',
      title: 'Standard Test Method for Tensile Properties',
      description: 'Constant rate of extension (CRE) tensile metrology across spun, filament, and elastomeric package lots.',
      certifiedTolerance: '±0.5% Load Cell Accuracy'
    },
    {
      code: 'ASTM D1425',
      title: 'Unevenness of Textile Strands',
      description: 'Mass variation CV%, spectrogram fast Fourier analysis, periodic wavelength pinpointing, and IPI imperfection count.',
      certifiedTolerance: 'Capacitive Class 0.5'
    },
    {
      code: 'DIN 53834',
      title: 'Testing of Textiles: Tensile Testing',
      description: 'German national textile tensile standard conformity with automated 24-position creel sequencing.',
      certifiedTolerance: 'Certified In-House Metrology'
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
              { label: 'Laboratory Solutions' }
            ]}
          />

          <div className="solution-header-grid">
            <div className="solution-header-copy">
              <div className="header-badge-row">
                <span className="badge-overline">Division 01 · Textile metrology</span>
                <span className="badge-subtag font-mono">Class 0.5 calibrated</span>
              </div>
              <h1 className="solution-header-title">Laboratory Solutions</h1>
              <p className="solution-header-lead">
                Precision textile quality control from raw fibre to finished yarn. Certified international testing standard compatibility, 3-click simplicity, and zero proprietary bus obsolescence.
              </p>

              <div className="solution-actions-row">
                <button
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Sales')}
                >
                  <span>Request Metrology Catalog</span>
                  <ArrowUpRight size={15} />
                </button>
                <a href="#lab-calculator" className="btn btn-secondary">
                  <span>Count Converter</span>
                </a>
                <a href="#lab-products" className="btn btn-secondary">
                  <span>Browse Instruments ({labProducts.length})</span>
                </a>
              </div>
            </div>

            <div className="solution-header-media relative">
              <div className="drafting-crosshair top-left"></div>
              <div className="drafting-crosshair top-right"></div>
              <div className="drafting-crosshair bottom-left"></div>
              <div className="drafting-crosshair bottom-right"></div>
              <img
                src="/assets/easy-evenness-tester.jpg"
                alt="easy Evenness Tester Laboratory Setup"
                className="solution-hero-img-framed"
              />
              <div className="media-legend-bar">
                <span className="font-mono text-xs text-graphite/70">REF: TOMSIC "easy" EVENNESS TESTER</span>
                <span className="font-mono text-xs text-graphite/70">ORIGIN: SAVOGNA D'ISONZO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Architecture */}
      <section className="section bg-white">
        <div className="container">
          <div className="architecture-grid">
            <div>
              <span className="badge-overline">Engineering philosophy</span>
              <h2 style={{ fontSize: '2.15rem', marginBottom: '1.25rem' }}>
                Why global spinning mills choose Tomsic testing benches.
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#384A59', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                For decades, testing equipment vendors forced spinning mills to replace functioning machinery because proprietary internal computer cards or obsolete operating systems became unserviceable. Tomsic eliminated this trap.
              </p>
              <p style={{ fontSize: '1rem', color: '#4D606E', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Our systems operate on standard commercial personal computers running modern Windows platforms using Microsoft .NET framework. All electronic modules are self-testing and user-extractable. A minor board fault can be pinpointed and addressed on-site in minutes without expensive international flight dispatches.
              </p>
            </div>

            <div className="architecture-features">
              <div className="arch-card relative">
                <div className="drafting-crosshair top-left"></div>
                <div className="drafting-crosshair top-right"></div>
                <strong className="arch-title">3-Click Software Flow</strong>
                <p className="arch-desc">Execute full testing protocols in three clicks. All operating parameters and units configured on a single unified interface window.</p>
              </div>

              <div className="arch-card relative">
                <div className="drafting-crosshair top-left"></div>
                <div className="drafting-crosshair top-right"></div>
                <strong className="arch-title">Link Job Technology</strong>
                <p className="arch-desc">Synchronizes count data from the TMS45 Count Analyser into evenness and strength testers without manual keyboard entry errors.</p>
              </div>

              <div className="arch-card relative">
                <div className="drafting-crosshair top-left"></div>
                <div className="drafting-crosshair top-right"></div>
                <strong className="arch-title">25-Year Database Longevity</strong>
                <p className="arch-desc">Retain quarter-century mill history with instant export to Microsoft Excel, Word, or plant-wide ERP servers.</p>
              </div>

              <div className="arch-card relative">
                <div className="drafting-crosshair top-left"></div>
                <div className="drafting-crosshair top-right"></div>
                <strong className="arch-title">World Standard Benchmarks</strong>
                <p className="arch-desc">Capacitive and optical measurement results align 100% with global reference standards recognized by international retailers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in Metrology Count Calculator */}
      <section className="section bg-warm-ivory border-top-hairline" id="lab-calculator">
        <div className="container">
          <div className="section-title-wrap text-center max-w-3xl mx-auto" style={{ marginBottom: '2.5rem' }}>
            <span className="badge-overline">Textile count conversion tool</span>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
              Textile Count & Linear Density Converter
            </h2>
            <p style={{ color: '#647887', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Universal conversion between English cotton count (Ne), Metric count (Nm), Universal mass (tex), Decitex (dtex), and Denier used by Tomsic Link Job SQL software.
            </p>
          </div>

          <div className="converter-card bg-white border border-border-subtle p-6 md:p-8 rounded-sm shadow-card max-w-4xl mx-auto relative">
            <div className="drafting-crosshair top-left"></div>
            <div className="drafting-crosshair top-right"></div>
            <div className="drafting-crosshair bottom-left"></div>
            <div className="drafting-crosshair bottom-right"></div>

            <div className="grid md:grid-cols-3 gap-6 items-end pb-6 border-b border-border-hairline">
              <div className="md:col-span-2">
                <label className="block text-xs font-mono font-bold text-graphite mb-2 uppercase tracking-wider">
                  Input Count Value:
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="number"
                    step="any"
                    value={calcInput}
                    onChange={(e) => setCalcInput(e.target.value)}
                    className="flex-1 px-4 py-2.5 font-mono text-lg font-bold border border-border-subtle rounded-sm bg-warm-ivory/50 text-graphite focus:outline-none focus:border-graphite"
                    placeholder="Enter value..."
                  />
                  <select
                    value={calcFromUnit}
                    onChange={(e) => setCalcFromUnit(e.target.value)}
                    className="px-4 py-2.5 font-mono font-bold text-sm border border-border-subtle rounded-sm bg-warm-ivory text-graphite cursor-pointer focus:outline-none focus:border-graphite"
                  >
                    <option value="Ne">Ne (English Cotton)</option>
                    <option value="Nm">Nm (Metric Count)</option>
                    <option value="tex">tex (Universal Mass)</option>
                    <option value="dtex">dtex (Decitex)</option>
                    <option value="Den">Den (Denier)</option>
                  </select>
                </div>
              </div>

              <div>
                <span className="font-mono text-xs text-steel-blue block mb-1">
                  Active Reference:
                </span>
                <span className="font-mono text-sm font-bold text-graphite block">
                  {calcInput} {calcFromUnit}
                </span>
                <span className="text-[11px] text-graphite/50 block font-mono">
                  Standard 20°C / 65% RH
                </span>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-6">
              <div className={`p-3 rounded-sm border ${calcFromUnit === 'Ne' ? 'bg-warm-ivory border-graphite' : 'bg-white border-border-hairline'}`}>
                <span className="font-mono text-[11px] text-graphite/60 uppercase block">Ne (Cotton)</span>
                <strong className="font-mono text-xl text-graphite block my-1 tabular-nums">{converted.Ne}</strong>
                <span className="font-mono text-[10px] text-graphite/40">tex = 590.54 / Ne</span>
              </div>

              <div className={`p-3 rounded-sm border ${calcFromUnit === 'Nm' ? 'bg-warm-ivory border-graphite' : 'bg-white border-border-hairline'}`}>
                <span className="font-mono text-[11px] text-graphite/60 uppercase block">Nm (Metric)</span>
                <strong className="font-mono text-xl text-graphite block my-1 tabular-nums">{converted.Nm}</strong>
                <span className="font-mono text-[10px] text-graphite/40">Nm = 1000 / tex</span>
              </div>

              <div className={`p-3 rounded-sm border ${calcFromUnit === 'tex' ? 'bg-warm-ivory border-graphite' : 'bg-white border-border-hairline'}`}>
                <span className="font-mono text-[11px] text-graphite/60 uppercase block">tex (Universal)</span>
                <strong className="font-mono text-xl text-graphite block my-1 tabular-nums">{converted.tex}</strong>
                <span className="font-mono text-[10px] text-graphite/40">g / 1,000 meters</span>
              </div>

              <div className={`p-3 rounded-sm border ${calcFromUnit === 'dtex' ? 'bg-warm-ivory border-graphite' : 'bg-white border-border-hairline'}`}>
                <span className="font-mono text-[11px] text-graphite/60 uppercase block">dtex (Decitex)</span>
                <strong className="font-mono text-xl text-graphite block my-1 tabular-nums">{converted.dtex}</strong>
                <span className="font-mono text-[10px] text-graphite/40">dtex = tex * 10</span>
              </div>

              <div className={`p-3 rounded-sm border ${calcFromUnit === 'Den' ? 'bg-warm-ivory border-graphite' : 'bg-white border-border-hairline'}`}>
                <span className="font-mono text-[11px] text-graphite/60 uppercase block">Denier (Den)</span>
                <strong className="font-mono text-xl text-graphite block my-1 tabular-nums">{converted.Den}</strong>
                <span className="font-mono text-[10px] text-graphite/40">Den = tex * 9</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Standards Compliance Grid */}
      <section className="section bg-white border-top-hairline">
        <div className="container">
          <div className="section-title-wrap max-w-2xl mb-8">
            <span className="badge-overline">International standard harmonization</span>
            <h3 className="text-2xl font-bold text-graphite">
              Certified Metrological Testing Standards
            </h3>
            <p className="text-steel-blue text-sm mt-1">
              Every Tomsic laboratory system is calibrated according to strict European and international norms to guarantee third-party audit acceptance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {testingStandards.map((std, i) => (
              <div key={i} className="p-5 border border-border-subtle bg-warm-ivory/30 rounded-sm relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm font-bold text-graphite bg-white px-2 py-0.5 border border-border-subtle rounded-sm">
                    {std.code}
                  </span>
                  <span className="font-mono text-[11px] text-muted-bronze font-semibold">
                    {std.certifiedTolerance}
                  </span>
                </div>
                <h4 className="text-base font-bold text-graphite mb-1">{std.title}</h4>
                <p className="text-xs text-steel-blue leading-relaxed m-0">{std.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Product Portfolio */}
      <section className="section bg-warm-ivory border-top-hairline" id="lab-products">
        <div className="container">
          <div className="section-title-wrap" style={{ marginBottom: '3rem' }}>
            <span className="badge-overline">Testing instruments portfolio</span>
            <h2>Laboratory Testing Instruments</h2>
            <p style={{ color: '#647887', fontSize: '1.1rem', marginTop: '0.4rem' }}>
              Engineered, machined, and calibrated 100% in Savogna d'Isonzo, Italy.
            </p>
          </div>

          <div className="lab-products-grid">
            {labProducts.map(p => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Ancillary Instruments Info */}
      <section className="section bg-white border-top-hairline">
        <div className="container">
          <div className="ancillary-section-box">
            <div>
              <span className="badge-overline">Ancillary laboratory equipment</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                Complete Spinning Laboratory Ancillary Equipment
              </h3>
              <p style={{ color: '#4D606E', fontSize: '0.95rem', lineHeight: '1.6' }}>
                In addition to our flagship evenness, tensile, and trash systems, Tomsic manufactures a complete range of spinning laboratory auxiliary instruments:
              </p>
              <ul className="ancillary-list">
                <li><strong>AutoWinder:</strong> Automated package winding for sample preparation</li>
                <li><strong>EleTwist & CompuTwist:</strong> Electronic yarn twist counters with digital display</li>
                <li><strong>EleWrap XT:</strong> Electronic motorized yarn wrap reel with tension controller</li>
                <li><strong>Electric Sliver & Roving Reel:</strong> High-precision sliver length measurement</li>
                <li><strong>Automatic & Manual Crockmeter:</strong> Color rub-fastness testing units</li>
              </ul>
            </div>
            <div className="ancillary-action">
              <button
                className="btn btn-secondary"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Ancillary Instruments', 'Sales')}
              >
                <span>Request Ancillary Catalog</span>
                <ArrowUpRight size={14} />
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
        .architecture-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .architecture-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .arch-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
        }
        .arch-title {
          display: block;
          font-size: 1rem;
          color: #17232D;
          margin-bottom: 0.4rem;
        }
        .arch-desc {
          font-size: 0.85rem;
          color: #647887;
          line-height: 1.5;
        }
        .converter-card .grid > div {
          transition: background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
        }
        .converter-card .grid > div:hover {
          transform: translateY(-2px);
        }
        .lab-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .ancillary-section-box {
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          padding: 2.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .ancillary-list {
          list-style: none;
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .ancillary-list li {
          font-size: 0.875rem;
          color: #384A59;
        }
        .ancillary-list strong {
          color: #17232D;
        }

        @media (max-width: 1024px) {
          .solution-header-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .architecture-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .converter-card .grid > div {
          transition: background-color var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
        }
        .converter-card .grid > div:hover {
          transform: translateY(-2px);
        }
        .lab-products-grid {
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
          .architecture-features {
            grid-template-columns: 1fr;
          }
          .converter-card {
            padding: 1.25rem 1rem !important;
          }
          .lab-products-grid {
            grid-template-columns: 1fr;
          }
          .ancillary-section-box {
            padding: 1.5rem 1.15rem;
            gap: 1.5rem;
          }
          .ancillary-section-box .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
