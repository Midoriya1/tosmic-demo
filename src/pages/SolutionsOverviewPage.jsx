import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FlaskConical, Cpu, Beaker, ArrowUpRight, Filter, ChevronRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { solutionsData } from '../data/solutions';
import { productsData } from '../data/products';

export function SolutionsOverviewPage({ onOpenEnquiry }) {
  const [selectedChallenge, setSelectedChallenge] = useState('all');

  const millChallenges = [
    {
      id: 'all',
      label: 'All Engineering Divisions',
      subtitle: 'Complete Tomsic production & metrology portfolio'
    },
    {
      id: 'unevenness',
      label: 'High Sliver / Yarn Count CV%',
      targetDivision: 'spinning',
      recommended: ['TMS25-R2C Card Autoleveller', 'TMS25-R2D Drawframe Autoleveller', 'easy Evenness Tester'],
      summary: 'Eliminate periodic drafting faults and reduce count variation up to 70% with high-frequency DSP autolevelling and off-line capacitive validation.'
    },
    {
      id: 'stickiness',
      label: 'Sticky Cotton Roller Lapping',
      targetDivision: 'sugar',
      recommended: ['TMS54 Cotton Sugar Test', 'Glucosil TMS55 Solution'],
      summary: 'Prevent catastrophic card wire clothing and drawframe roller wrapping by testing incoming raw cotton bales in 15 minutes before opening.'
    },
    {
      id: 'strength',
      label: 'High Yarn Breaks in Weaving / Knitting',
      targetDivision: 'laboratory',
      recommended: ['Tensotester 3 Automatic Strength Tester', 'easy Evenness Tester'],
      summary: 'Automate single-end breaking force and elongation testing across 24 bobbins to identify weak spots before shipment to fabric mills.'
    },
    {
      id: 'data-entry',
      label: 'Laboratory Transcription Errors',
      targetDivision: 'laboratory',
      recommended: ['TMS45 Count Analyser', 'Link Job Technology SQL Network'],
      summary: 'Eliminate keyboard typing mistakes by automatically transmitting balance count data into evenness and tensile testing records via shared SQL database.'
    }
  ];

  return (
    <div className="solutions-overview-page">
      {/* Page Header */}
      <section className="page-header-section bg-warm-ivory border-bottom-hairline bg-grid-blueprint relative">
        <div className="container relative z-10">
          <Breadcrumbs items={[{ label: 'Solutions Overview' }]} />
          
          <div className="page-header-content">
            <div className="header-badge-row">
              <span className="badge-overline">Engineering capabilities</span>
              <span className="badge-subtag font-mono">3 Specialized Divisions</span>
            </div>
            <h1 className="page-header-title">
              Three specialized divisions for the modern textile mill.
            </h1>
            <p className="page-header-lead">
              From raw bale stickiness detection to high-speed sliver drafting regulation and comprehensive laboratory metrology, Tomsic provides precision technologies engineered and manufactured in Italy.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Mill Challenge Diagnostic Filter */}
      <section className="section-sm bg-white border-bottom-hairline">
        <div className="container">
          <div className="challenge-filter-card relative">
            <div className="drafting-crosshair top-left"></div>
            <div className="drafting-crosshair top-right"></div>
            <div className="drafting-crosshair bottom-left"></div>
            <div className="drafting-crosshair bottom-right"></div>

            <div className="challenge-filter-header">
              <div className="challenge-label-group font-mono">
                <Filter size={15} color="#A48256" />
                <span>FILTER BY PRODUCTION CHALLENGE:</span>
              </div>
              <span className="challenge-header-hint">
                Select your mill's primary operational focus to pinpoint engineered solutions
              </span>
            </div>

            <div className="challenge-pills-row">
              {millChallenges.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedChallenge(c.id)}
                  className={`challenge-pill ${selectedChallenge === c.id ? 'active' : ''}`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {selectedChallenge !== 'all' && (
              <div className="challenge-result-card">
                {(() => {
                  const ch = millChallenges.find(c => c.id === selectedChallenge);
                  return (
                    <div className="challenge-result-inner">
                      <div>
                        <div className="challenge-target-tag font-mono">
                          <span>TARGET DIVISION: {ch.targetDivision.toUpperCase()}</span>
                          <strong className="challenge-active-name">{ch.label}</strong>
                        </div>
                        <p className="challenge-summary-text">{ch.summary}</p>
                      </div>
                      <Link
                        to={`/solutions/${ch.targetDivision}`}
                        className="btn btn-secondary btn-sm challenge-goto-btn"
                      >
                        <span>View {ch.targetDivision} Division</span>
                        <ChevronRight size={14} />
                      </Link>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solutions Detailed Breakdown */}
      <section className="section bg-white">
        <div className="container">
          <div className="solutions-breakdown-list">
            {solutionsData
              .filter(sol => {
                if (selectedChallenge === 'all') return true;
                const activeCh = millChallenges.find(c => c.id === selectedChallenge);
                return activeCh?.targetDivision === sol.slug;
              })
              .map((sol, index) => {
                const solProducts = productsData.filter(p => p.categorySlug === sol.slug);

                return (
                  <article key={sol.slug} className={`solution-breakdown-item ${index % 2 === 1 ? 'reverse' : ''}`} id={sol.slug}>
                    <div className="solution-visual relative">
                      <div className="drafting-crosshair top-left"></div>
                      <div className="drafting-crosshair top-right"></div>
                      <div className="drafting-crosshair bottom-left"></div>
                      <div className="drafting-crosshair bottom-right"></div>
                      <img
                        src={sol.heroImage}
                        alt={sol.title}
                        className="solution-hero-img"
                        loading="lazy"
                      />
                      <div className="solution-visual-badge">
                        <span>DIVISION 0{index + 1}</span>
                        <strong>{sol.title}</strong>
                      </div>
                    </div>

                    <div className="solution-text-col">
                      <span className="badge-overline">{sol.badge}</span>
                      <h2 className="solution-item-title">{sol.title}</h2>
                      <h3 className="solution-item-subtitle">{sol.subtitle}</h3>

                      <p className="solution-item-desc">{sol.overview}</p>

                      <div className="solution-key-grid">
                        {sol.keyHighlights.map((k, kIdx) => (
                          <div key={kIdx} className="key-item">
                            <CheckCircle2 size={16} color="#AA8B62" className="key-icon" />
                            <div>
                              <strong>{k.title}</strong>
                              <p>{k.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="solution-products-strip">
                        <span className="strip-label">ENGINEERED SYSTEMS:</span>
                        <div className="strip-tags">
                          {solProducts.map(p => (
                            <Link key={p.slug} to={`/products/${p.slug}`} className="strip-product-link">
                              <span>{p.name}</span>
                              <ArrowUpRight size={12} />
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="solution-item-actions">
                        <Link to={`/solutions/${sol.slug}`} className="btn btn-primary">
                          <span>Explore {sol.title} In-Depth</span>
                          <ArrowRight size={16} />
                        </Link>
                        <button
                          className="btn btn-secondary"
                          onClick={() => onOpenEnquiry && onOpenEnquiry(sol.title, 'Sales')}
                        >
                          <span>Request Division Datasheets</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </section>

      {/* Global Support Callout */}
      <section className="section bg-warm-ivory border-top-hairline">
        <div className="container">
          <div className="overview-callout-card relative">
            <span className="drafting-crosshair top-left" />
            <span className="drafting-crosshair top-right" />
            <span className="drafting-crosshair bottom-left" />
            <span className="drafting-crosshair bottom-right" />

            <div className="callout-text">
              <span className="badge-overline">Mill consultation</span>
              <h3 className="callout-title">
                Need a complete laboratory & card room consultation?
              </h3>
              <p className="callout-desc">
                Our application engineers in Savogna d'Isonzo review your production counts (Ne, Nm, tex), staple lengths, card brands, and ring spinning frames to configure the ideal instrumentation and autolevelling package.
              </p>
            </div>
            <div className="callout-action-block">
              <button
                className="btn btn-bronze"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Integrated Mill Consultation', 'Sales')}
              >
                <span>Initiate Laboratory Consultation</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header-section {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .page-header-content {
          max-width: 880px;
          margin-top: 1.5rem;
        }
        .page-header-title {
          font-size: clamp(2.25rem, 4vw, 3.25rem);
          margin: 0.5rem 0 1.25rem;
          line-height: 1.12;
        }
        .page-header-lead {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #384A59;
        }
        .border-bottom-hairline {
          border-bottom: 1px solid var(--border-hairline);
        }
        .border-top-hairline {
          border-top: 1px solid var(--border-hairline);
        }
        .solutions-breakdown-list {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }
        .solution-breakdown-item {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 4rem;
          align-items: center;
        }
        .solution-breakdown-item.reverse {
          grid-template-columns: 1.1fr 1fr;
        }
        .solution-breakdown-item.reverse .solution-visual {
          order: 2;
        }
        .solution-breakdown-item.reverse .solution-text-col {
          order: 1;
        }
        .solution-visual {
          position: relative;
          background-color: #F5F4F0;
          border: 1px solid var(--border-subtle);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
        }
        .solution-hero-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          display: block;
        }
        .solution-visual-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(23, 35, 45, 0.9);
          backdrop-filter: blur(4px);
          color: #FFFFFF;
          padding: 0.5rem 0.85rem;
          border-radius: var(--radius-xs);
          display: flex;
          flex-direction: column;
          font-size: 0.75rem;
        }
        .solution-visual-badge span {
          color: #AA8B62;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          letter-spacing: 0.05em;
        }
        .solution-visual-badge strong {
          color: #FFFFFF;
          font-weight: 600;
        }
        .solution-item-title {
          font-size: clamp(1.85rem, 3vw, 2.35rem);
          line-height: 1.15;
          margin: 0.35rem 0 0.5rem;
        }
        .solution-item-subtitle {
          font-size: 1.1rem;
          color: #647887;
          font-weight: 500;
          margin-bottom: 1.25rem;
        }
        .solution-item-desc {
          font-size: 1rem;
          color: #384A59;
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }
        .solution-key-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 2rem;
          padding: 1.25rem;
          background-color: #FAF9F6;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-hairline);
        }
        .key-item {
          display: flex;
          gap: 0.65rem;
          align-items: flex-start;
        }
        .key-icon {
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .key-item strong {
          display: block;
          font-size: 0.875rem;
          color: #17232D;
          margin-bottom: 0.2rem;
        }
        .key-item p {
          font-size: 0.8125rem;
          color: #647887;
          line-height: 1.45;
          margin: 0;
        }
        .solution-products-strip {
          margin-bottom: 2rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-hairline);
        }
        .strip-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #647887;
          margin-bottom: 0.65rem;
          letter-spacing: 0.05em;
        }
        .strip-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .strip-product-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          padding: 0.35rem 0.65rem;
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          color: #17232D;
          font-weight: 500;
          transition: all var(--transition-fast);
        }
        .strip-product-link:hover {
          background-color: #17232D;
          color: #FFFFFF;
          border-color: #17232D;
        }
        .solution-item-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Challenge Filter Card */
        .challenge-filter-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          padding: 1.75rem 2rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-subtle);
        }
        .challenge-filter-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .challenge-label-group {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-graphite);
          letter-spacing: 0.06em;
        }
        .challenge-header-hint {
          font-size: 0.8125rem;
          color: var(--color-steel-blue);
        }
        .challenge-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .challenge-pill {
          background-color: #FFFFFF;
          color: var(--color-graphite);
          border: 1px solid var(--border-subtle);
          padding: 0.55rem 1rem;
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 600;
          border-radius: var(--radius-xs);
          cursor: pointer;
          transition: all var(--transition-fast);
          line-height: 1.2;
        }
        .challenge-pill:hover {
          border-color: var(--color-graphite);
          background-color: var(--color-warm-ivory);
        }
        .challenge-pill.active {
          background-color: var(--color-graphite);
          color: #FFFFFF;
          border-color: var(--color-graphite);
          box-shadow: 0 2px 6px rgba(20, 29, 36, 0.15);
        }
        .challenge-result-card {
          margin-top: 1.25rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-xs);
          animation: tabFade 0.25s var(--ease-editorial);
        }
        .challenge-result-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .challenge-target-tag {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.35rem;
          font-size: 0.6875rem;
          color: var(--color-muted-bronze);
          letter-spacing: 0.05em;
        }
        .challenge-active-name {
          color: var(--color-graphite);
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          letter-spacing: normal;
        }
        .challenge-summary-text {
          font-size: 0.875rem;
          color: #4D606E;
          line-height: 1.5;
          margin: 0;
          max-width: 720px;
        }
        .challenge-goto-btn {
          flex-shrink: 0;
        }

        /* Overview Callout Card */
        .overview-callout-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 2.75rem 3rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .callout-title {
          font-size: 1.75rem;
          margin-bottom: 0.6rem;
          line-height: 1.2;
        }
        .callout-desc {
          color: #4D606E;
          font-size: 1.025rem;
          line-height: 1.6;
          margin: 0;
        }
        .callout-action-block {
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .solution-breakdown-item,
          .solution-breakdown-item.reverse {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .solution-breakdown-item.reverse .solution-visual {
            order: 1;
          }
          .solution-breakdown-item.reverse .solution-text-col {
            order: 2;
          }
          .solutions-breakdown-list {
            gap: 4rem;
          }
        }
        @media (max-width: 640px) {
          .challenge-filter-card {
            padding: 1.5rem 1.15rem;
          }
          .challenge-pill {
            min-height: 42px;
            font-size: 0.8125rem;
          }
          .challenge-result-inner {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          .challenge-goto-btn {
            width: 100%;
            justify-content: center;
          }
          .solution-key-grid {
            grid-template-columns: 1fr;
          }
          .solution-item-actions {
            flex-direction: column;
            width: 100%;
            gap: 0.75rem;
          }
          .solution-item-actions .btn {
            width: 100%;
            justify-content: center;
          }
          .overview-callout-card {
            padding: 1.75rem 1.25rem;
            gap: 1.5rem;
          }
          .callout-title {
            font-size: 1.4rem;
          }
          .callout-action-block {
            width: 100%;
          }
          .callout-action-block .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
