import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight, Globe, Phone, Mail, ShieldCheck } from 'lucide-react';
import { solutionsData } from '../data/solutions';

export function Header({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setLangDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [mobileMenuOpen]);

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'IT', label: 'Italiano' },
    { code: 'ZH', label: '中文 (Simplified)' }
  ];

  return (
    <>
      {/* Top Technical Metadata & Heritage Bar */}
      <div className="top-technical-bar">
        <div className="container-wide top-tech-inner">
          <div className="tech-meta-left">
            <span className="tech-coord font-mono">SAVOGNA D’ISONZO (GO) · 45°52′N 13°34′E</span>
            <span className="tech-sep">/</span>
            <span className="tech-heritage">ITALIAN TEXTILE MACHINERY · SINCE 1956</span>
            <span className="tech-sep">/</span>
            <span className="tech-acimit">MEMBER OF ACIMIT</span>
          </div>

          <div className="tech-meta-right">
            <a href="tel:+390481882320" className="tech-contact-link">
              <Phone size={11} color="#A48256" />
              <span className="font-mono tabular-nums">+39 (0481) 882320</span>
            </a>
            <span className="tech-sep">/</span>
            <a href="mailto:sales@tomsic.it" className="tech-contact-link">
              <Mail size={11} color="#A48256" />
              <span>sales@tomsic.it</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-wide header-inner">
          {/* Logo & Brand Identity */}
          <Link to="/" className="brand-logo" aria-label="Tomsic Advanced Technologies Home">
            <img 
              src="/assets/tomsic-logo.png" 
              alt="Tomsic Advanced Technologies" 
              className="logo-img"
              width="142"
              height="38"
            />
            <div className="brand-tag-wrapper">
              <span className="brand-heritage-line">ADVANCED TECHNOLOGIES</span>
              <span className="brand-origin-line font-mono">100% ENGINEERED IN ITALY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>

            {/* Solutions Dropdown Menu */}
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <NavLink 
                to="/solutions" 
                className={({ isActive }) => `nav-link nav-link-dropdown ${isActive ? 'active' : ''}`}
              >
                <span>Solutions</span>
                <ChevronDown size={13} className={`chevron-icon ${solutionsDropdownOpen ? 'rotated' : ''}`} />
              </NavLink>

              {solutionsDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-inner">
                    <div className="dropdown-summary">
                      <div>
                        <span className="text-meta">SPECIALIZED DIVISIONS</span>
                        <h4 style={{ fontSize: '1.05rem', margin: '0.4rem 0 0.5rem', color: '#141D24' }}>
                          Engineering & Metrology
                        </h4>
                        <p style={{ fontSize: '0.85rem', color: '#5C7080', lineHeight: '1.5' }}>
                          Complete testing instrumentation and closed-loop spinning regulation engineered in Savogna d'Isonzo.
                        </p>
                      </div>

                      <Link to="/solutions" className="dropdown-view-all">
                        <span>Solutions Master Overview</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>

                    <div className="dropdown-items">
                      {solutionsData.map((sol, sIdx) => (
                        <Link key={sol.slug} to={`/solutions/${sol.slug}`} className="dropdown-card">
                          <div className="dropdown-card-index font-mono">0{sIdx + 1}</div>
                          <div className="dropdown-card-text">
                            <span className="dropdown-card-title">{sol.title}</span>
                            <span className="dropdown-card-desc">{sol.subtitle}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/products/easy-evenness-tester" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Products
            </NavLink>

            <NavLink to="/company" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Company
            </NavLink>

            <NavLink to="/news" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              News & Events
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          {/* Action Bar */}
          <div className="header-actions">
            {/* Language Selector */}
            <div className="lang-selector-wrapper">
              <button 
                type="button"
                className="lang-toggle-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-expanded={langDropdownOpen}
                aria-label="Select language"
              >
                <Globe size={14} color="#5C7080" />
                <span className="lang-code font-mono">{selectedLanguage}</span>
                <ChevronDown size={11} color="#5C7080" />
              </button>

              {langDropdownOpen && (
                <div className="lang-dropdown">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      className={`lang-option ${selectedLanguage === lang.code ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                    >
                      <span className="lang-name">{lang.label}</span>
                      {selectedLanguage === lang.code && <span className="lang-check">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Technical Enquiry CTA */}
            <button 
              type="button" 
              className="btn btn-primary btn-sm header-cta"
              onClick={() => onOpenEnquiry && onOpenEnquiry('', 'Sales')}
            >
              <span>Technical Enquiry</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              type="button" 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" data-lenis-prevent>
          <div className="mobile-drawer-content" data-lenis-prevent>
            <div className="mobile-nav-group">
              <span className="text-meta mobile-section-label">SITE NAVIGATION</span>
              <NavLink to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)} end>Home</NavLink>
              
              <NavLink to="/solutions" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Solutions</NavLink>
              <div className="mobile-sublinks">
                <Link to="/solutions/laboratory" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                  <span>Laboratory Solutions</span>
                  <span className="mobile-sub-tag font-mono">LAB</span>
                </Link>
                <Link to="/solutions/spinning" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                  <span>Spinning Automation</span>
                  <span className="mobile-sub-tag font-mono">MILL</span>
                </Link>
                <Link to="/solutions/sugar" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                  <span>Sugar Contamination</span>
                  <span className="mobile-sub-tag font-mono">SUGAR</span>
                </Link>
              </div>

              <span className="text-meta mobile-section-label" style={{ marginTop: '1.25rem' }}>FLAGSHIP INSTRUMENTS</span>
              <div className="mobile-sublinks">
                <Link to="/products/easy-evenness-tester" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                  <span>easy Evenness Tester</span>
                  <span className="mobile-sub-tag font-mono">EVENNESS</span>
                </Link>
                <Link to="/products/tensotester-3" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                  <span>TensoTester3 Strength Tester</span>
                  <span className="mobile-sub-tag font-mono">TENSILE</span>
                </Link>
                <Link to="/products/tms60-nep-trash" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                  <span>TMS60 Nep & Trash Tester</span>
                  <span className="mobile-sub-tag font-mono">METROLOGY</span>
                </Link>
                <Link to="/products/card-autoleveller-tms25-r2c" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                  <span>TMS25-R2C Card Autoleveller</span>
                  <span className="mobile-sub-tag font-mono">AUTOLEVEL</span>
                </Link>
                <Link to="/products/cotton-sugar-test-tms54" className="mobile-sublink" onClick={() => setMobileMenuOpen(false)}>
                  <span>TMS54 Cotton Sugar Test</span>
                  <span className="mobile-sub-tag font-mono">STICKINESS</span>
                </Link>
              </div>

              <span className="text-meta mobile-section-label" style={{ marginTop: '1.25rem' }}>ENTERPRISE & NETWORK</span>
              <NavLink to="/company" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Company & Heritage</NavLink>
              <NavLink to="/news" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>News & Exhibitions</NavLink>
              <NavLink to="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact & Worldwide Agents</NavLink>
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-lang-picker">
                <span className="text-meta">SELECT LANGUAGE:</span>
                <div className="mobile-lang-btn-row">
                  {languages.map(l => (
                    <button
                      key={l.code}
                      className={`mobile-lang-btn font-mono ${selectedLanguage === l.code ? 'active' : ''}`}
                      onClick={() => setSelectedLanguage(l.code)}
                    >
                      {l.code}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                className="btn btn-primary mobile-consult-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry('', 'Sales');
                }}
              >
                <span>Request Technical Consultation</span>
                <ArrowUpRight size={15} style={{ flexShrink: 0 }} />
              </button>

              <div className="mobile-contact-snippet">
                <p className="mobile-contact-text font-mono">
                  Tomsic S.r.l. · Savogna d'Isonzo (GO), Italy<br />
                  Tel: +39 (0481) 882320 · sales@tomsic.it
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Top Technical Utility Bar */
        .top-technical-bar {
          background-color: var(--color-graphite-dark);
          color: #8E9EA9;
          font-size: 0.6875rem;
          letter-spacing: 0.04em;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.4rem 0;
        }
        .top-tech-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tech-meta-left, .tech-meta-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .tech-sep {
          color: rgba(255, 255, 255, 0.2);
        }
        .tech-heritage, .tech-acimit {
          font-size: 0.6875rem;
          color: #B2C0CB;
        }
        .tech-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #B2C0CB;
          transition: color var(--transition-fast);
        }
        .tech-contact-link:hover {
          color: #FFFFFF;
        }

        /* Site Header */
        .site-header {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background-color: var(--color-warm-ivory);
          border-bottom: 1px solid var(--border-hairline);
          z-index: 1000;
          transition: background-color var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }
        .site-header.scrolled {
          background-color: rgba(245, 244, 240, 0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 4px 20px rgba(20, 29, 36, 0.04);
          border-bottom-color: var(--border-subtle);
        }
        .header-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-img {
          height: 36px;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-fast);
        }
        .brand-tag-wrapper {
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--border-subtle);
          padding-left: 1rem;
          line-height: 1.25;
        }
        .brand-heritage-line {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: var(--color-graphite);
          white-space: nowrap;
        }
        .brand-origin-line {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--color-steel-blue);
          white-space: nowrap;
        }

        /* Desktop Nav */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: clamp(1rem, 1.6vw, 2rem);
        }
        .nav-link {
          font-family: var(--font-nav);
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-graphite);
          padding: 0.5rem 0;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          white-space: nowrap;
          transition: color var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--color-muted-bronze);
        }
        .nav-link.active {
          color: var(--color-graphite);
          font-weight: 600;
        }
        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--color-muted-bronze);
        }
        .chevron-icon {
          transition: transform var(--transition-fast);
        }
        .chevron-icon.rotated {
          transform: rotate(180deg);
        }

        /* Dropdown Architecture */
        .nav-dropdown-wrapper {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: -40px;
          width: 620px;
          background-color: #FFFFFF;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-elevated);
          padding: 1.75rem;
          animation: dropFade 0.2s var(--ease-editorial);
          z-index: 1010;
        }
        @keyframes dropFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-inner {
          display: grid;
          grid-template-columns: 210px 1fr;
          gap: 1.75rem;
        }
        .dropdown-summary {
          border-right: 1px solid var(--border-hairline);
          padding-right: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .dropdown-view-all {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-muted-bronze);
          margin-top: 1.25rem;
        }
        .dropdown-items {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .dropdown-card {
          padding: 0.75rem 0.95rem;
          border-radius: var(--radius-xs);
          border: 1px solid transparent;
          transition: all var(--transition-fast);
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }
        .dropdown-card:hover {
          background-color: var(--color-warm-ivory);
          border-color: var(--border-hairline);
        }
        .dropdown-card-index {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-muted-bronze);
          margin-top: 2px;
        }
        .dropdown-card-title {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-graphite);
        }
        .dropdown-card-desc {
          display: block;
          font-size: 0.775rem;
          color: var(--color-steel-blue);
          line-height: 1.35;
          margin-top: 0.2rem;
        }

        /* Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-shrink: 0;
        }
        .lang-selector-wrapper {
          position: relative;
        }
        .lang-toggle-btn {
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          padding: 0.4rem 0.65rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-graphite);
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }
        .lang-toggle-btn:hover {
          border-color: var(--color-graphite);
        }
        .lang-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          right: 0;
          background: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
          box-shadow: var(--shadow-card);
          padding: 0.5rem;
          width: 175px;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          z-index: 1020;
        }
        .lang-option {
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.65rem;
          border-radius: var(--radius-xs);
          font-size: 0.8125rem;
          color: var(--color-graphite);
          cursor: pointer;
          text-align: left;
          width: 100%;
        }
        .lang-option:hover {
          background-color: var(--color-warm-ivory);
        }
        .lang-option.selected {
          font-weight: 600;
          color: var(--color-muted-bronze);
        }
        .mobile-toggle {
          display: none;
          background: #FAF9F6;
          border: 1px solid var(--border-hairline);
          cursor: pointer;
          color: var(--color-graphite);
          padding: 0.5rem;
          min-width: 44px;
          min-height: 44px;
          border-radius: var(--radius-xs);
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast), border-color var(--transition-fast);
        }
        .mobile-toggle:hover {
          background-color: #FFFFFF;
          border-color: var(--color-graphite);
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: var(--header-height);
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 100%;
          height: calc(100vh - var(--header-height));
          height: calc(100dvh - var(--header-height));
          background-color: var(--color-warm-ivory);
          border-top: 1px solid var(--border-hairline);
          z-index: 999;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          padding: 1.25rem 1.15rem 4rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          animation: drawerSlide 0.22s var(--ease-editorial);
        }
        @keyframes drawerSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-drawer-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }
        .mobile-section-label {
          display: block;
          margin-bottom: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--color-muted-bronze);
          font-size: 0.7rem;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          font-family: var(--font-heading);
          font-size: clamp(1.05rem, 4.2vw, 1.2rem);
          font-weight: 700;
          color: var(--color-graphite);
          min-height: 46px;
          padding: 0.55rem 0;
          border-bottom: 1px solid var(--border-hairline);
          text-decoration: none;
          white-space: normal;
          word-break: break-word;
          overflow-wrap: break-word;
          line-height: 1.3;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-nav-link:active {
          color: var(--color-muted-bronze);
        }
        .mobile-sublinks {
          padding-left: 0.25rem;
          margin: 0.35rem 0 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-sublink {
          font-size: clamp(0.85rem, 3.6vw, 0.925rem);
          color: #4D606E;
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          text-decoration: none;
          padding: 0.35rem 0.5rem;
          border-radius: var(--radius-xs);
          transition: background var(--transition-fast), color var(--transition-fast);
          white-space: normal;
          word-break: break-word;
          overflow-wrap: break-word;
          line-height: 1.35;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-sublink:hover, .mobile-sublink:active {
          color: var(--color-graphite);
          background-color: rgba(20, 29, 36, 0.05);
        }
        .mobile-sub-tag {
          font-size: 0.625rem;
          font-weight: 600;
          padding: 2px 5px;
          background-color: rgba(20, 29, 36, 0.05);
          border: 1px solid rgba(20, 29, 36, 0.1);
          color: var(--color-steel-blue);
          border-radius: 2px;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }
        .mobile-drawer-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-subtle);
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-lang-picker {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-lang-btn-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          width: 100%;
          box-sizing: border-box;
        }
        .mobile-lang-btn {
          min-width: 44px;
          min-height: 44px;
          padding: 0.35rem 0.85rem;
          border: 1px solid var(--border-subtle);
          background: #FFFFFF;
          border-radius: var(--radius-xs);
          font-size: 0.85rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
        .mobile-lang-btn.active {
          background-color: var(--color-graphite);
          color: #FFFFFF;
          border-color: var(--color-graphite);
        }
        .mobile-consult-btn {
          width: 100%;
          margin-top: 1.25rem;
          justify-content: center;
          min-height: 48px;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          white-space: normal;
          text-align: center;
          box-sizing: border-box;
        }
        .mobile-contact-snippet {
          margin-top: 1.25rem;
        }
        .mobile-contact-text {
          font-size: 0.75rem;
          color: #647887;
          line-height: 1.5;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        @media (max-width: 1280px) {
          .brand-tag-wrapper {
            display: none;
          }
          .desktop-nav {
            gap: 1.15rem;
          }
          .nav-link {
            font-size: 0.875rem;
            white-space: nowrap;
          }
        }

        @media (max-width: 1140px) {
          .header-cta {
            display: none;
          }
          .desktop-nav {
            gap: 1rem;
          }
        }

        @media (max-width: 1024px) {
          .top-tech-inner {
            flex-direction: column;
            gap: 0.35rem;
            align-items: flex-start;
          }
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: inline-flex;
          }
          .header-cta {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .top-technical-bar {
            display: none;
          }
          .logo-img {
            height: 30px;
          }
          .header-inner {
            gap: 1rem;
          }
        }
        @media (max-width: 380px) {
          .logo-img {
            height: 26px;
          }
        }
      `}</style>
    </>
  );
}
