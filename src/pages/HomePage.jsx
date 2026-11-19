import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, CheckCircle2, Shield, Cpu, Activity, Award, Globe, Layers, Sparkles, Filter, ChevronRight, Sliders } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products';
import { solutionsData } from '../data/solutions';
import { newsData } from '../data/news';
import { companyData } from '../data/company';
import { globalNetworkData } from '../data/globalNetwork';

gsap.registerPlugin(ScrollTrigger);

export function HomePage({ onOpenEnquiry }) {
  const homeRef = useRef(null);
  const [activeProcessStage, setActiveProcessStage] = useState('stage-yarn');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  // Process Stages for Spinning Mill Production Flow
  const processStages = [
    {
      id: 'stage-raw',
      number: '01',
      name: 'Raw Cotton & Stickiness',
      focus: 'Entomological Honeydew Detection',
      instruments: ['cotton-sugar-test-tms54', 'glucosil-sugar-solution-tms55'],
      description: 'Pre-production bale screening to quarantine insect honeydew sugars in 15 minutes, preventing catastrophic roller lapping and machine jams in spinning.'
    },
    {
      id: 'stage-card',
      number: '02',
      name: 'Carding & Web Cleanliness',
      focus: 'Short-Term Autolevelling & Impurity Grading',
      instruments: ['card-autoleveller-tms25-r2c', 'tms60-nep-trash'],
      description: 'Closed-loop digital drafting reduces 1-meter sliver count variation by up to 70%, while optical sensors classify neps and seed-coat fragments.'
    },
    {
      id: 'stage-draw',
      number: '03',
      name: 'Drawing & Long Fibre Drafting',
      focus: 'High-Speed Regulation up to 1,000 m/min',
      instruments: ['drawframe-autoleveller-tms25-r2d', 'gill-box-autoleveller', 'sliver-quality-monitor-tms25-qm2'],
      description: 'Digital servo autolevelling for cotton drawframes and wool/acrylic gill boxes, paired with continuous online spectrogram surveillance.'
    },
    {
      id: 'stage-yarn',
      number: '04',
      name: 'Finished Yarn Metrology',
      focus: 'Evenness, Tensile Strength & Count',
      instruments: ['easy-evenness-tester', 'tensotester-3', 'easyf-filament', 'tms45-count-analyser'],
      description: 'Comprehensive textile laboratory benches matching international reference standards (ISO 2062, ASTM D2256) with 3-click simplicity and 25-year database longevity.'
    }
  ];

  const currentStage = processStages.find(s => s.id === activeProcessStage) || processStages[3];
  const stageProducts = productsData.filter(p => currentStage.instruments.includes(p.slug));

  const filteredProducts = activeCategoryFilter === 'all'
    ? productsData.slice(0, 6)
    : productsData.filter(p => p.categorySlug === activeCategoryFilter);

  // Flagship Hero Product
  const flagshipProduct = productsData.find(p => p.slug === 'easy-evenness-tester') || productsData[0];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Cinematic Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-status-strip',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.15 }
      )
      .fromTo('.hero-headline',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' },
        '-=0.45'
      )
      .fromTo('.hero-lead',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.75 },
        '-=0.55'
      )
      .fromTo('.hero-cta-group .btn',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
        '-=0.45'
      )
      .fromTo('.hero-metric-cell',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
        '-=0.4'
      )
      .fromTo('.machinery-hero-frame',
        { opacity: 0, scale: 0.96, y: 24 },
        { opacity: 1, scale: 1, y: 0, duration: 1.0, ease: 'expo.out' },
        0.25
      )
      .fromTo('.hero-machine-img',
        { scale: 1.06 },
        { scale: 1.0, duration: 1.3, ease: 'power2.out' },
        0.35
      );

      // 2. Process Navigator Reveal
      gsap.fromTo('.stage-active-panel',
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.stage-active-panel',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 3. Flagship Spotlight Card Reveal
      gsap.fromTo('.flagship-image-card',
        { opacity: 0, scale: 0.97, y: 24 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.flagship-spotlight-box',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.flagship-copy-col',
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.flagship-spotlight-box',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 4. Company Heritage Showcase
      gsap.fromTo('.heritage-facility-wrapper',
        { opacity: 0, clipPath: 'inset(0% 100% 0% 0%)' },
        {
          opacity: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.05,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: '.heritage-editorial-grid',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.heritage-story-col',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.heritage-editorial-grid',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 5. Engineering Philosophy Cards Stagger
      gsap.fromTo('.philosophy-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.philosophy-grid',
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="homepage-wrapper" ref={homeRef}>
      {/* 1. HERO SECTION (Editorial Engineering) */}
      <section className="hero-section bg-grid-blueprint">
        <div className="container hero-container">
          <div className="hero-grid">
            <div className="hero-text-col">
              <div className="hero-status-strip">
                <span className="heritage-tag">
                  <span className="heritage-dot" />
                  <span className="font-mono">ENGINEERED IN ITALY · SINCE 1956</span>
                </span>
                <span className="status-indicator">
                  <span className="status-dot" />
                  <span>ACIMIT CERTIFIED FACTORY</span>
                </span>
              </div>

              <h1 className="hero-headline">
                Precision technology for industries that demand more.
              </h1>

              <p className="hero-lead">
                Advanced solutions for textile testing, spinning autolevelling, and raw fibre quality control. Engineered in Savogna d’Isonzo with seven decades of European mechanical rigor.
              </p>

              <div className="hero-cta-group">
                <Link to="/solutions" className="btn btn-primary">
                  <span>Explore Solutions</span>
                  <ArrowRight size={15} />
                </Link>

                <button 
                  className="btn btn-secondary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Sales')}
                >
                  <span>Request Factory Consultation</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

              {/* Technical Credibility Row */}
              <div className="hero-metrics-grid">
                <div className="hero-metric-cell">
                  <span className="metric-val">1956</span>
                  <span className="metric-lbl">Founding Year · Gorizia</span>
                </div>
                <div className="hero-metric-cell">
                  <span className="metric-val">-70%</span>
                  <span className="metric-lbl">1-Meter Sliver Count CV</span>
                </div>
                <div className="hero-metric-cell">
                  <span className="metric-val">30+</span>
                  <span className="metric-lbl">Countries Supplied</span>
                </div>
                <div className="hero-metric-cell">
                  <span className="metric-val font-mono">0.5%</span>
                  <span className="metric-lbl">Class 0.5 Load Cell Precision</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Presentation: Flagship Machinery Hero */}
            <div className="hero-visual-col">
              <div className="machinery-hero-frame">
                {/* Architectural Drafting Crosshairs */}
                <span className="drafting-crosshair" style={{ top: '8px', left: '8px' }} />
                <span className="drafting-crosshair" style={{ top: '8px', right: '8px' }} />
                <span className="drafting-crosshair" style={{ bottom: '8px', left: '8px' }} />
                <span className="drafting-crosshair" style={{ bottom: '8px', right: '8px' }} />

                <div className="machinery-frame-header">
                  <span className="font-mono text-meta">UNIT MODEL: TMS60 / NRE-23</span>
                  <span className="meta-pill">OPTICAL IMPURITY CLASSIFIER</span>
                </div>

                <div className="machinery-img-wrap">
                  <img
                    src="/assets/hero-machine.webp"
                    alt="Tomsic TMS60 Nep and Trash Testing Instrument"
                    className="hero-machine-img"
                    loading="eager"
                  />
                </div>

                <div className="machinery-specs-overlay">
                  <div className="spec-chip">
                    <span className="spec-label">ANALYSIS TYPE</span>
                    <strong className="spec-value">Neps, Trash, Seed-Coat</strong>
                  </div>
                  <div className="spec-chip">
                    <span className="spec-label">DETECTION SPEED</span>
                    <strong className="spec-value font-mono">High-Speed Optical</strong>
                  </div>
                  <div className="spec-chip">
                    <span className="spec-label">ORIGIN</span>
                    <strong className="spec-value">Gorizia, Italy</strong>
                  </div>
                </div>

                <div className="machinery-frame-footer">
                  <div className="footer-legend">
                    <strong>TMS60 Nep & Trash Metrology Station</strong>
                    <span>Launched at ITMA Milan · Designed for card and drawframe slivers</span>
                  </div>
                  <Link to="/products/tms60-nep-trash" className="btn-link">
                    <span>Inspect System</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE PRODUCTION STAGE NAVIGATOR (Process-Oriented Metrology) */}
      <section className="section bg-white border-top-hairline">
        <div className="container">
          <SectionHeading
            overline="PROCESS-ORIENTED METROLOGY"
            title="Quality control across every spinning milestone."
            subtitle="From raw bale stickiness diagnostics to final packaged yarn regularity, select a production phase to inspect dedicated instrumentation."
          />

          <div className="stage-selector-bar">
            {processStages.map(stage => (
              <button
                key={stage.id}
                className={`stage-nav-pill ${activeProcessStage === stage.id ? 'active' : ''}`}
                onClick={() => setActiveProcessStage(stage.id)}
              >
                <span className="stage-nav-num font-mono">{stage.number}</span>
                <span className="stage-nav-name">{stage.name}</span>
              </button>
            ))}
          </div>

          <div className="stage-active-panel">
            <div className="stage-panel-left">
              <span className="text-meta font-mono">PRODUCTION PHASE {currentStage.number}</span>
              <h3 className="stage-panel-title">{currentStage.name}</h3>
              <p className="stage-panel-focus font-mono">{currentStage.focus}</p>
              <p className="stage-panel-desc">{currentStage.description}</p>

              <div className="stage-panel-actions">
                <Link to="/solutions" className="btn btn-secondary btn-sm">
                  <span>Explore Division Architecture</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="stage-panel-right">
              <span className="text-meta font-mono" style={{ display: 'block', marginBottom: '1rem' }}>
                MATCHED INDUSTRIAL INSTRUMENTS ({stageProducts.length})
              </span>
              <div className="stage-products-row">
                {stageProducts.map(p => (
                  <Link key={p.slug} to={`/products/${p.slug}`} className="stage-product-mini-card">
                    <div className="mini-card-thumb">
                      <img src={p.primaryImage} alt={p.name} />
                    </div>
                    <div className="mini-card-info">
                      <span className="mini-card-code font-mono">{p.code}</span>
                      <strong className="mini-card-name">{p.name}</strong>
                      <span className="mini-card-tagline">{p.tagline}</span>
                    </div>
                    <ArrowUpRight size={16} className="mini-card-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP MACHINERY SPOTLIGHT (Editorial Feature) */}
      <section className="section bg-warm-ivory border-top-hairline">
        <div className="container">
          <div className="flagship-spotlight-box">
            <span className="drafting-crosshair" style={{ top: '12px', left: '12px' }} />
            <span className="drafting-crosshair" style={{ top: '12px', right: '12px' }} />
            
            <div className="flagship-grid">
              <div className="flagship-media-col">
                <div className="flagship-image-card">
                  <span className="flagship-badge">FLAGSHIP METROLOGY SYSTEM</span>
                  <img
                    src="/assets/easy-evenness-tester.jpg"
                    alt="TOMSIC easy Evenness Tester System"
                    className="flagship-hero-img"
                    loading="lazy"
                  />
                  <div className="flagship-caption-row font-mono">
                    <span>CAPACITANCE & OPTICAL SENSOR SLOTS</span>
                    <span>24-POSITION AUTOCHANGER CREEL</span>
                  </div>
                </div>
              </div>

              <div className="flagship-copy-col">
                <div className="flagship-meta font-mono">
                  <span>PRODUCT CODE: TMS-EASY</span>
                  <span className="tech-sep">/</span>
                  <span>1 TEX – 12 KTEX (UP TO 30 KTEX)</span>
                </div>

                <h2 className="flagship-title">“easy” Evenness Tester</h2>
                <h3 className="flagship-subtitle">World-standard evenness and mass variation testing for yarn, roving, and sliver.</h3>

                <p className="flagship-text">
                  Designed to replace cumbersome testing benches with an extractable modular architecture, the "easy" Evenness Tester operates on standard commercial PCs using Microsoft .NET technology. Tested and approved by world-renowned textile manufacturers including Ermenegildo Zegna and Botto Giuseppe.
                </p>

                <div className="flagship-features-grid">
                  <div className="flagship-feat-item">
                    <strong className="feat-val font-mono">3-Clicks</strong>
                    <span className="feat-lbl">Complete standard test protocol execution</span>
                  </div>
                  <div className="flagship-feat-item">
                    <strong className="feat-val font-mono">400 m/min</strong>
                    <span className="feat-lbl">Continuous precision testing speed</span>
                  </div>
                  <div className="flagship-feat-item">
                    <strong className="feat-val font-mono">Link Job</strong>
                    <span className="feat-lbl">Automatic count synchronization with TMS45</span>
                  </div>
                  <div className="flagship-feat-item">
                    <strong className="feat-val font-mono">25 Years</strong>
                    <span className="feat-lbl">Relational database history & direct Excel export</span>
                  </div>
                </div>

                <div className="flagship-action-row">
                  <Link to="/products/easy-evenness-tester" className="btn btn-primary">
                    <span>Explore Complete Technical Specifications</span>
                    <ArrowRight size={15} />
                  </Link>

                  <button
                    className="btn btn-secondary"
                    onClick={() => onOpenEnquiry && onOpenEnquiry('easy Evenness Tester', 'Sales')}
                  >
                    <span>Request Quotation</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPANY HERITAGE (Architectural Editorial Presentation) */}
      <section className="section bg-white border-top-hairline">
        <div className="container">
          <div className="heritage-editorial-grid">
            {/* Left: Architectural Factory Showcase & Diptych */}
            <div className="heritage-gallery-col">
              <div className="heritage-main-frame relative">
                <div className="heritage-facility-wrapper relative">
                  <span className="drafting-crosshair top-left" />
                  <span className="drafting-crosshair top-right" />
                  <img
                    src="/assets/tomsic-facility.jpg"
                    alt="Tomsic industrial engineering plant in Savogna d'Isonzo (GO), Italy"
                    className="heritage-facility-img"
                    loading="lazy"
                  />
                  <div className="facility-badge-strip font-mono">
                    <span className="facility-dot" />
                    <span>SAVOGNA D’ISONZO PLANT · GORIZIA, ITALY</span>
                  </div>
                </div>

                {/* Sub-strip: Italian Textile Craft Diptych + Factory Data */}
                <div className="heritage-diptych-row">
                  <div className="heritage-craft-thumb">
                    <img
                      src="/assets/italian-heritage.jpg"
                      alt="Italian Spun Yarn Heritage"
                      className="craft-img"
                      loading="lazy"
                    />
                    <span className="craft-tag font-mono">ITALIAN YARN CRAFT</span>
                  </div>

                  <div className="heritage-telemetry-block font-mono">
                    <div className="telemetry-item">
                      <span className="tel-label">FOUNDED:</span>
                      <strong className="tel-val">1956 · Gorizia</strong>
                    </div>
                    <div className="telemetry-item">
                      <span className="tel-label">EXPANSION:</span>
                      <strong className="tel-val">2003 (3× Capacity)</strong>
                    </div>
                    <div className="telemetry-item">
                      <span className="tel-label">COORDINATES:</span>
                      <strong className="tel-val">45°52′N 13°34′E</strong>
                    </div>
                    <div className="telemetry-item">
                      <span className="tel-label">SYNTHESIS:</span>
                      <strong className="tel-val text-precision">100% In-House</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative Story & Structured Pillars */}
            <div className="heritage-story-col">
              <div className="header-badge-row">
                <span className="badge-overline">INDEPENDENT INDUSTRIAL HERITAGE</span>
                <span className="badge-subtag">EST. 1956 · ITALY</span>
              </div>

              <h2 className="heritage-main-title">
                European engineering heritage, built without compromise.
              </h2>
              
              <p className="heritage-lead-para lead">
                Founded in 1956 by Mr. Carlo Tomsic, our enterprise began with electronic systems and control engineering for legendary drawframe specialist VOUK. Over four decades of specialized industrial collaboration, we accumulated singular mastery in autolevelling, high-speed drafting kinematics, and textile metrology.
              </p>

              <p className="heritage-sub-para">
                Today, managed by the second generation of the Tomsic family—Mr. Silvan Tomsic (President) and Mr. Ladi Tomsic (Vice-President)—we operate from our modern complex in Savogna d'Isonzo. We design and manufacture 100% of our electronic boards, mechanical assemblies, and measurement software in-house. Our philosophy rejects proprietary obsolescence: every Tomsic system runs on standard commercial computer hardware and open Windows platforms, ensuring decades of reliable service.
              </p>

              {/* 3 Structured Architectural Pillars */}
              <div className="heritage-pillars-list">
                <div className="pillar-credential-box">
                  <div className="pillar-index-badge font-mono">01</div>
                  <div className="pillar-text-group">
                    <h4>Independent Family Governance</h4>
                    <p>Direct engineering accountability from our owner-directors to your spinning mill operations.</p>
                  </div>
                </div>

                <div className="pillar-credential-box">
                  <div className="pillar-index-badge font-mono">02</div>
                  <div className="pillar-text-group">
                    <h4>100% In-House Technical Synthesis</h4>
                    <p>Sensors, chassis, and digital signal processors crafted under one Italian roof.</p>
                  </div>
                </div>

                <div className="pillar-credential-box">
                  <div className="pillar-index-badge font-mono">03</div>
                  <div className="pillar-text-group">
                    <h4>Universal Metrology Alignment</h4>
                    <p>Results and spectrograms fully comparable with international textile reference standards.</p>
                  </div>
                </div>
              </div>

              {/* CTA & ACIMIT Strip */}
              <div className="heritage-cta-strip">
                <Link to="/company" className="btn btn-primary">
                  <span>Explore Seven Decades of History</span>
                  <ArrowRight size={15} />
                </Link>

                <div className="acimit-cert-pill font-mono">
                  <img src="/assets/acimit-logo.png" alt="ACIMIT Association" className="acimit-logo-badge" />
                  <div className="acimit-cert-text">
                    <span className="cert-org">ACIMIT MEMBER</span>
                    <span className="cert-origin">MADE IN ITALY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED PRODUCT CATALOG (Filtered Grid) */}
      <section className="section bg-warm-ivory border-top-hairline">
        <div className="container">
          <div className="products-section-header">
            <div>
              <span className="badge-overline">MACHINERY & INSTRUMENT DIRECTORY</span>
              <h2 className="heading-main-title">Precision Instruments & Autolevellers</h2>
              <p className="heading-subtitle">
                Certified industrial systems deployed across leading global spinning mills.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="product-filter-tabs">
              <button
                className={`filter-tab ${activeCategoryFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategoryFilter('all')}
              >
                All Systems ({productsData.length})
              </button>
              <button
                className={`filter-tab ${activeCategoryFilter === 'laboratory' ? 'active' : ''}`}
                onClick={() => setActiveCategoryFilter('laboratory')}
              >
                Laboratory Solutions (5)
              </button>
              <button
                className={`filter-tab ${activeCategoryFilter === 'spinning' ? 'active' : ''}`}
                onClick={() => setActiveCategoryFilter('spinning')}
              >
                Spinning Automation (4)
              </button>
              <button
                className={`filter-tab ${activeCategoryFilter === 'sugar' ? 'active' : ''}`}
                onClick={() => setActiveCategoryFilter('sugar')}
              >
                Cotton Sugar Tests (2)
              </button>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="products-bottom-bar font-mono">
            <span>VERIFIED FACTORY DOCUMENTATION · 100% MACHINED & ASSEMBLED IN SAVOGNA D'ISONZO</span>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Sales')}
            >
              <span>Request Full Metrology Datasheet</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING EXPERTISE & LONGEVITY (Graphite Industrial Depth) */}
      <section className="section bg-graphite bg-grid-blueprint-dark">
        <div className="container">
          <div className="expertise-grid">
            <div className="expertise-text-col">
              <span className="badge-overline dark">THE TOMSIC PHILOSOPHY</span>
              <h2 className="text-white" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.85rem)', marginBottom: '1.25rem' }}>
                Rejecting planned obsolescence in industrial metrology.
              </h2>
              <p style={{ color: '#B2C0CB', fontSize: '1.075rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Most testing equipment vendors lock spinning mills into proprietary bus architectures and expensive recurring software licenses. At Tomsic, we engineer our instruments on standard commercial PC hardware with Microsoft .NET architecture. If a computer component fails a decade later, it can be replaced locally—without proprietary technician dependencies.
              </p>

              <div className="expertise-pillars-grid">
                {companyData.manufacturingPhilosophy.pillars.map((pillar, i) => (
                  <div key={i} className="expertise-pillar-card">
                    <div className="pillar-num font-mono">0{i + 1}</div>
                    <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '0.4rem' }}>{pillar.title}</h4>
                    <p style={{ color: '#8E9EA9', fontSize: '0.85rem', lineHeight: '1.55' }}>{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="expertise-visual-col">
              <div className="expertise-card-highlight">
                <span className="drafting-crosshair" style={{ top: '8px', right: '8px' }} />
                <div className="highlight-tag font-mono">INTER-MACHINE SYNCHRONIZATION</div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.45rem', margin: '0.5rem 0 1rem' }}>
                  Link Job Database Architecture
                </h3>
                <p style={{ color: '#A4B2BC', fontSize: '0.925rem', lineHeight: '1.6' }}>
                  Tomsic testing benches share an integrated relational SQL database. When the TMS45 Count Analyser calculates actual linear density, it transmits data automatically to the "easy" Evenness Tester and TensoTester3, eliminating transcription error across 25 years of stored mill history.
                </p>

                <div className="expertise-stat-box">
                  <div className="stat-item">
                    <span className="stat-number tabular-nums font-mono">25</span>
                    <span className="stat-label">Years of Instant Database History</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number tabular-nums font-mono">3</span>
                    <span className="stat-label">Clicks to Run Any Standard Protocol</span>
                  </div>
                </div>

                <div className="divider-dark" style={{ margin: '1.5rem 0' }} />

                <div className="expertise-client-quote">
                  <p style={{ color: '#EBF0F3', fontStyle: 'italic', fontSize: '0.925rem', lineHeight: '1.5' }}>
                    "Approved and relied upon by premier global textile players including Ermenegildo Zegna and Botto Giuseppe."
                  </p>
                  <span className="quote-source font-mono">
                    VERIFIED OFFICIAL CLIENT REFERENCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERNATIONAL PRESENCE (Verified Across 30+ Countries) */}
      <section className="section bg-white border-top-hairline">
        <div className="container">
          <SectionHeading
            overline="GLOBAL DISTRIBUTION"
            title="Supplying spinning mills in over 30 countries."
            subtitle="Local agents and factory-certified technical service engineers across five continents."
            linkText="View Full Worldwide Agent Network"
            linkHref="/contact"
          />

          <div className="global-presence-grid">
            {globalNetworkData.regions.map((reg, idx) => (
              <div key={idx} className="region-summary-card">
                <div className="region-header">
                  <Globe size={17} color="#A48256" />
                  <h4 className="region-title">{reg.name}</h4>
                </div>

                <ul className="region-country-list">
                  {reg.countries.map((c, cIdx) => (
                    <li key={cIdx} className="region-country-item">
                      <div className="country-info">
                        <strong>{c.name}</strong>
                        <span className="country-city">{c.city}</span>
                      </div>
                      <span className="country-role-tag font-mono">{c.role.includes('Headquarters') ? 'Global HQ' : 'Agent Hub'}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="global-support-banner">
            <div className="support-banner-inner">
              <div>
                <span className="badge-overline">DIRECT FACTORY COMMITMENT</span>
                <h3 style={{ fontSize: '1.35rem', marginTop: '0.2rem' }}>
                  Need technical assistance or genuine Italian spare parts?
                </h3>
                <p style={{ color: '#4D606E', fontSize: '0.9375rem', marginTop: '0.25rem' }}>
                  Our technical after-sales department in Savogna d'Isonzo offers direct remote diagnostic support and priority global spare part dispatch.
                </p>
              </div>
              <div className="support-banner-actions">
                <a href="tel:+390481882032" className="btn btn-secondary">
                  <span>Call Service: +39 (0481) 882032</span>
                </a>
                <button
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Service')}
                >
                  <span>Open Service Ticket</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWS & EXHIBITIONS (Verified Source Material) */}
      <section className="section bg-warm-ivory border-top-hairline">
        <div className="container">
          <SectionHeading
            overline="EXHIBITIONS & RELEASES"
            title="News & International Trade Fairs"
            subtitle="Meet Tomsic engineers at premier international textile technology events."
            linkText="All News & Events"
            linkHref="/news"
          />

          <div className="news-cards-grid">
            {newsData.slice(0, 3).map(item => (
              <article key={item.slug} className="news-card">
                <div className="news-card-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="news-card-img"
                    loading="lazy"
                  />
                  <span className="news-type-badge font-mono">{item.type}</span>
                </div>

                <div className="news-card-content">
                  <div className="news-date-location font-mono">
                    <span className="news-date">{item.date}</span>
                    <span className="news-loc">• {item.location}</span>
                  </div>

                  <h3 className="news-card-title">
                    <Link to="/news">{item.title}</Link>
                  </h3>

                  <p className="news-card-excerpt">{item.excerpt}</p>

                  <div className="news-card-footer">
                    <Link to="/news" className="btn-link">
                      <span>Read Full Report</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. STRONG ENQUIRY CTA SECTION */}
      <section className="section-lg bg-graphite text-white enquiry-cta-section bg-grid-blueprint-dark">
        <div className="container">
          <div className="enquiry-cta-box">
            <span className="badge-overline dark">START A CONSULTATION</span>
            <h2 className="enquiry-cta-headline">
              Let’s find the right solution for your application.
            </h2>
            <p className="enquiry-cta-lead">
              Whether you are equipping a modern textile testing laboratory, retrofitting carding and drawframe autolevellers, or addressing sticky cotton challenges—our Italian engineering team is ready to assist.
            </p>

            <div className="enquiry-cta-actions">
              <button
                className="btn btn-bronze"
                onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Sales')}
              >
                <span>Request Direct Factory Quotation</span>
                <ArrowUpRight size={16} />
              </button>

              <Link to="/contact" className="btn btn-secondary-dark">
                <span>View Contact Details & Agents</span>
              </Link>
            </div>

            <div className="enquiry-contact-chips font-mono">
              <div className="chip-item">
                <span className="chip-label">General Enquiries:</span>
                <a href="mailto:tomsic@tomsic.it" className="chip-val">tomsic@tomsic.it</a>
              </div>
              <div className="chip-sep">/</div>
              <div className="chip-item">
                <span className="chip-label">Direct Commercial Office:</span>
                <a href="mailto:sales@tomsic.it" className="chip-val">sales@tomsic.it</a>
              </div>
              <div className="chip-sep">/</div>
              <div className="chip-item">
                <span className="chip-label">Factory Switchboard:</span>
                <span className="chip-val tabular-nums">+39 (0481) 882320</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Styling */
        .hero-section {
          position: relative;
          background-color: var(--color-warm-ivory);
          padding-top: 4.5rem;
          padding-bottom: 5.5rem;
          border-bottom: 1px solid var(--border-hairline);
          overflow: hidden;
        }
        .hero-container {
          position: relative;
          z-index: 2;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }
        .hero-status-strip {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .heritage-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.725rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-muted-bronze);
          background-color: var(--color-warm-ivory-deep);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-xs);
          border: 1px solid rgba(20, 29, 36, 0.12);
        }
        .heritage-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-muted-bronze);
        }
        .hero-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 4.8vw, 4rem);
          font-weight: 800;
          line-height: 1.08;
          color: var(--color-graphite);
          letter-spacing: -0.035em;
          margin-bottom: 1.5rem;
        }
        .hero-lead {
          font-size: 1.225rem;
          line-height: 1.62;
          color: #384A59;
          margin-bottom: 2.25rem;
          max-width: 640px;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 3.25rem;
        }
        .hero-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-hairline);
        }
        .hero-metric-cell {
          display: flex;
          flex-direction: column;
        }
        .metric-val {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--color-graphite);
          line-height: 1.1;
        }
        .metric-lbl {
          font-size: 0.725rem;
          color: #647887;
          margin-top: 0.25rem;
          line-height: 1.35;
        }

        /* Machinery Hero Frame */
        .machinery-hero-frame {
          position: relative;
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1.75rem;
          box-shadow: var(--shadow-card);
        }
        .machinery-frame-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-hairline);
          margin-bottom: 1.25rem;
        }
        .machinery-img-wrap {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 310px;
        }
        .hero-machine-img {
          max-height: 290px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 8px 20px rgba(20, 29, 36, 0.08));
        }
        .machinery-specs-overlay {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-xs);
          margin-top: 1.25rem;
        }
        .spec-chip {
          display: flex;
          flex-direction: column;
        }
        .spec-label {
          font-size: 0.65rem;
          font-family: var(--font-mono);
          color: var(--color-steel-blue);
          letter-spacing: 0.06em;
        }
        .spec-value {
          font-size: 0.8125rem;
          color: var(--color-graphite);
          margin-top: 0.15rem;
        }
        .machinery-frame-footer {
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .footer-legend strong {
          display: block;
          font-size: 0.875rem;
          color: var(--color-graphite);
        }
        .footer-legend span {
          display: block;
          font-size: 0.75rem;
          color: #647887;
          margin-top: 0.15rem;
        }

        /* Stage Navigator */
        .stage-selector-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .stage-nav-pill {
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-subtle);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-xs);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }
        .stage-nav-pill:hover {
          border-color: var(--color-graphite);
          background-color: #FFFFFF;
        }
        .stage-nav-pill.active {
          background-color: var(--color-graphite);
          border-color: var(--color-graphite);
          color: #FFFFFF;
        }
        .stage-nav-num {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-muted-bronze);
        }
        .stage-nav-pill.active .stage-nav-num {
          color: #D6BC96;
        }
        .stage-nav-name {
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 700;
        }
        .stage-active-panel {
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2.5rem;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        .stage-panel-title {
          font-size: 1.75rem;
          margin: 0.4rem 0 0.25rem;
        }
        .stage-panel-focus {
          font-size: 0.8125rem;
          color: var(--color-muted-bronze);
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
        .stage-panel-desc {
          font-size: 1rem;
          line-height: 1.65;
          color: #4D606E;
          margin-bottom: 2rem;
        }
        .stage-products-row {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .stage-product-mini-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .stage-product-mini-card:hover {
          border-color: var(--color-muted-bronze);
          box-shadow: var(--shadow-card);
        }
        .mini-card-thumb {
          width: 56px;
          height: 56px;
          background: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mini-card-thumb img {
          max-height: 100%;
          width: auto;
          object-fit: contain;
        }
        .mini-card-info {
          flex-grow: 1;
        }
        .mini-card-code {
          font-size: 0.6875rem;
          color: var(--color-steel-blue);
          display: block;
        }
        .mini-card-name {
          font-size: 0.9375rem;
          color: var(--color-graphite);
          display: block;
        }
        .mini-card-tagline {
          font-size: 0.775rem;
          color: #647887;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 280px;
        }
        .mini-card-arrow {
          color: var(--color-steel-blue);
          flex-shrink: 0;
          transition: transform var(--transition-fast), color var(--transition-fast);
        }
        .stage-product-mini-card:hover .mini-card-arrow {
          transform: translate(2px, -2px);
          color: var(--color-muted-bronze);
        }

        /* Flagship Spotlight */
        .flagship-spotlight-box {
          position: relative;
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 3.5rem;
          box-shadow: var(--shadow-card);
        }
        .flagship-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4rem;
          align-items: center;
        }
        .flagship-image-card {
          position: relative;
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          padding: 2.5rem 2rem 1.5rem;
        }
        .flagship-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background-color: var(--color-graphite);
          color: #FFFFFF;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-xs);
        }
        .flagship-hero-img {
          width: 100%;
          max-height: 360px;
          object-fit: contain;
        }
        .flagship-caption-row {
          margin-top: 1.5rem;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-hairline);
          display: flex;
          justify-content: space-between;
          font-size: 0.6875rem;
          color: var(--color-steel-blue);
        }
        .flagship-meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          color: var(--color-steel-blue);
          margin-bottom: 0.75rem;
        }
        .flagship-title {
          font-size: clamp(2.2rem, 3.5vw, 3rem);
          margin-bottom: 0.35rem;
          line-height: 1.12;
        }
        .flagship-subtitle {
          font-size: 1.15rem;
          font-weight: 600;
          color: #5C7080;
          margin-bottom: 1.25rem;
          line-height: 1.45;
        }
        .flagship-text {
          font-size: 1rem;
          line-height: 1.65;
          color: #384A59;
          margin-bottom: 2rem;
        }
        .flagship-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 2.25rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-hairline);
        }
        .flagship-feat-item {
          display: flex;
          flex-direction: column;
        }
        .feat-val {
          font-size: 1.25rem;
          color: var(--color-graphite);
        }
        .feat-lbl {
          font-size: 0.775rem;
          color: #647887;
          margin-top: 0.2rem;
        }
        .flagship-action-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Heritage Editorial Section (Architectural Precision Presentation) */
        .heritage-editorial-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4.5rem;
          align-items: start;
        }
        .heritage-main-frame {
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 1rem;
          box-shadow: var(--shadow-card);
        }
        .heritage-facility-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-xs);
          background-color: var(--color-warm-ivory);
        }
        .heritage-facility-img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          display: block;
        }
        .facility-badge-strip {
          position: absolute;
          bottom: 0.75rem;
          left: 0.75rem;
          background: rgba(20, 29, 36, 0.9);
          backdrop-filter: blur(6px);
          color: #FFFFFF;
          font-size: 0.6875rem;
          letter-spacing: 0.05em;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-xs);
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .facility-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-precision-green);
          box-shadow: 0 0 0 2px rgba(41, 122, 88, 0.4);
        }
        .heritage-diptych-row {
          display: grid;
          grid-template-columns: 145px 1fr;
          gap: 1rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-hairline);
        }
        .heritage-craft-thumb {
          position: relative;
          height: 120px;
          border-radius: var(--radius-xs);
          overflow: hidden;
          border: 1px solid var(--border-hairline);
          background: var(--color-warm-ivory);
        }
        .craft-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
        }
        .craft-tag {
          position: absolute;
          top: 8px;
          left: 8px;
          background: rgba(20, 29, 36, 0.82);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          color: #FFFFFF;
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-xs);
          border: 1px solid rgba(255, 255, 255, 0.16);
          line-height: 1;
        }
        .heritage-telemetry-block {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem 1rem;
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-xs);
          align-content: center;
        }
        .telemetry-item {
          display: flex;
          flex-direction: column;
        }
        .tel-label {
          font-size: 0.625rem;
          color: var(--color-steel-blue);
          letter-spacing: 0.06em;
        }
        .tel-val {
          font-size: 0.8125rem;
          color: var(--color-graphite);
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        .tel-val.text-precision {
          color: var(--color-precision-green);
        }
        .heritage-main-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }
        .heritage-lead-para {
          font-size: 1.15rem;
          line-height: 1.65;
          color: #273642;
          margin-bottom: 1.25rem;
        }
        .heritage-sub-para {
          font-size: 0.975rem;
          line-height: 1.65;
          color: #384A59;
          margin-bottom: 1.75rem;
        }
        .heritage-pillars-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 2.25rem;
        }
        .pillar-credential-box {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-xs);
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }
        .pillar-credential-box:hover {
          border-color: var(--color-muted-bronze);
          background-color: #FAF9F6;
        }
        .pillar-index-badge {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-muted-bronze);
          background: rgba(164, 130, 86, 0.12);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-xs);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .pillar-text-group h4 {
          font-size: 0.975rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin-bottom: 0.2rem;
          line-height: 1.3;
        }
        .pillar-text-group p {
          font-size: 0.85rem;
          color: #4D606E;
          line-height: 1.5;
          margin: 0;
        }
        .heritage-cta-strip {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px solid var(--border-hairline);
        }
        .acimit-cert-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          padding: 0.5rem 0.85rem;
          border-radius: var(--radius-xs);
        }
        .acimit-logo-badge {
          height: 28px;
          width: auto;
          object-fit: contain;
        }
        .acimit-cert-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        .acimit-cert-text .cert-org {
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--color-graphite);
          letter-spacing: 0.04em;
        }
        .acimit-cert-text .cert-origin {
          font-size: 0.5625rem;
          color: var(--color-steel-blue);
          letter-spacing: 0.06em;
        }

        /* Products Section Header & Tabs */
        .products-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .product-filter-tabs {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .filter-tab {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 0.55rem 1rem;
          border-radius: var(--radius-xs);
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 600;
          color: #4D606E;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-tab:hover {
          border-color: var(--color-graphite);
          color: var(--color-graphite);
        }
        .filter-tab.active {
          background-color: var(--color-graphite);
          border-color: var(--color-graphite);
          color: #FFFFFF;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .products-bottom-bar {
          margin-top: 3rem;
          padding: 1.25rem 2rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--color-steel-blue);
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* Engineering Expertise Section */
        .expertise-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4rem;
          align-items: center;
        }
        .expertise-pillars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .expertise-pillar-card {
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.5rem;
          border-radius: var(--radius-xs);
        }
        .pillar-num {
          font-size: 0.8125rem;
          font-weight: 800;
          color: var(--color-muted-bronze);
          margin-bottom: 0.5rem;
        }
        .expertise-card-highlight {
          position: relative;
          background-color: var(--surface-dark-card);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-sm);
          padding: 2.75rem 2.5rem;
          box-shadow: var(--shadow-elevated);
        }
        .highlight-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #D6BC96;
        }
        .expertise-stat-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.775rem;
          color: #8E9EA9;
          margin-top: 0.35rem;
        }
        .quote-source {
          display: block;
          margin-top: 0.5rem;
          color: #D6BC96;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
        }

        /* Global Presence */
        .global-presence-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .region-summary-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
        }
        .region-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-hairline);
        }
        .region-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-graphite);
        }
        .region-country-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .region-country-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          font-size: 0.8125rem;
        }
        .country-info strong {
          display: block;
          color: var(--color-graphite);
        }
        .country-city {
          display: block;
          font-size: 0.725rem;
          color: #647887;
        }
        .country-role-tag {
          font-size: 0.6875rem;
          font-weight: 600;
          background-color: var(--color-warm-ivory-deep);
          color: var(--color-graphite);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-xs);
          flex-shrink: 0;
        }
        .global-support-banner {
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2.25rem 2.5rem;
        }
        .support-banner-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .support-banner-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* News Cards */
        .news-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .news-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
        }
        .news-card:hover {
          border-color: var(--color-muted-bronze);
          box-shadow: var(--shadow-card);
        }
        .news-card-media {
          position: relative;
          height: 220px;
          background-color: #FFFFFF;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-hairline);
        }
        .news-card-img {
          max-width: 100%;
          max-height: 175px;
          width: auto;
          height: auto;
          object-fit: contain;
          transition: transform var(--transition-smooth);
        }
        .news-card:hover .news-card-img {
          transform: scale(1.03);
        }
        .news-type-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background-color: rgba(20, 29, 36, 0.92);
          color: #FFFFFF;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-xs);
          z-index: 2;
        }
        .news-card-content {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .news-date-location {
          font-size: 0.725rem;
          color: #647887;
          margin-bottom: 0.5rem;
          display: flex;
          gap: 0.35rem;
        }
        .news-card-title {
          font-size: 1.15rem;
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }
        .news-card-excerpt {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #4D606E;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .news-card-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-hairline);
        }

        /* Enquiry CTA */
        .enquiry-cta-section {
          text-align: center;
        }
        .enquiry-cta-box {
          max-width: 840px;
          margin: 0 auto;
        }
        .enquiry-cta-headline {
          color: #FFFFFF;
          font-size: clamp(2.2rem, 4vw, 3.25rem);
          margin-bottom: 1.25rem;
          line-height: 1.15;
        }
        .enquiry-cta-lead {
          color: #B2C0CB;
          font-size: 1.2rem;
          line-height: 1.65;
          margin-bottom: 2.5rem;
        }
        .enquiry-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .enquiry-contact-chips {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          font-size: 0.8125rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-dark-hairline);
        }
        .chip-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .chip-label {
          color: #8E9EA9;
        }
        .chip-val {
          color: #FFFFFF;
          font-weight: 600;
        }
        .chip-val:hover {
          color: var(--color-muted-bronze);
        }
        .chip-sep {
          color: #445766;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .stage-selector-bar {
            grid-template-columns: 1fr 1fr;
          }
          .stage-active-panel {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .flagship-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .heritage-editorial-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .products-grid {
            grid-template-columns: 1fr 1fr;
          }
          .expertise-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .global-presence-grid {
            grid-template-columns: 1fr 1fr;
          }
          .news-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding-top: 2.25rem;
            padding-bottom: 3rem;
          }
          .hero-headline {
            font-size: clamp(1.85rem, 6.2vw, 3rem);
            line-height: 1.12;
            margin-bottom: 1.15rem;
          }
          .hero-lead {
            font-size: 1.05rem;
            line-height: 1.55;
            margin-bottom: 1.5rem;
          }
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
            margin-bottom: 2rem;
          }
          .hero-cta-group .btn {
            width: 100%;
            justify-content: center;
          }
          .hero-metrics-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            padding-top: 1.5rem;
          }
          .metric-val {
            font-size: 1.35rem;
          }
          .machinery-hero-frame {
            padding: 1.25rem 1rem;
          }
          .machinery-img-wrap {
            min-height: 220px;
            padding: 1rem;
          }
          .hero-machine-img {
            max-height: 190px;
          }
          .machinery-specs-overlay {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            padding: 0.75rem;
          }
          .stage-selector-bar {
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
          }
          .stage-nav-pill {
            padding: 0.65rem 0.75rem;
          }
          .stage-nav-name {
            font-size: 0.8125rem;
          }
          .stage-active-panel {
            padding: 1.5rem 1.15rem;
          }
          .mini-card-tagline {
            white-space: normal;
          }
          .product-filter-tabs {
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 0.5rem;
            width: 100%;
            -webkit-overflow-scrolling: touch;
          }
          .filter-tab {
            white-space: nowrap;
            flex-shrink: 0;
            min-height: 42px;
          }
          .products-grid {
            grid-template-columns: 1fr;
          }
          .global-presence-grid {
            grid-template-columns: 1fr;
          }
          .expertise-pillars-grid {
            grid-template-columns: 1fr;
          }
          .flagship-spotlight-box {
            padding: 1.5rem 1.15rem;
          }
          .flagship-features-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .heritage-diptych-row {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .heritage-facility-img {
            height: 220px;
            aspect-ratio: 16 / 10;
            object-fit: cover;
          }
          .heritage-craft-thumb {
            height: 140px;
            aspect-ratio: 16 / 9;
            object-fit: cover;
          }
          .heritage-telemetry-block {
            grid-template-columns: 1fr;
            gap: 0.65rem;
            padding: 0.9rem 1rem;
          }
          .telemetry-item {
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
            gap: 0.5rem;
            padding-bottom: 0.45rem;
            border-bottom: 1px solid rgba(20, 29, 36, 0.08);
          }
          .telemetry-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .tel-label {
            font-size: 0.6875rem;
            flex-shrink: 0;
          }
          .tel-val {
            font-size: 0.8125rem;
            text-align: right;
            white-space: nowrap;
          }
          .heritage-cta-strip {
            flex-direction: column;
            align-items: stretch;
            gap: 0.85rem;
          }
          .heritage-cta-strip .btn {
            width: 100%;
            justify-content: center;
          }
          .enquiry-cta-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 0.85rem;
            width: 100%;
          }
          .enquiry-cta-actions .btn {
            width: 100%;
            justify-content: center;
          }
          .enquiry-contact-chips {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }
          .chip-sep {
            display: none;
          }
        }

        @media (max-width: 380px) {
          .hero-metrics-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .stage-selector-bar {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
