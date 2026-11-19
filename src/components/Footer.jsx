import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { companyData } from '../data/company';

export function Footer({ onOpenEnquiry }) {
  return (
    <footer className="site-footer bg-graphite" role="contentinfo">
      {/* Top Pre-Footer Bar */}
      <div className="footer-top-cta bg-grid-blueprint-dark">
        <div className="container footer-top-inner">
          <div>
            <span className="badge-overline dark font-mono">DIRECT FACTORY CONSULTATION</span>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.85rem', marginTop: '0.25rem' }}>
              Precision textile quality control from fibre to finished yarn.
            </h3>
          </div>
          <div className="footer-top-actions">
            <button 
              className="btn btn-bronze"
              onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Sales')}
            >
              <span>Consult Factory Engineers</span>
              <ArrowUpRight size={15} />
            </button>
            <Link to="/contact" className="btn btn-secondary-dark">
              <span>Find International Agent</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="divider-dark" />

      {/* Main Footer Content */}
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Column 1: Brand & Heritage */}
          <div className="footer-col-brand">
            <div className="footer-brand-header">
              <img 
                src="/assets/tomsic-logo.png" 
                alt="Tomsic Advanced Technologies" 
                className="footer-logo-img" 
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="footer-heritage-badge font-mono">EST. 1956 · SAVOGNA D'ISONZO (GO), ITALY</span>
            </div>

            <p className="footer-brand-desc">
              Tomsic S.r.l. is an independent Italian engineering manufacturer specialized in textile laboratory testing instruments, spinning autolevellers, and raw cotton sugar diagnostics. 100% engineered and built in Savogna d’Isonzo.
            </p>

            <div className="footer-acimit-badge">
              <img 
                src="/assets/acimit-logo.png" 
                alt="Member of ACIMIT" 
                className="acimit-img"
                width="84"
              />
              <div className="acimit-text">
                <strong>Member of ACIMIT</strong>
                <span>Association of Italian Textile Machinery Manufacturers</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions & Key Systems */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">Solutions</h4>
            <ul className="footer-links">
              <li>
                <Link to="/solutions/laboratory">Laboratory Solutions</Link>
              </li>
              <li>
                <Link to="/solutions/spinning">Spinning Automation</Link>
              </li>
              <li>
                <Link to="/solutions/sugar">Sugar Contamination</Link>
              </li>
              <li>
                <Link to="/solutions">All Solutions Overview</Link>
              </li>
            </ul>

            <h4 className="footer-col-title font-mono" style={{ marginTop: '1.75rem' }}>Flagship Systems</h4>
            <ul className="footer-links">
              <li>
                <Link to="/products/easy-evenness-tester">easy Evenness Tester</Link>
              </li>
              <li>
                <Link to="/products/tensotester-3">TensoTester3 Strength Tester</Link>
              </li>
              <li>
                <Link to="/products/tms60-nep-trash">TMS60 Nep & Trash Tester</Link>
              </li>
              <li>
                <Link to="/products/card-autoleveller-tms25-r2c">TMS25-R2C Card Autoleveller</Link>
              </li>
              <li>
                <Link to="/products/cotton-sugar-test-tms54">TMS54 Cotton Sugar Test</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">Company</h4>
            <ul className="footer-links">
              <li>
                <Link to="/company">About Tomsic & History</Link>
              </li>
              <li>
                <Link to="/company#leadership">Executive Leadership</Link>
              </li>
              <li>
                <Link to="/company#manufacturing">100% In-House Italian Engineering</Link>
              </li>
              <li>
                <Link to="/news">News & World Exhibitions</Link>
              </li>
              <li>
                <Link to="/contact">Worldwide Agent Directory</Link>
              </li>
            </ul>

            <h4 className="footer-col-title font-mono" style={{ marginTop: '1.75rem' }}>Upcoming Exhibitions</h4>
            <ul className="footer-links font-mono" style={{ fontSize: '0.8rem' }}>
              <li style={{ color: '#8E9EA9' }}>
                <strong style={{ color: '#EBF0F3' }}>INDIA ITME 2026</strong> · Greater Noida
              </li>
              <li style={{ color: '#8E9EA9' }}>
                <strong style={{ color: '#EBF0F3' }}>EGYPT STITCH & TEX</strong> · Cairo
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="footer-col">
            <h4 className="footer-col-title font-mono">Headquarters</h4>
            
            <div className="footer-contact-item">
              <MapPin size={16} color="#A48256" className="contact-icon" />
              <div>
                <strong>Tomsic S.r.l.</strong>
                <span>via Malnisce, 3/B</span>
                <span>34070 Savogna d’Isonzo (GO)</span>
                <span>Italy – European Union</span>
                <span className="font-mono" style={{ fontSize: '0.725rem', color: '#647887', marginTop: '0.2rem' }}>
                  45°52′N 13°34′E
                </span>
              </div>
            </div>

            <div className="footer-contact-item" style={{ marginTop: '0.85rem' }}>
              <Phone size={16} color="#A48256" className="contact-icon" />
              <div className="font-mono tabular-nums">
                <span>Admin: +39 (0481) 882320</span>
                <span>Service: +39 (0481) 882032</span>
                <span>Fax: +39 (0481) 882542</span>
              </div>
            </div>

            <div className="footer-contact-item" style={{ marginTop: '0.85rem' }}>
              <Mail size={16} color="#A48256" className="contact-icon" />
              <div>
                <a href="mailto:tomsic@tomsic.it">tomsic@tomsic.it</a>
                <a href="mailto:sales@tomsic.it">sales@tomsic.it</a>
                <a href="mailto:service@tomsic.it">service@tomsic.it</a>
                <span className="font-mono" style={{ fontSize: '0.7rem', color: '#647887' }}>PEC: tomsicsrl@cgn.legalmail.it</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-dark" />

      {/* Socket Bar */}
      <div className="container footer-socket">
        <div className="socket-legal font-mono">
          <span>
            © {new Date().getFullYear()} Tomsic S.r.l. — P.IVA e C.F. / VAT n. IT00468340310 · REA n. GO-54264 · Capitale Sociale € 26.000,00 i.v.
          </span>
          <span style={{ color: '#8E9EA9', marginLeft: '0.5rem' }}>
            Independent Design Concept · Source: tomsic.it
          </span>
        </div>

        <div className="socket-links">
          <Link to="/contact">Contact Support</Link>
          <span className="socket-sep">·</span>
          <a href="https://www.iubenda.com/privacy-policy/76380471" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <span className="socket-sep">·</span>
          <a href="https://www.iubenda.com/privacy-policy/76380471/cookie-policy" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
        </div>
      </div>

      <style>{`
        .site-footer {
          margin-top: auto;
          color: #B2C0CB;
          font-size: 0.9375rem;
        }
        .footer-top-cta {
          padding: 3.5rem 0;
        }
        .footer-top-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .footer-top-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .footer-main {
          padding-top: 4.5rem;
          padding-bottom: 3.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          width: 100%;
        }
        .footer-brand-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .footer-logo-img {
          height: 36px !important;
          width: auto !important;
          max-width: 150px;
          object-fit: contain;
          display: block;
        }
        .footer-heritage-badge {
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #D6BC96;
        }
        .footer-brand-desc {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #8E9EA9;
          margin-bottom: 1.5rem;
        }
        .footer-acimit-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          background-color: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
        }
        .acimit-img {
          height: auto;
          background: #FFFFFF;
          padding: 4px;
          border-radius: 2px;
        }
        .acimit-text strong {
          display: block;
          font-size: 0.8125rem;
          color: #FFFFFF;
        }
        .acimit-text span {
          display: block;
          font-size: 0.7rem;
          color: #8E9EA9;
          line-height: 1.25;
        }
        .footer-col-title {
          font-size: 0.775rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-bottom: 1.25rem;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-links a {
          color: #8E9EA9;
          font-size: 0.875rem;
          transition: color var(--transition-fast);
        }
        .footer-links a:hover {
          color: #D6BC96;
        }
        .footer-contact-item {
          display: flex;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: #8E9EA9;
          line-height: 1.5;
        }
        .footer-contact-item strong {
          display: block;
          color: #FFFFFF;
        }
        .footer-contact-item span {
          display: block;
        }
        .footer-contact-item a {
          display: block;
          color: #8E9EA9;
        }
        .footer-contact-item a:hover {
          color: #D6BC96;
        }
        .contact-icon {
          flex-shrink: 0;
          margin-top: 3px;
        }
        .footer-socket {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.725rem;
          color: #647887;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .socket-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .socket-links a {
          color: #8E9EA9;
        }
        .socket-links a:hover {
          color: #D6BC96;
        }
        .socket-sep {
          color: #445766;
        }

        .socket-legal {
          overflow-wrap: break-word;
          word-break: break-word;
          max-width: 100%;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 640px) {
          .footer-main {
            padding-top: 3.5rem;
            padding-bottom: 2.75rem;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.25rem;
            width: 100%;
          }
          .footer-col-brand, .footer-col {
            width: 100%;
            max-width: 100%;
          }
          .footer-top-inner {
            flex-direction: column;
            align-items: stretch;
            gap: 1.5rem;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .footer-top-inner h3 {
            max-width: 100%;
            font-size: 1.35rem;
            line-height: 1.25;
          }
          .footer-top-actions {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
            gap: 0.75rem;
          }
          .footer-top-actions .btn {
            width: 100%;
            justify-content: center;
          }
          .footer-socket {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            padding-top: 1.25rem;
            padding-bottom: 1.75rem;
          }
          .footer-brand-header {
            width: 100%;
          }
          .footer-acimit-badge {
            width: 100%;
            box-sizing: border-box;
          }
        }
        @media (max-width: 380px) {
          .footer-main, .footer-top-inner, .footer-socket {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
