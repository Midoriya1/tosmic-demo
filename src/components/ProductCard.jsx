import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function ProductCard({ product, variant = 'default' }) {
  if (!product) return null;

  return (
    <article className={`editorial-product-card ${variant}`}>
      <Link to={`/products/${product.slug}`} className="product-card-media-wrap">
        <img
          src={product.primaryImage}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
        {product.badge && (
          <span className="product-card-badge font-mono">{product.badge}</span>
        )}
      </Link>

      <div className="product-card-content">
        <div className="product-card-header font-mono">
          <span className="product-card-cat">{product.category}</span>
          <span className="product-card-code">{product.code}</span>
        </div>

        <h3 className="product-card-title">
          <Link to={`/products/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        <p className="product-card-desc">
          {product.tagline || product.description}
        </p>

        <div className="product-card-footer">
          <Link to={`/products/${product.slug}`} className="product-card-cta">
            <span>Explore Engineering Specifications</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        .editorial-product-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color var(--transition-normal), box-shadow var(--transition-normal), transform var(--transition-normal);
          position: relative;
        }
        .editorial-product-card:hover {
          border-color: var(--color-accent);
          box-shadow: var(--shadow-card);
          transform: translateY(-2px);
        }
        .product-card-media-wrap {
          position: relative;
          width: 100%;
          height: 250px;
          background-color: #FAF9F6;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.75rem;
          border-bottom: 1px solid var(--border-hairline);
          overflow: hidden;
        }
        .product-card-img {
          max-height: 100%;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-smooth);
        }
        .editorial-product-card:hover .product-card-img {
          transform: scale(1.03);
        }
        .product-card-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background-color: var(--color-graphite);
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-xs);
        }
        .product-card-content {
          padding: 1.65rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .product-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }
        .product-card-cat {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-steel-blue);
        }
        .product-card-code {
          font-size: 0.725rem;
          font-weight: 600;
          color: var(--color-graphite);
          background-color: var(--color-warm-ivory);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-xs);
        }
        .product-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin-bottom: 0.6rem;
          line-height: 1.25;
        }
        .product-card-title a {
          color: inherit;
        }
        .product-card-title a:hover {
          color: var(--color-accent);
        }
        .product-card-desc {
          font-size: 0.8875rem;
          line-height: 1.58;
          color: #4D606E;
          margin-bottom: 1.25rem;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .product-card-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--border-hairline);
        }
        .product-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-graphite);
          transition: color var(--transition-fast);
        }
        .product-card-cta svg {
          transition: transform var(--transition-fast);
        }
        .product-card-cta:hover {
          color: var(--color-accent);
        }
        .product-card-cta:hover svg {
          transform: translate(2px, -2px);
        }
      `}</style>
    </article>
  );
}
