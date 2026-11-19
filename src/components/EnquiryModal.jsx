import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Mail, Phone } from 'lucide-react';
import { productsData } from '../data/products';

export function EnquiryModal({ isOpen, onClose, initialProduct = '', initialDepartment = 'Sales' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    department: initialDepartment,
    product: initialProduct,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, product: initialProduct }));
    }
    if (initialDepartment) {
      setFormData(prev => ({ ...prev, department: initialDepartment }));
    }
  }, [initialProduct, initialDepartment, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const ref = `TMS-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(ref);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title" data-lenis-prevent>
      <div className="modal-window" onClick={(e) => e.stopPropagation()} data-lenis-prevent>
        <span className="drafting-crosshair" style={{ top: '8px', left: '8px' }} />
        <span className="drafting-crosshair" style={{ top: '8px', right: '8px' }} />

        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={18} />
        </button>

        <div className="modal-header">
          <div className="header-badge-row">
            <span className="badge-overline font-mono">DIRECT FACTORY DOSSIER</span>
            <span className="badge-subtag">SAVOGNA D’ISONZO HQ</span>
          </div>
          <h3 id="modal-title" className="modal-title">
            Technical Enquiry & Quotation
          </h3>
          <p className="modal-subtitle">
            Connect directly with our engineering and commercial teams in Savogna d’Isonzo, Italy.
          </p>
        </div>

        <div className="modal-body-scrollable" data-lenis-prevent>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="enquiry-name">Full Name *</label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    placeholder="e.g. Ing. Marco Rossi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiry-company">Company / Spinning Mill *</label>
                  <input
                    id="enquiry-company"
                    type="text"
                    required
                    placeholder="e.g. Milano Yarns S.p.A."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiry-email">Corporate Email *</label>
                  <input
                    id="enquiry-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiry-phone">Phone / WhatsApp *</label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    required
                    placeholder="+39 012 345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiry-country">Country / Mill Location *</label>
                  <input
                    id="enquiry-country"
                    type="text"
                    required
                    placeholder="e.g. Italy, Turkey, India, Egypt"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiry-department">Target Department *</label>
                  <select
                    id="enquiry-department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  >
                    <option value="Sales">Sales & New Equipment Quotation</option>
                    <option value="Service">After-Sales Technical Service & Calibration</option>
                    <option value="Spares">Spare Parts & Consumables (Glucosil, Guides)</option>
                    <option value="General">General Inquiries / Management</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="enquiry-product">Product of Interest</label>
                <select
                  id="enquiry-product"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                >
                  <option value="">Select a product or solution category...</option>
                  <optgroup label="Laboratory Solutions">
                    {productsData.filter(p => p.categorySlug === 'laboratory').map(p => (
                      <option key={p.slug} value={p.name}>{p.name} ({p.code})</option>
                    ))}
                  </optgroup>
                  <optgroup label="Spinning Solutions">
                    {productsData.filter(p => p.categorySlug === 'spinning').map(p => (
                      <option key={p.slug} value={p.name}>{p.name} ({p.code})</option>
                    ))}
                  </optgroup>
                  <optgroup label="Sugar Solutions">
                    {productsData.filter(p => p.categorySlug === 'sugar').map(p => (
                      <option key={p.slug} value={p.name}>{p.name} ({p.code})</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label htmlFor="enquiry-message">Technical Parameters & Application Scope *</label>
                <textarea
                  id="enquiry-message"
                  rows={3}
                  required
                  placeholder="Please specify yarn count range (Ne, Nm, tex), fiber types (cotton, wool, synthetic), carding machine model to be autolevelled, or specific laboratory testing goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="form-footer">
                <div className="privacy-note">
                  <ShieldCheck size={16} color="#A48256" style={{ flexShrink: 0 }} />
                  <span>Confidential industrial dossier. Direct Savogna d'Isonzo HQ dispatch.</span>
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  <Send size={15} />
                  <span>{isSubmitting ? 'Transmitting...' : 'Transmit Enquiry'}</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="submission-success">
              <div className="success-icon-wrap">
                <CheckCircle2 size={44} color="#A48256" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem', fontFamily: 'var(--font-heading)' }}>Enquiry Registered Successfully</h3>
              <p className="success-ref font-mono">
                Reference Code: <strong className="tabular-nums">{referenceId}</strong>
              </p>
              <p style={{ margin: '1rem 0 1.25rem', color: '#445766', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Thank you, <strong>{formData.name}</strong>. Your technical dossier has been routed to the <strong>Tomsic {formData.department} Division</strong> in Savogna d'Isonzo. An application engineer will follow up within 24 business hours.
              </p>

              <div className="direct-contact-box">
                <strong style={{ fontSize: '0.85rem' }}>Direct Factory Dispatch:</strong>
                <div style={{ display: 'flex', gap: '1.25rem', marginTop: '0.4rem', fontSize: '0.8125rem', color: '#141D24', flexWrap: 'wrap' }}>
                  <span className="font-mono tabular-nums"><Phone size={13} style={{ display: 'inline', marginRight: '4px' }} /> +39 (0481) 882320</span>
                  <span><Mail size={13} style={{ display: 'inline', marginRight: '4px' }} /> {formData.department === 'Service' ? 'service@tomsic.it' : formData.department === 'Spares' ? 'spares@tomsic.it' : 'sales@tomsic.it'}</span>
                </div>
              </div>

              <button className="btn btn-primary" onClick={handleReset} style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
                Close Confirmation
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          width: 100%;
          max-width: 100%;
          height: 100%;
          background-color: rgba(13, 19, 24, 0.82);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 2rem 1rem;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }
        .modal-window {
          background-color: #FFFFFF;
          border-radius: var(--radius-sm);
          max-width: 680px;
          width: 100%;
          position: relative;
          padding: 2.25rem 2.25rem 1.75rem;
          box-shadow: var(--shadow-modal);
          border: 1px solid var(--border-subtle);
          animation: modalAppear 0.25s var(--ease-editorial);
          max-height: calc(100vh - 4rem);
          display: flex;
          flex-direction: column;
          margin: auto;
          overflow: hidden;
        }
        @keyframes modalAppear {
          from { opacity: 0; transform: scale(0.97) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: #FAF9F6;
          border: 1px solid var(--border-hairline);
          cursor: pointer;
          color: #647887;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-xs);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
          z-index: 10;
        }
        .modal-close-btn:hover {
          background-color: var(--color-graphite);
          border-color: var(--color-graphite);
          color: #FFFFFF;
        }
        .modal-header {
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-hairline);
          flex-shrink: 0;
          padding-right: 2.75rem;
        }
        .modal-title {
          font-size: 1.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--color-graphite);
          margin: 0.35rem 0 0.25rem;
          line-height: 1.2;
        }
        .modal-subtitle {
          font-size: 0.875rem;
          color: #5C7080;
          line-height: 1.45;
          margin: 0;
        }
        .modal-body-scrollable {
          overflow-y: auto;
          overflow-x: hidden;
          padding-right: 0.5rem;
          flex-grow: 1;
          -webkit-overflow-scrolling: touch;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .form-group label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-graphite);
        }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          padding: 0.65rem 0.85rem;
          border: 1px solid #CFD8DE;
          border-radius: var(--radius-xs);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          color: var(--color-graphite);
          background-color: #FAFAFA;
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--color-muted-bronze);
          background-color: #FFFFFF;
          outline: none;
        }
        .form-footer {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .privacy-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.775rem;
          color: #647887;
          line-height: 1.35;
        }
        .submission-success {
          text-align: center;
          padding: 0.75rem 0;
        }
        .success-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: #F8F5F0;
          margin-bottom: 0.5rem;
        }
        .success-ref {
          font-size: 0.85rem;
          background-color: var(--color-warm-ivory);
          display: inline-block;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-xs);
          border: 1px solid #E2DFD8;
          color: var(--color-graphite);
          margin-top: 0.5rem;
        }
        .direct-contact-box {
          background-color: #FAF9F6;
          border: 1px solid #EAE6DF;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-xs);
          text-align: left;
        }
        @media (max-width: 640px) {
          .modal-backdrop {
            padding: 1rem 0.5rem;
            align-items: flex-start;
          }
          .modal-window {
            padding: 1.5rem 1.15rem 1.15rem;
            margin: 0.5rem auto;
            max-height: calc(100vh - 2rem);
          }
          .modal-header {
            margin-bottom: 0.85rem;
            padding-bottom: 0.75rem;
            padding-right: 2.75rem;
            padding-top: 0.25rem;
          }
          .modal-title {
            font-size: 1.25rem;
            margin-top: 0.45rem;
          }
          .modal-subtitle {
            font-size: 0.8125rem;
          }
          .form-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .form-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          .form-footer .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
