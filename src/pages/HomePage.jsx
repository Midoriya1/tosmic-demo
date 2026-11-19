import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Phone, Mail, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

  // Spinning Mill Process Pipeline
  const processStages = [
    {
      id: 'stage-raw',
      number: '01',
      name: 'Raw Cotton & Stickiness',
      subtitle: 'Entomological Honeydew Detection',
      image: '/assets/cotton-sugar-tms54.jpg',
      problem: 'Insect honeydew sugars liquefy under mill humidity, sticking to card clothing, rubber cots, and ring travelers, causing catastrophic yarn breakage and downtime.',
      solution: 'The TMS54 chemical colorimetric test detects and grades stickiness in 15 minutes prior to bale opening, allowing mills to blend or neutralize sticky cotton before it enters the blowroom.',
      instruments: ['cotton-sugar-test-tms54', 'glucosil-sugar-solution-tms55']
    },
    {
      id: 'stage-card',
      number: '02',
      name: 'Carding Preparation & Impurities',
      subtitle: 'Sliver Regulation & Nep Diagnostics',
      image: '/assets/tms60-nep-trash.jpg',
      problem: 'Variations in carding web density and undetected trash or neps carry forward into drawframes, permanently degrading yarn evenness and surface appearance.',
      solution: 'TMS25-R2C card autolevelling reduces 1-meter sliver count CV% by up to 70%, while TMS60 optical sensors classify neps, seed-coat fragments, and dust in real time.',
      instruments: ['card-autoleveller-tms25-r2c', 'tms60-nep-trash']
    },
    {
      id: 'stage-draw',
      number: '03',
      name: 'Drafting & Drawing Regulation',
      subtitle: 'High-Speed Kinematic Autolevelling',
      image: '/assets/card-autoleveller-diagram.png',
      problem: 'High delivery speeds up to 1,000 m/min amplify drafting errors. Gear differential systems wear out and create long-period periodic mass variations.',
      solution: 'Direct digital servo autolevelling for cotton drawframes and wool/acrylic gill boxes replaces mechanical differentials with high-response digital kinematic control.',
      instruments: ['drawframe-autoleveller-tms25-r2d', 'gill-box-autoleveller', 'sliver-quality-monitor-tms25-qm2']
    },
    {
      id: 'stage-yarn',
      number: '04',
      name: 'Finished Yarn Metrology',
      subtitle: 'Evenness, Tensile Strength & Count',
      image: '/assets/easy-evenness-tester.jpg',
      problem: 'Quality certifications require rigorous compliance with international standards (ISO 2062, ASTM D2256) without proprietary testing bench vendor lock-in.',
      solution: 'Comprehensive laboratory instruments operating on standard PC platforms with 3-click test simplicity, automatic inter-machine database synchronization, and decades of reliable service.',
      instruments: ['easy-evenness-tester', 'tensotester-3', 'easyf-filament', 'tms45-count-analyser']
    }
  ];

  const currentStage = processStages.find(s => s.id === activeProcessStage) || processStages[3];
  const stageProducts = productsData.filter(p => currentStage.instruments.includes(p.slug));

  const filteredProducts = activeCategoryFilter === 'all'
    ? productsData.slice(0, 6)
    : productsData.filter(p => p.categorySlug === activeCategoryFilter);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Subtle Hero Entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-dateline',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
      )
      .fromTo('.hero-headline',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo('.hero-lead',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo('.hero-cta-row',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.45'
      )
      .fromTo('.hero-image-canvas',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
        0.2
      );

      // 2. Editorial Scroll Reveals
      gsap.fromTo('.statement-text',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.statement-section',
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.flagship-feature-grid',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.flagship-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="homepage-editorial" ref={homeRef}>
      
      {/* 1. HERO — ITALIAN INDUSTRIAL EDITORIAL */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-header-block">
            <span className="hero-dateline font-mono">
              SAVOGNA D’ISONZO (GO), ITALY · EST. 1956 · ACIMIT MEMBER
            </span>

            <h1 className="hero-headline">
              Seven Decades of Precision Textile Metrology.
            </h1>

            <p className="hero-lead">
              Tomsic designs and manufactures high-precision textile laboratory testing instruments, spinning autolevellers, and raw cotton sugar diagnostics. 100% engineered in Savogna d'Isonzo on open, non-proprietary architecture.
            </p>

            <div className="hero-cta-row">
              <Link to="/solutions" className="btn btn-primary">
                <span>Explore Engineering Solutions</span>
                <ArrowRight size={15} />
              </Link>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Sales')}
              >
                <span>Request Factory Consultation</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          {/* Large Hero Machinery Centerpiece */}
          <div className="hero-image-canvas">
            <div className="hero-image-wrap">
              <img
                src="/assets/hero-machine.webp"
                alt="Tomsic TMS60 Nep and Trash Testing Metrology Instrument"
                className="hero-machinery-img"
                loading="eager"
              />
            </div>
            <div className="hero-image-caption font-mono">
              <span>TMS60 NEP & TRASH METROLOGY SYSTEM</span>
              <span className="caption-dot">/</span>
              <span>100% IN-HOUSE ITALIAN SYNTHESIS</span>
              <span className="caption-dot">/</span>
              <Link to="/products/tms60-nep-trash" className="caption-link">
                View Datasheet <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATEMENT OF CREDIBILITY & ITALIAN SYNTHESIS */}
      <section className="statement-section border-top-hairline">
        <div className="container">
          <div className="statement-grid">
            <div className="statement-left">
              <span className="badge-overline accent">OUR CORE CONVICTION</span>
              <blockquote className="statement-quote">
                "We reject proprietary obsolescence. Every electronic board, mechanical assembly, and measurement software algorithm is engineered and synthesized under one Italian roof."
              </blockquote>
            </div>

            <div className="statement-right">
              <p className="statement-desc">
                Founded in 1956 by Mr. Carlo Tomsic, our enterprise began with electronic systems and control engineering for legendary drawframe specialist VOUK. Over four decades of specialized collaboration, we accumulated singular mastery in autolevelling kinematics and textile metrology.
              </p>
              <p className="statement-desc">
                Today, managed by the second generation—Mr. Silvan Tomsic (President) and Mr. Ladi Tomsic (Vice-President)—we operate from our modern complex in Savogna d'Isonzo. Every Tomsic system runs on standard commercial computer hardware and open Windows platforms, ensuring decades of reliable service without forced proprietary software fees.
              </p>

              <div className="statement-meta-row font-mono">
                <div className="meta-fact">
                  <span className="fact-num">1956</span>
                  <span className="fact-label">Founding Year · Gorizia</span>
                </div>
                <div className="meta-fact">
                  <span className="fact-num">2003</span>
                  <span className="fact-label">Savogna d’Isonzo Expansion</span>
                </div>
                <div className="meta-fact">
                  <span className="fact-num">30+</span>
                  <span className="fact-label">Export Countries Supplied</span>
                </div>
              </div>
            </div>
          </div>

          {/* Diptych: Factory & Italian Craft Photography */}
          <div className="statement-diptych">
            <div className="diptych-card">
              <img
                src="/assets/tomsic-facility.jpg"
                alt="Tomsic industrial engineering plant in Savogna d'Isonzo (GO), Italy"
                className="diptych-img"
                loading="lazy"
              />
              <div className="diptych-caption font-mono">
                <span>HEADQUARTERS & MANUFACTURING COMPLEX · SAVOGNA D’ISONZO (GO), ITALY</span>
              </div>
            </div>

            <div className="diptych-card">
              <img
                src="/assets/italian-heritage.jpg"
                alt="Italian Spun Yarn Heritage cones"
                className="diptych-img"
                loading="lazy"
              />
              <div className="diptych-caption font-mono">
                <span>SEVEN DECADES OF TEXTILE METROLOGY PARTNERSHIP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PRODUCTION JOURNEY (Interactive Metrology Pipeline) */}
      <section className="section bg-white border-top-hairline">
        <div className="container">
          <div className="section-header-editorial">
            <span className="badge-overline">PROCESS-ORIENTED METROLOGY</span>
            <h2 className="section-title-editorial">Quality Control from Raw Fibre to Spun Yarn.</h2>
            <p className="section-lead-editorial">
              Each production stage requires dedicated physics, sensors, and regulation. Select a phase below to inspect the metrological challenge and Tomsic's engineering solution.
            </p>
          </div>

          {/* Clean Editorial Stage Selector */}
          <div className="process-pipeline-nav">
            {processStages.map(stage => (
              <button
                key={stage.id}
                type="button"
                className={`pipeline-nav-btn ${activeProcessStage === stage.id ? 'active' : ''}`}
                onClick={() => setActiveProcessStage(stage.id)}
              >
                <span className="btn-stage-num font-mono">{stage.number}</span>
                <span className="btn-stage-name">{stage.name}</span>
              </button>
            ))}
          </div>

          {/* Active Stage Editorial Spread */}
          <div className="stage-editorial-spread">
            <div className="stage-text-block">
              <span className="stage-overline font-mono">PHASE {currentStage.number} · {currentStage.subtitle}</span>
              <h3 className="stage-heading">{currentStage.name}</h3>

              <div className="stage-editorial-comparison">
                <div className="comparison-col">
                  <h4 className="comparison-title font-mono">THE METROLOGICAL RISK</h4>
                  <p className="comparison-text">{currentStage.problem}</p>
                </div>

                <div className="comparison-col">
                  <h4 className="comparison-title font-mono">THE TOMSIC SYNTHESIS</h4>
                  <p className="comparison-text">{currentStage.solution}</p>
                </div>
              </div>

              <div className="stage-instruments-group">
                <span className="instruments-label font-mono">DEDICATED SYSTEMS ({stageProducts.length})</span>
                <div className="stage-instruments-grid">
                  {stageProducts.map(p => (
                    <Link key={p.slug} to={`/products/${p.slug}`} className="stage-product-card">
                      <div className="prod-thumb">
                        <img src={p.primaryImage} alt={p.name} />
                      </div>
                      <div className="prod-details">
                        <span className="prod-code font-mono">{p.code}</span>
                        <strong className="prod-name">{p.name}</strong>
                      </div>
                      <ArrowUpRight size={15} className="prod-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="stage-image-block">
              <img
                src={currentStage.image}
                alt={currentStage.name}
                className="stage-large-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLAGSHIP PRODUCT — "EASY" EVENNESS TESTER */}
      <section className="section bg-warm-ivory border-top-hairline flagship-section">
        <div className="container">
          <div className="flagship-feature-grid">
            <div className="flagship-image-col">
              <img
                src="/assets/easy-evenness-tester.jpg"
                alt="Tomsic easy Evenness Tester System"
                className="flagship-img"
                loading="lazy"
              />
              <div className="flagship-img-meta font-mono">
                <span>DUAL CAPACITIVE & OPTICAL METROLOGY</span>
                <span>24-POSITION AUTOCHANGER</span>
              </div>
            </div>

            <div className="flagship-content-col">
              <span className="badge-overline accent">FLAGSHIP LABORATORY BENCH</span>
              <h2 className="flagship-headline">“easy” Evenness Tester</h2>
              <p className="flagship-tagline">
                World-standard mass variation and spectrogram testing for yarn, roving, and sliver.
              </p>

              <p className="flagship-body">
                Designed to replace cumbersome, proprietary testing benches with an extractable modular architecture, the "easy" Evenness Tester operates on standard commercial PCs using Microsoft .NET technology. Tested and approved by world-renowned textile manufacturers including Ermenegildo Zegna and Botto Giuseppe.
              </p>

              {/* 4 Clean Editorial Metrics */}
              <div className="flagship-specs-matrix">
                <div className="flagship-spec-cell">
                  <strong className="spec-big font-mono">3 Clicks</strong>
                  <span className="spec-sub">Complete test protocol execution</span>
                </div>
                <div className="flagship-spec-cell">
                  <strong className="spec-big font-mono">400 m/min</strong>
                  <span className="spec-sub">Continuous precision testing speed</span>
                </div>
                <div className="flagship-spec-cell">
                  <strong className="spec-big font-mono">Link Job</strong>
                  <span className="spec-sub">Automatic count sync with TMS45</span>
                </div>
                <div className="flagship-spec-cell">
                  <strong className="spec-big font-mono">25 Years</strong>
                  <span className="spec-sub">Relational database history & Excel export</span>
                </div>
              </div>

              <div className="flagship-actions-row">
                <Link to="/products/easy-evenness-tester" className="btn btn-primary">
                  <span>Complete Technical Specifications</span>
                  <ArrowRight size={15} />
                </Link>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('easy Evenness Tester', 'Sales')}
                >
                  <span>Request Factory Quotation</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE THREE SPECIALIZED DIVISIONS */}
      <section className="section bg-white border-top-hairline">
        <div className="container">
          <div className="section-header-editorial">
            <span className="badge-overline">SPECIALIZED DIVISIONS</span>
            <h2 className="section-title-editorial">Three Pillars of Industrial Competence.</h2>
            <p className="section-lead-editorial">
              Each division provides dedicated instrumentation engineered for specific mill operations.
            </p>
          </div>

          <div className="divisions-editorial-grid">
            {/* Division 1: Laboratory */}
            <article className="division-editorial-card">
              <div className="div-media">
                <img
                  src="/assets/tensotester3-overview.jpg"
                  alt="Laboratory Testing Solutions"
                  className="div-img"
                  loading="lazy"
                />
              </div>
              <div className="div-body">
                <span className="div-num font-mono">01</span>
                <h3 className="div-title">Laboratory Testing Solutions</h3>
                <p className="div-desc">
                  Evenness testers, tensile strength meters, and count analyzers compatible with ISO 2062 and ASTM standards. Operates on standard Windows PC platforms.
                </p>
                <Link to="/solutions/laboratory" className="div-link">
                  <span>Explore Laboratory Division</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* Division 2: Spinning */}
            <article className="division-editorial-card">
              <div className="div-media">
                <img
                  src="/assets/card-autoleveller-tms25.jpg"
                  alt="Spinning Mill Automation"
                  className="div-img"
                  loading="lazy"
                />
              </div>
              <div className="div-body">
                <span className="div-num font-mono">02</span>
                <h3 className="div-title">Spinning Automation</h3>
                <p className="div-desc">
                  Closed-loop digital drafting and autoleveller retrofit kits for carding machines, cotton drawframes, and wool/acrylic gill boxes.
                </p>
                <Link to="/solutions/spinning" className="div-link">
                  <span>Explore Spinning Division</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* Division 3: Sugar */}
            <article className="division-editorial-card">
              <div className="div-media">
                <img
                  src="/assets/cotton-sugar-tms54.jpg"
                  alt="Sugar Contamination Diagnostics"
                  className="div-img"
                  loading="lazy"
                />
              </div>
              <div className="div-body">
                <span className="div-num font-mono">03</span>
                <h3 className="div-title">Sugar Contamination Diagnostics</h3>
                <p className="div-desc">
                  Chemical colorimetric testing instruments and Glucosil neutralizing solutions to detect and treat sticky honeydew cotton in 15 minutes.
                </p>
                <Link to="/solutions/sugar" className="div-link">
                  <span>Explore Sugar Division</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING PHILOSOPHY & LONGEVITY (Graphite Depth) */}
      <section className="section bg-graphite text-white border-top-hairline">
        <div className="container">
          <div className="philosophy-layout">
            <div className="philosophy-header">
              <span className="badge-overline dark">THE TOMSIC PHILOSOPHY</span>
              <h2 className="philosophy-headline">
                Rejecting Planned Obsolescence in Industrial Metrology.
              </h2>
              <p className="philosophy-lead">
                Most testing instrument vendors lock spinning mills into proprietary bus architectures and expensive recurring software contracts. We engineer our systems on standard commercial PC hardware with open Microsoft .NET architecture. If a computer component fails after 15 years, it can be replaced locally—without proprietary technician dependencies.
              </p>
            </div>

            <div className="philosophy-pillars-row">
              <div className="phil-pillar">
                <span className="phil-num font-mono">01</span>
                <h4 className="phil-title">Open Architecture</h4>
                <p className="phil-desc">Standard industrial PC motherboards and commercial Windows platforms ensure components are serviceable anywhere on earth.</p>
              </div>
              <div className="phil-pillar">
                <span className="phil-num font-mono">02</span>
                <h4 className="phil-title">Link Job Synchronization</h4>
                <p className="phil-desc">Testing benches share a unified relational SQL database, eliminating transcription errors across 25 years of stored mill history.</p>
              </div>
              <div className="phil-pillar">
                <span className="phil-num font-mono">03</span>
                <h4 className="phil-title">Direct Factory Accountability</h4>
                <p className="phil-desc">Direct access to our engineering team in Savogna d'Isonzo. No bureaucratic call centers or distributor delays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DISPATCHES & INTERNATIONAL EXHIBITIONS */}
      <section className="section bg-white border-top-hairline">
        <div className="container">
          <div className="section-header-editorial">
            <div className="flex justify-between items-end flex-wrap gap-4">
              <div>
                <span className="badge-overline">DISPATCHES & TRADE FAIRS</span>
                <h2 className="section-title-editorial">News & International Exhibitions</h2>
                <p className="section-lead-editorial">
                  Meet Tomsic engineers at premier international textile technology events.
                </p>
              </div>
              <Link to="/news" className="editorial-action-link">
                <span>All Announcements & Events</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="news-editorial-grid">
            {newsData.slice(0, 3).map(item => (
              <article key={item.slug} className="news-editorial-card">
                <div className="news-img-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="news-card-img"
                    loading="lazy"
                  />
                  <span className="news-type-tag font-mono">{item.type}</span>
                </div>

                <div className="news-body-box">
                  <div className="news-meta-line font-mono">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>

                  <h3 className="news-card-title">
                    <Link to="/news">{item.title}</Link>
                  </h3>

                  <p className="news-card-excerpt">{item.excerpt}</p>

                  <Link to="/news" className="news-card-cta">
                    <span>Read Full Dispatch</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONFIDENT FACTORY ENQUIRY */}
      <section className="section bg-warm-ivory border-top-hairline">
        <div className="container">
          <div className="enquiry-editorial-box">
            <div className="enquiry-text-col">
              <span className="badge-overline accent">START A TECHNICAL DIALOGUE</span>
              <h2 className="enquiry-headline">
                Connect Directly with Factory Engineers in Savogna d'Isonzo.
              </h2>
              <p className="enquiry-lead">
                Whether you are equipping a modern textile testing laboratory, modernizing carding autolevellers, or addressing sticky cotton challenges—our Italian engineering team is ready to assist.
              </p>

              <div className="enquiry-actions-group">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Sales')}
                >
                  <span>Request Factory Quotation</span>
                  <ArrowUpRight size={15} />
                </button>

                <Link to="/contact" className="btn btn-secondary">
                  <span>Worldwide Agent Directory</span>
                </Link>
              </div>
            </div>

            <div className="enquiry-contacts-col font-mono">
              <div className="contact-item">
                <span className="contact-label">COMMERCIAL DESK</span>
                <a href="mailto:sales@tomsic.it" className="contact-link">sales@tomsic.it</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">TECHNICAL AFTER-SALES</span>
                <a href="mailto:service@tomsic.it" className="contact-link">service@tomsic.it</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">FACTORY SWITCHBOARD</span>
                <a href="tel:+390481882320" className="contact-link tabular-nums">+39 (0481) 882320</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">FACILITY LOCATION</span>
                <span className="contact-text">via Malnisce, 3/B · 34070 Savogna d’Isonzo (GO), Italy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .homepage-editorial {
          width: 100%;
          overflow-x: hidden;
        }

        /* 1. HERO EDITORIAL */
        .hero-editorial {
          padding-top: 4.5rem;
          padding-bottom: 5rem;
          background-color: var(--color-warm-ivory);
        }
        .hero-header-block {
          max-width: 920px;
          margin-bottom: 3.5rem;
        }
        .hero-dateline {
          display: block;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--color-steel-blue);
          margin-bottom: 1.25rem;
        }
        .hero-headline {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5.5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--color-graphite);
          margin-bottom: 1.5rem;
          text-wrap: balance;
        }
        .hero-lead {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          line-height: 1.6;
          color: #3C4A54;
          max-width: 68ch;
          margin-bottom: 2.25rem;
        }
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        /* Machinery Hero Canvas */
        .hero-image-canvas {
          margin-top: 2rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 2.5rem;
          box-shadow: var(--shadow-subtle);
        }
        .hero-image-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 380px;
          max-height: 520px;
          padding: 1.5rem;
        }
        .hero-machinery-img {
          max-width: 100%;
          max-height: 480px;
          height: auto;
          object-fit: contain;
        }
        .hero-image-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.5rem;
          margin-top: 1rem;
          border-top: 1px solid var(--border-hairline);
          font-size: 0.75rem;
          color: var(--color-steel-blue);
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .caption-dot {
          color: var(--border-subtle);
        }
        .caption-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--color-accent);
          font-weight: 600;
        }

        /* 2. STATEMENT SECTION */
        .statement-section {
          padding-top: 6rem;
          padding-bottom: 6rem;
          background-color: var(--color-white);
        }
        .statement-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4.5rem;
          align-items: start;
          margin-bottom: 4.5rem;
        }
        .statement-quote {
          font-family: var(--font-heading);
          font-size: clamp(1.85rem, 3.2vw, 2.75rem);
          line-height: 1.18;
          letter-spacing: -0.025em;
          color: var(--color-graphite);
          font-weight: 700;
          text-wrap: balance;
        }
        .statement-desc {
          font-size: 1.05rem;
          line-height: 1.68;
          color: #4A5863;
          margin-bottom: 1.25rem;
        }
        .statement-meta-row {
          display: flex;
          gap: 2.5rem;
          padding-top: 1.5rem;
          margin-top: 1.5rem;
          border-top: 1px solid var(--border-hairline);
          flex-wrap: wrap;
        }
        .meta-fact {
          display: flex;
          flex-direction: column;
        }
        .fact-num {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-graphite);
          line-height: 1.1;
        }
        .fact-label {
          font-size: 0.75rem;
          color: var(--color-steel-blue);
          margin-top: 0.25rem;
        }

        .statement-diptych {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
        }
        .diptych-card {
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          overflow: hidden;
        }
        .diptych-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          display: block;
        }
        .diptych-caption {
          padding: 1rem 1.25rem;
          font-size: 0.725rem;
          color: var(--color-steel-blue);
          background-color: #FFFFFF;
          border-top: 1px solid var(--border-hairline);
        }

        /* 3. PROCESS PIPELINE SECTION */
        .section-header-editorial {
          margin-bottom: 3.5rem;
          max-width: 840px;
        }
        .section-title-editorial {
          font-size: clamp(2rem, 3.5vw, 2.85rem);
          font-weight: 700;
          color: var(--color-graphite);
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0.5rem 0 0.85rem;
          text-wrap: balance;
        }
        .section-lead-editorial {
          font-size: 1.125rem;
          color: #4D606E;
          line-height: 1.6;
        }

        .process-pipeline-nav {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          background-color: var(--color-warm-ivory);
          margin-bottom: 2.5rem;
          overflow: hidden;
        }
        .pipeline-nav-btn {
          padding: 1.25rem 1.5rem;
          text-align: left;
          background: transparent;
          border: none;
          border-right: 1px solid var(--border-hairline);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          transition: background-color var(--transition-fast);
        }
        .pipeline-nav-btn:last-child {
          border-right: none;
        }
        .pipeline-nav-btn:hover {
          background-color: rgba(255, 255, 255, 0.7);
        }
        .pipeline-nav-btn.active {
          background-color: #FFFFFF;
          box-shadow: inset 0 3px 0 var(--color-accent);
        }
        .btn-stage-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-steel-blue);
        }
        .pipeline-nav-btn.active .btn-stage-num {
          color: var(--color-accent);
        }
        .btn-stage-name {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-graphite);
          line-height: 1.3;
        }

        .stage-editorial-spread {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 3rem;
          align-items: center;
        }
        .stage-overline {
          font-size: 0.75rem;
          color: var(--color-accent);
          letter-spacing: 0.06em;
          display: block;
          margin-bottom: 0.5rem;
        }
        .stage-heading {
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin-bottom: 1.75rem;
        }
        .stage-editorial-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-hairline);
          margin-bottom: 2rem;
        }
        .comparison-title {
          font-size: 0.725rem;
          letter-spacing: 0.08em;
          color: var(--color-steel-blue);
          margin-bottom: 0.5rem;
        }
        .comparison-text {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #3C4A54;
        }
        .instruments-label {
          font-size: 0.725rem;
          color: var(--color-steel-blue);
          display: block;
          margin-bottom: 0.85rem;
        }
        .stage-instruments-grid {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .stage-product-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }
        .stage-product-card:hover {
          background-color: #FFFFFF;
          border-color: var(--color-accent);
        }
        .prod-thumb {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #FFFFFF;
          border-radius: var(--radius-xs);
          padding: 4px;
        }
        .prod-thumb img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .prod-details {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .prod-code {
          font-size: 0.6875rem;
          color: var(--color-steel-blue);
        }
        .prod-name {
          font-size: 0.9375rem;
          color: var(--color-graphite);
        }
        .prod-arrow {
          color: var(--color-steel-blue);
          transition: transform var(--transition-fast), color var(--transition-fast);
        }
        .stage-product-card:hover .prod-arrow {
          color: var(--color-accent);
          transform: translate(2px, -2px);
        }
        .stage-image-block {
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 380px;
        }
        .stage-large-img {
          max-width: 100%;
          max-height: 360px;
          object-fit: contain;
        }

        /* 4. FLAGSHIP SECTION */
        .flagship-feature-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4.5rem;
          align-items: center;
        }
        .flagship-image-col {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 2.5rem;
          box-shadow: var(--shadow-subtle);
        }
        .flagship-img {
          width: 100%;
          height: auto;
          max-height: 460px;
          object-fit: contain;
          display: block;
        }
        .flagship-img-meta {
          display: flex;
          justify-content: space-between;
          padding-top: 1.25rem;
          margin-top: 1.25rem;
          border-top: 1px solid var(--border-hairline);
          font-size: 0.725rem;
          color: var(--color-steel-blue);
        }
        .flagship-headline {
          font-size: clamp(2.25rem, 3.8vw, 3.25rem);
          font-weight: 700;
          color: var(--color-graphite);
          line-height: 1.1;
          margin: 0.5rem 0 0.85rem;
          letter-spacing: -0.025em;
        }
        .flagship-tagline {
          font-size: 1.15rem;
          line-height: 1.5;
          color: #2D3A44;
          font-weight: 550;
          margin-bottom: 1.25rem;
        }
        .flagship-body {
          font-size: 0.975rem;
          line-height: 1.65;
          color: #4D606E;
          margin-bottom: 2rem;
        }
        .flagship-specs-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          padding-top: 1.75rem;
          margin-top: 1.75rem;
          border-top: 1px solid var(--border-hairline);
          margin-bottom: 2.25rem;
        }
        .spec-big {
          display: block;
          font-size: 1.5rem;
          color: var(--color-graphite);
          line-height: 1.1;
        }
        .spec-sub {
          font-size: 0.8125rem;
          color: var(--color-steel-blue);
          line-height: 1.4;
          margin-top: 0.25rem;
          display: block;
        }
        .flagship-actions-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        /* 5. DIVISIONS SECTION */
        .divisions-editorial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .division-editorial-card {
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color var(--transition-fast), transform var(--transition-fast);
        }
        .division-editorial-card:hover {
          border-color: var(--color-accent);
          transform: translateY(-2px);
        }
        .div-media {
          height: 240px;
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .div-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .div-body {
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .div-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
        }
        .div-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin-bottom: 0.85rem;
          line-height: 1.25;
        }
        .div-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #4D606E;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .div-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-graphite);
          transition: color var(--transition-fast);
        }
        .division-editorial-card:hover .div-link {
          color: var(--color-accent);
        }

        /* 6. PHILOSOPHY SECTION */
        .philosophy-layout {
          max-width: 1080px;
        }
        .philosophy-headline {
          font-size: clamp(2.25rem, 4vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.025em;
          margin: 0.75rem 0 1.5rem;
          color: #FFFFFF;
          text-wrap: balance;
        }
        .philosophy-lead {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #A4B2BC;
          max-width: 72ch;
          margin-bottom: 4rem;
        }
        .philosophy-pillars-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border-dark-hairline);
        }
        .phil-num {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-accent);
          display: block;
          margin-bottom: 0.75rem;
        }
        .phil-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.65rem;
        }
        .phil-desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #8E9EA9;
        }

        /* 7. NEWS EDITORIAL */
        .news-editorial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .news-editorial-card {
          background-color: var(--color-warm-ivory);
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .news-img-box {
          position: relative;
          height: 220px;
          background-color: #FFFFFF;
          border-bottom: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .news-card-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .news-type-tag {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background-color: var(--color-graphite);
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.55rem;
          border-radius: var(--radius-xs);
        }
        .news-body-box {
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .news-meta-line {
          font-size: 0.75rem;
          color: var(--color-steel-blue);
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .news-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .news-card-title a:hover {
          color: var(--color-accent);
        }
        .news-card-excerpt {
          font-size: 0.8875rem;
          line-height: 1.58;
          color: #4D606E;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .news-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-graphite);
          transition: color var(--transition-fast);
        }
        .news-card-cta:hover {
          color: var(--color-accent);
        }

        /* 8. ENQUIRY EDITORIAL BOX */
        .enquiry-editorial-box {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4.5rem;
          align-items: center;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 4rem;
          box-shadow: var(--shadow-subtle);
        }
        .enquiry-headline {
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: var(--color-graphite);
          margin: 0.5rem 0 1rem;
        }
        .enquiry-lead {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #4D606E;
          margin-bottom: 2.25rem;
        }
        .enquiry-actions-group {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .enquiry-contacts-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-left: 3rem;
          border-left: 1px solid var(--border-hairline);
        }
        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .contact-label {
          font-size: 0.6875rem;
          color: var(--color-steel-blue);
          letter-spacing: 0.08em;
        }
        .contact-link {
          font-size: 0.9375rem;
          color: var(--color-graphite);
          font-weight: 600;
          transition: color var(--transition-fast);
        }
        .contact-link:hover {
          color: var(--color-accent);
        }
        .contact-text {
          font-size: 0.8125rem;
          color: #4D606E;
          line-height: 1.45;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .statement-grid,
          .stage-editorial-spread,
          .flagship-feature-grid,
          .enquiry-editorial-box {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .statement-diptych {
            grid-template-columns: 1fr;
          }
          .divisions-editorial-grid,
          .news-editorial-grid,
          .philosophy-pillars-row {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .enquiry-contacts-col {
            padding-left: 0;
            border-left: none;
            padding-top: 2rem;
            border-top: 1px solid var(--border-hairline);
          }
        }

        @media (max-width: 768px) {
          .process-pipeline-nav {
            grid-template-columns: 1fr 1fr;
          }
          .stage-editorial-comparison {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .stage-editorial-spread {
            padding: 1.75rem 1.5rem;
          }
          .flagship-image-col {
            padding: 1.5rem;
          }
          .enquiry-editorial-box {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .process-pipeline-nav {
            grid-template-columns: 1fr;
          }
          .hero-cta-row,
          .enquiry-actions-group,
          .flagship-actions-row {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }
          .hero-cta-row .btn,
          .enquiry-actions-group .btn,
          .flagship-actions-row .btn {
            width: 100%;
            justify-content: center;
          }
          .hero-image-canvas {
            padding: 1.5rem 1rem;
          }
          .hero-image-wrap {
            min-height: 240px;
          }
          .statement-meta-row {
            flex-direction: column;
            gap: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}