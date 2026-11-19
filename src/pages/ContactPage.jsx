import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Globe, Building2, Clock } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { globalNetworkData } from '../data/globalNetwork';
import { companyData } from '../data/company';
import { productsData } from '../data/products';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    department: 'Sales',
    product: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header bg-warm-ivory border-bottom-hairline bg-grid-blueprint">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact & Global Network' }]} />

          <div className="contact-header-inner">
            <span className="badge-overline font-mono">DIRECT FACTORY CONTACT</span>
            <h1 className="contact-header-title">Headquarters & Worldwide Network</h1>
            <p className="contact-header-lead">
              Reach our engineering and commercial teams at Savogna d’Isonzo, Italy, or connect with factory-certified agents across more than 30 textile-producing nations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid: HQ Info & Interactive Form */}
      <section className="section bg-white">
        <div className="container">
          <div className="contact-main-grid">
            {/* Left: Department Details & HQ Information */}
            <div className="hq-details-col">
              <span className="badge-overline font-mono">FACTORY HEADQUARTERS</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.25rem' }}>TOMSIC S.r.l.</h2>

              <div className="hq-address-card">
                <MapPin size={22} color="var(--color-accent)" className="hq-icon" />
                <div>
                  <strong>Factory & Administrative Offices</strong>
                  <span>via Malnisce, 3/B</span>
                  <span>34070 Savogna d’Isonzo (GO)</span>
                  <span>Italy — European Union</span>
                  <span className="hq-transport-note font-mono">
                    COORDINATES: 45°52′N 13°34′E · (30 MIN FROM TRIESTE TRS / 90 MIN FROM VENICE VCE)
                  </span>
                </div>
              </div>

              <div className="departments-list">
                <h3 style={{ fontSize: '1.25rem', margin: '1.5rem 0 1rem' }}>Direct Department Contacts</h3>

                {globalNetworkData.supportDepartments.map((dept, idx) => (
                  <div key={idx} className="dept-item-card">
                    <div className="dept-header">
                      <strong className="dept-name">{dept.title}</strong>
                      <a href={`tel:${dept.phone.replace(/[^0-9+]/g, '')}`} className="dept-phone font-mono tabular-nums">
                        <Phone size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        {dept.phone}
                      </a>
                    </div>
                    <a href={`mailto:${dept.email}`} className="dept-email font-mono">{dept.email}</a>
                    <p className="dept-desc">{dept.description}</p>
                  </div>
                ))}
              </div>

              {/* Working Hours */}
              <div className="working-hours-card">
                <Clock size={17} color="var(--color-accent)" />
                <div>
                  <strong>Factory Operating Hours (CET):</strong>
                  <span className="font-mono">Monday – Friday: 08:00 – 12:30 / 13:30 – 17:00</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact & RFQ Form */}
            <div className="contact-form-col">
              <div className="form-wrapper-card">
                {!submitted ? (
                  <>
                    <span className="badge-overline font-mono">DEMO INTERACTION</span>
                    <h3 style={{ fontSize: '1.65rem', marginBottom: '0.4rem' }}>Technical Request & Quotation</h3>
                    <p style={{ color: '#5C7080', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
                      Simulate an equipment inquiry to test the user flow. (Interactive demonstration)
                    </p>

                    <form onSubmit={handleSubmit} className="page-contact-form">
                      <div className="form-row-2">
                        <div className="form-field">
                          <label htmlFor="p-name">Full Name *</label>
                          <input
                            id="p-name"
                            type="text"
                            required
                            placeholder="e.g. Ing. Roberto Bianchi"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="p-company">Company / Spinning Mill *</label>
                          <input
                            id="p-company"
                            type="text"
                            required
                            placeholder="e.g. Al-Nasr Spinning & Weaving"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-row-2">
                        <div className="form-field">
                          <label htmlFor="p-email">Corporate Email *</label>
                          <input
                            id="p-email"
                            type="email"
                            required
                            placeholder="name@mill.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="p-phone">Telephone / WhatsApp *</label>
                          <input
                            id="p-phone"
                            type="tel"
                            required
                            placeholder="+39 ..."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-row-2">
                        <div className="form-field">
                          <label htmlFor="p-country">Country / Production Location *</label>
                          <input
                            id="p-country"
                            type="text"
                            required
                            placeholder="e.g. Italy, India, Turkey, Egypt, USA"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="p-dept">Department *</label>
                          <select
                            id="p-dept"
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          >
                            <option value="Sales">Sales & New Equipment Quotation</option>
                            <option value="Service">After-Sales Technical Service & Calibration</option>
                            <option value="Spares">Spare Parts & Consumables (Glucosil, Guides)</option>
                            <option value="General">General Administration / Direction</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-field">
                        <label htmlFor="p-prod">Product or Division of Interest</label>
                        <select
                          id="p-prod"
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        >
                          <option value="">General Machinery / Metrology Consultation</option>
                          {productsData.map(p => (
                            <option key={p.slug} value={p.name}>{p.name} ({p.code})</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="p-msg">Technical Scope & Production Parameters *</label>
                        <textarea
                          id="p-msg"
                          rows={4}
                          required
                          placeholder="Please indicate yarn count range (Ne, Nm, tex), raw fibre blend (cotton, wool, synthetic), carding machine model to be autolevelled, or specific laboratory testing goals..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <div className="form-submit-row">
                        <div className="privacy-badge">
                          <ShieldCheck size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                          <span>Interactive demonstration prototype. Submissions are processed locally.</span>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                          <Send size={15} />
                          <span>{isSubmitting ? 'Validating...' : 'Simulate Inquiry Submission'}</span>
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="contact-success-state">
                    <div className="success-icon-ring">
                      <CheckCircle2 size={40} color="var(--color-accent)" />
                    </div>
                    <h3 style={{ fontSize: '1.45rem', marginTop: '0.75rem' }}>Demo submission complete — no enquiry was sent.</h3>
                    <p style={{ color: '#384A59', fontSize: '0.9375rem', lineHeight: '1.6', margin: '1rem 0 1.25rem' }}>
                      This website is an independent digital concept and demonstration prototype for Tomsic Advanced Technologies. Your form input was validated locally in your browser for demonstration purposes and has not been transmitted to Tomsic S.r.l.
                    </p>
                    <div className="direct-contact-box" style={{ background: '#FFFFFF', border: '1px solid var(--border-subtle)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-xs)', textAlign: 'left', marginBottom: '1.5rem' }}>
                      <strong style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.35rem' }}>Official Factory Inquiries:</strong>
                      <p style={{ fontSize: '0.8125rem', color: '#5C7080', lineHeight: '1.45', margin: '0 0 0.5rem' }}>
                        For genuine commercial or technical inquiries, contact Tomsic S.r.l. directly via their official headquarters:
                      </p>
                      <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.8125rem', color: '#141D24', flexWrap: 'wrap' }}>
                        <a href="tel:+390481882320" style={{ color: '#141D24', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                          <Phone size={13} style={{ display: 'inline', marginRight: '4px' }} /> +39 (0481) 882320
                        </a>
                        <a href="mailto:sales@tomsic.it" style={{ color: '#141D24', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                          <Mail size={13} style={{ display: 'inline', marginRight: '4px' }} /> sales@tomsic.it
                        </a>
                      </div>
                    </div>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setSubmitted(false)}
                    >
                      <span>Reset Demo Form</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Agents & Distributor Directory (30+ Countries) */}
      <section className="section bg-warm-ivory border-top-hairline">
        <div className="container">
          <div className="section-title-wrap" style={{ marginBottom: '3rem' }}>
            <span className="badge-overline font-mono">WORLDWIDE NETWORK</span>
            <h2>International Representatives in 30+ Countries</h2>
            <p style={{ color: '#647887', fontSize: '1.1rem', marginTop: '0.4rem', maxWidth: '780px' }}>
              Most major spinning markets are supported locally by dedicated agents and factory-certified technical service providers.
            </p>
          </div>

          <div className="agents-regions-grid">
            {globalNetworkData.regions.map((region, rIdx) => (
              <div key={rIdx} className="agent-region-card">
                <span className="drafting-crosshair" style={{ top: '8px', right: '8px' }} />

                <div className="agent-region-header">
                  <Globe size={18} color="#A48256" />
                  <h3 className="agent-region-title">{region.name}</h3>
                </div>

                <div className="agent-countries-table">
                  {region.countries.map((c, cIdx) => (
                    <div key={cIdx} className="agent-country-row">
                      <div className="agent-c-main">
                        <strong className="agent-c-name">{c.name}</strong>
                        <span className="agent-c-city font-mono">{c.city}</span>
                      </div>
                      <div className="agent-c-role">
                        <span>{c.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .contact-header {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .contact-header-inner {
          max-width: 860px;
          margin-top: 1.5rem;
        }
        .contact-header-title {
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          margin: 0.5rem 0 1.25rem;
          line-height: 1.15;
        }
        .contact-header-lead {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #384A59;
        }
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4.5rem;
        }
        .hq-address-card {
          position: relative;
          display: flex;
          gap: 1.25rem;
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          padding: 1.75rem;
          border-radius: var(--radius-sm);
          margin-bottom: 2rem;
          font-size: 0.9375rem;
          line-height: 1.55;
          box-shadow: var(--shadow-card);
        }
        .hq-address-card strong {
          display: block;
          color: var(--color-graphite);
          font-size: 1.05rem;
          margin-bottom: 0.25rem;
        }
        .hq-address-card span {
          display: block;
          color: #4D606E;
        }
        .hq-transport-note {
          font-size: 0.725rem !important;
          color: #5C7080 !important;
          margin-top: 0.6rem;
          line-height: 1.4;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .departments-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .dept-item-card {
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-xs);
          padding: 1.25rem 1.5rem;
          transition: border-color var(--transition-fast);
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .dept-item-card:hover {
          border-color: var(--color-accent);
        }
        .dept-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }
        .dept-header strong {
          font-size: 0.9375rem;
          color: var(--color-graphite);
        }
        .dept-phone {
          font-size: 0.775rem;
          color: #4D606E;
          font-weight: 600;
          text-decoration: none;
          transition: color var(--transition-fast);
          display: inline-flex;
          align-items: center;
        }
        .dept-phone:hover {
          color: var(--color-accent);
        }
        .dept-email {
          display: inline-block;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 0.35rem;
        }
        .dept-desc {
          font-size: 0.8125rem;
          color: #647887;
          line-height: 1.45;
        }
        .working-hours-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-xs);
          margin-top: 1.75rem;
          font-size: 0.8125rem;
        }
        .working-hours-card strong {
          display: block;
          color: var(--color-graphite);
        }
        .working-hours-card span {
          color: #647887;
        }

        /* Form Wrapper */
        .form-wrapper-card {
          position: relative;
          background-color: #FAF9F6;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 2.75rem;
          box-shadow: var(--shadow-card);
        }
        .page-contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .form-field label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-graphite);
        }
        .form-field input, .form-field select, .form-field textarea {
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          padding: 0.75rem 0.95rem;
          border: 1px solid #CFD8DE;
          border-radius: var(--radius-xs);
          font-family: var(--font-body);
          font-size: 1rem;
          background-color: #FFFFFF;
          color: var(--color-graphite);
          transition: border-color var(--transition-fast);
        }
        .form-field input:focus, .form-field select:focus, .form-field textarea:focus {
          border-color: var(--color-accent);
          outline: none;
        }
        .form-submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-hairline);
          gap: 1rem;
        }
        .privacy-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.775rem;
          color: #647887;
        }
        .contact-success-state {
          text-align: center;
          padding: 2rem 1rem;
        }
        .success-icon-ring {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 72px;
          height: 72px;
          background-color: #F8F5F0;
          border-radius: 50%;
        }

        /* Agents Regions Grid */
        .agents-regions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .agent-region-card {
          position: relative;
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          padding: 2.25rem 2rem;
          box-shadow: var(--shadow-card);
        }
        .agent-region-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-hairline);
        }
        .agent-region-title {
          font-size: 1.2rem;
          color: var(--color-graphite);
        }
        .agent-countries-table {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .agent-country-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-hairline);
        }
        .agent-country-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .agent-c-name {
          display: block;
          font-size: 0.9375rem;
          color: var(--color-graphite);
        }
        .agent-c-city {
          display: block;
          font-size: 0.75rem;
          color: #647887;
        }
        .agent-c-role {
          font-size: 0.775rem;
          color: #4D606E;
          text-align: right;
          max-width: 240px;
        }

        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .agents-regions-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .dept-item-card {
            padding: 1.1rem 1rem;
          }
          .dept-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.35rem;
            margin-bottom: 0.4rem;
          }
          .dept-phone {
            font-size: 0.8125rem;
            color: var(--color-graphite);
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
          .form-wrapper-card {
            padding: 1.5rem 1.15rem;
          }
          .form-submit-row {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          .form-submit-row .btn {
            width: 100%;
            justify-content: center;
          }
          .hq-address-card {
            flex-direction: column;
            gap: 0.75rem;
            padding: 1.25rem 1rem;
          }
          .agent-country-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
          .agent-c-role {
            text-align: left;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
