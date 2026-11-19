import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs({ items = [] }) {
  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumb">
      <ol className="breadcrumbs-list">
        <li className="breadcrumbs-item">
          <Link to="/" className="breadcrumbs-link" title="Home">
            <Home size={14} />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="breadcrumbs-item">
              <ChevronRight size={13} className="breadcrumbs-separator" />
              {isLast || !item.href ? (
                <span className="breadcrumbs-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className="breadcrumbs-link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>

      <style>{`
        .breadcrumbs-nav {
          padding: 1rem 0;
          font-size: 0.8125rem;
          color: #647887;
        }
        .breadcrumbs-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.35rem;
          list-style: none;
        }
        .breadcrumbs-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }
        .breadcrumbs-link {
          color: #647887;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          transition: color var(--transition-fast);
        }
        .breadcrumbs-link:hover {
          color: #17232D;
        }
        .breadcrumbs-separator {
          color: #A4B2BC;
          flex-shrink: 0;
        }
        .breadcrumbs-current {
          color: #17232D;
          font-weight: 600;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      `}</style>
    </nav>
  );
}
