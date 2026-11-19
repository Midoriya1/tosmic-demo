import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function SectionHeading({
  overline,
  title,
  subtitle,
  linkText,
  linkHref,
  onLinkClick,
  dark = false,
  align = 'left'
}) {
  return (
    <div className={`editorial-section-heading align-${align} ${dark ? 'dark' : ''}`}>
      <div className="heading-content-col">
        {overline && (
          <span className={`badge-overline ${dark ? 'dark' : ''}`}>
            {overline}
          </span>
        )}
        <h2 className="heading-main-title">{title}</h2>
        {subtitle && <p className="heading-subtitle">{subtitle}</p>}
      </div>

      {(linkText && (linkHref || onLinkClick)) && (
        <div className="heading-action-col">
          {linkHref ? (
            <Link to={linkHref} className={`editorial-action-link ${dark ? 'dark' : ''}`}>
              <span>{linkText}</span>
              <ArrowUpRight size={16} />
            </Link>
          ) : (
            <button type="button" onClick={onLinkClick} className={`editorial-action-link ${dark ? 'dark' : ''}`}>
              <span>{linkText}</span>
              <ArrowUpRight size={16} />
            </button>
          )}
        </div>
      )}

      <style>{`
        .editorial-section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }
        .editorial-section-heading.align-center {
          text-align: center;
          justify-content: center;
        }
        .heading-content-col {
          max-width: 760px;
        }
        .heading-main-title {
          font-family: var(--font-heading);
          color: var(--color-graphite);
          margin-top: 0.35rem;
        }
        .editorial-section-heading.dark .heading-main-title {
          color: #FFFFFF;
        }
        .heading-subtitle {
          margin-top: 0.85rem;
          font-size: 1.15rem;
          line-height: 1.6;
          color: #4D606E;
        }
        .editorial-section-heading.dark .heading-subtitle {
          color: #B2C0CB;
        }
        .editorial-action-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-graphite);
          padding-bottom: 0.25rem;
          border-bottom: 2px solid var(--color-accent);
          background: none;
          border-top: none;
          border-left: none;
          border-right: none;
          cursor: pointer;
          transition: color var(--transition-fast), border-color var(--transition-fast);
        }
        .editorial-action-link:hover {
          color: var(--color-accent);
        }
        .editorial-action-link.dark {
          color: #FFFFFF;
        }
        .editorial-action-link.dark:hover {
          color: var(--color-accent);
        }
        @media (max-width: 768px) {
          .editorial-section-heading {
            margin-bottom: 2.25rem;
          }
          .heading-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
