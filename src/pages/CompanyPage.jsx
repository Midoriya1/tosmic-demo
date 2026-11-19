import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Shield, Award, Users, MapPin, Building, History, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { companyData } from '../data/company';

export function CompanyPage({ onOpenEnquiry }) {
  return (
    <div className="company-page">
      {/* Header */}
      <section className="company-header bg-warm-ivory border-bottom-hairline bg-grid-blueprint">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Company & Heritage' }]} />

          <div className="company-header-inner">
            <span className="badge-overline font-mono">ESTABLISHED 1956 · GORIZIA, ITALY</span>
            <h1 className="company-header-title">
              Precision engineering rooted in Italian textile heritage.
            </h1>
            <p className="company-header-lead">
              For seven decades, Tomsic has remained a privately owned, independent engineering factory dedicated to mechanical perfection, advanced electronics, and metrological integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Facility & Identity Split */}
      <section className="section bg-white" id="manufacturing">
        <div className="container">
          <div className="company-facility-grid">
            <div className="facility-media-card">
              <img
                src="/assets/tomsic-facility.jpg"
                alt="Tomsic S.r.l. Facility in Savogna d'Isonzo"
                className="facility-main-img"
              />
              <div className="facility-caption-bar font-mono">
                <span className="caption-tag">SAVOGNA D’ISONZO (GO), ITALY</span>
                <span className="caption-year">EST. 1956 · CONTINUOUS OPERATION</span>
              </div>
            </div>

            <div className="facility-text-stack">
              <span className="badge-overline font-mono">SAVOGNA D’ISONZO COMPLEX</span>
              <h2 style={{ fontSize: '2.15rem', marginBottom: '1.25rem' }}>
                100% In-house design, machining, and software synthesis.
              </h2>
              <p style={{ color: '#384A59', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                In 2003, Tomsic inaugurated its expanded headquarters complex in Savogna d'Isonzo, tripling R&D and production floor space. Here, our engineers design every printed circuit board, program every line of analysis software, and precision-machine mechanical assemblies.
              </p>
              <p style={{ color: '#4D606E', fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                Unlike assemblers who rebrand generic third-party instruments, Tomsic retains sovereign control over every sensor, drive algorithm, and measurement slot. This enables custom firmware tailoring, immediate availability of original replacement components, and lifetime serviceability.
              </p>

              <div className="acimit-membership-box">
                <img
                  src="/assets/acimit-logo.png"
                  alt="Member of ACIMIT"
                  height="44"
                />
                <div>
                  <strong>Association of Italian Textile Machinery Manufacturers (ACIMIT)</strong>
                  <p style={{ fontSize: '0.8125rem', color: '#647887', marginTop: '0.2rem', lineHeight: '1.45' }}>
                    Tomsic is an accredited ACIMIT manufacturer, upholding Italian engineering standards and promoting sustainable, energy-efficient spinning automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Family Stewardship */}
      <section className="section bg-warm-ivory border-top-hairline" id="leadership">
        <div className="container">
          <SectionHeading
            overline="EXECUTIVE GOVERNANCE"
            title="Second-Generation Family Leadership"
            subtitle="Direct personal accountability from our directors to your mill operations."
          />

          <div className="leadership-cards-grid">
            <div className="leadership-card">
              <div className="leadership-role-tag font-mono">EXECUTIVE MANAGEMENT</div>
              <h3 className="leader-name">Mr. Silvan Tomsic</h3>
              <span className="leader-title font-mono">PRESIDENT & MANAGING DIRECTOR</span>
              <p className="leader-bio">
                Directing strategic technological investments, key global client partnerships, and international expansion since assuming executive governance in 1992.
              </p>
            </div>

            <div className="leadership-card">
              <div className="leadership-role-tag font-mono">TECHNICAL OPERATIONS</div>
              <h3 className="leader-name">Mr. Ladi Tomsic</h3>
              <span className="leader-title font-mono">VICE-PRESIDENT & ENGINEERING</span>
              <p className="leader-bio">
                Supervising factory manufacturing protocols, precision CNC tolerances, and metrological calibration across all laboratory testing benches and autolevelling hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chronological Heritage Timeline */}
      <section className="section bg-white border-top-hairline">
        <div className="container">
          <SectionHeading
            overline="CHRONOLOGY OF INNOVATION"
            title="Seven Decades of Milestones"
            subtitle="The evolution of an Italian engineering factory into a global textile metrology specialist."
          />

          <div className="timeline-container">
            <div className="timeline-axis" />
            <div className="timeline-events-list">
              {companyData.timeline.map((item, idx) => (
                <div key={idx} className={`timeline-event-row ${idx % 2 === 1 ? 'align-right' : 'align-left'}`}>
                  <div className="timeline-marker font-mono">
                    <span className="marker-dot" />
                    <span className="marker-year tabular-nums">{item.year}</span>
                  </div>

                  <div className="timeline-content-card">
                    <span className="timeline-mobile-year font-mono">{item.year}</span>
                    <h4 className="timeline-event-title">{item.title}</h4>
                    <p className="timeline-event-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Corporate Registration Details */}
      <section className="section-sm bg-warm-ivory border-top-hairline">
        <div className="container">
          <div className="corporate-details-box">
            <span className="badge-overline font-mono">OFFICIAL CORPORATE DATA</span>
            <div className="corp-details-grid font-mono">
              <div>
                <span className="corp-label">Legal Name:</span>
                <strong>{companyData.legalName}</strong>
              </div>
              <div>
                <span className="corp-label">Registered Office:</span>
                <strong>via Malnisce, 3/B, 34070 Savogna d’Isonzo (GO), Italy</strong>
              </div>
              <div>
                <span className="corp-label">VAT & Tax Code (P.IVA / C.F.):</span>
                <strong className="tabular-nums">{companyData.registration.vatNumber}</strong>
              </div>
              <div>
                <span className="corp-label">REA Registration:</span>
                <strong className="tabular-nums">{companyData.registration.reaNumber}</strong>
              </div>
              <div>
                <span className="corp-label">Share Capital:</span>
                <strong className="tabular-nums">{companyData.registration.shareCapital} i.v.</strong>
              </div>
              <div>
                <span className="corp-label">Certified Email (PEC):</span>
                <strong>{companyData.contact.emailPec}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .company-header {
          padding-top: 2rem;
          padding-bottom: 4.5rem;
        }
        .company-header-inner {
          max-width: 860px;
          margin-top: 1.5rem;
        }
        .company-header-title {
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          margin: 0.5rem 0 1.25rem;
          line-height: 1.12;
        }
        .company-header-lead {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #384A59;
        }
        .company-facility-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4.5rem;
          align-items: center;
        }
        .facility-media-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 0.85rem;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-card);
        }
        .facility-main-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: var(--radius-xs);
          display: block;
        }
        .facility-caption-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          margin-top: 0.75rem;
          border-top: 1px solid var(--border-hairline);
          font-size: 0.6875rem;
          letter-spacing: 0.05em;
        }
        .caption-tag {
          font-weight: 700;
          color: var(--color-graphite);
        }
        .caption-year {
          color: var(--color-accent);
          font-weight: 600;
        }
        .acimit-membership-box {
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .leadership-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .leadership-card {
          position: relative;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 2.75rem 2.5rem;
          box-shadow: var(--shadow-card);
        }
        .leadership-role-tag {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-accent);
          margin-bottom: 0.6rem;
        }
        .leader-name {
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
          color: var(--color-graphite);
        }
        .leader-title {
          display: block;
          font-size: 0.775rem;
          color: #647887;
          font-weight: 600;
          margin-bottom: 1.25rem;
          letter-spacing: 0.04em;
        }
        .leader-bio {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #4D606E;
        }

        /* Timeline Axis */
        .timeline-container {
          position: relative;
          max-width: 980px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        .timeline-axis {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background-color: var(--border-subtle);
          transform: translateX(-50%);
        }
        .timeline-events-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .timeline-event-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          position: relative;
        }
        .timeline-marker {
          position: absolute;
          left: 50%;
          top: 1.5rem;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #FFFFFF;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-strong);
          z-index: 2;
        }
        .marker-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--color-muted-bronze);
        }
        .marker-year {
          font-size: 0.8125rem;
          font-weight: 800;
          color: var(--color-graphite);
        }
        .timeline-mobile-year {
          display: none;
        }
        .timeline-content-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          padding: 1.75rem;
          border-radius: var(--radius-sm);
        }
        .timeline-event-row.align-left .timeline-content-card {
          grid-column: 1;
        }
        .timeline-event-row.align-right .timeline-content-card {
          grid-column: 2;
        }
        .timeline-event-title {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: var(--color-graphite);
        }
        .timeline-event-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #4D606E;
        }

        /* Corporate Details Box */
        .corporate-details-box {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          padding: 2.25rem;
          border-radius: var(--radius-sm);
        }
        .corp-details-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 1rem;
          font-size: 0.8125rem;
        }
        .corp-label {
          display: block;
          font-size: 0.7rem;
          color: #647887;
          margin-bottom: 0.2rem;
          text-transform: uppercase;
        }
        .corp-details-grid strong {
          color: var(--color-graphite);
          word-break: break-all;
          overflow-wrap: break-word;
        }

        @media (max-width: 1024px) {
          .company-facility-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .corp-details-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .acimit-membership-box {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 1.25rem 1rem;
          }
          .timeline-axis {
            left: 12px;
          }
          .timeline-event-row {
            grid-template-columns: 1fr;
            padding-left: 2rem;
          }
          .timeline-marker {
            left: 12px;
            top: 1.6rem;
            width: 14px;
            height: 14px;
            padding: 0;
            border-radius: 50%;
            background-color: var(--color-accent);
            border: 2.5px solid #FFFFFF;
            box-shadow: 0 0 0 1px var(--color-graphite);
          }
          .timeline-marker .marker-dot,
          .timeline-marker .marker-year {
            display: none;
          }
          .timeline-mobile-year {
            display: inline-block;
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--color-accent);
            background: rgba(197, 55, 39, 0.08);
            padding: 0.2rem 0.55rem;
            border-radius: var(--radius-xs);
            margin-bottom: 0.45rem;
          }
          .timeline-content-card {
            padding: 1.25rem 1rem;
          }
          .timeline-event-row.align-left .timeline-content-card,
          .timeline-event-row.align-right .timeline-content-card {
            grid-column: 1;
          }
          .leadership-cards-grid {
            grid-template-columns: 1fr;
          }
          .leadership-card {
            padding: 1.75rem 1.25rem;
          }
          .corp-details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
