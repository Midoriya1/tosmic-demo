import React, { useState } from 'react';
import { ArrowUpRight, Calendar, MapPin, Tag } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { newsData } from '../data/news';

export function NewsPage({ onOpenEnquiry }) {
  const [filterType, setFilterType] = useState('all');

  const filteredNews = filterType === 'all'
    ? newsData
    : newsData.filter(n => n.type.toLowerCase().includes(filterType.toLowerCase()));

  return (
    <div className="news-page">
      {/* Header */}
      <section className="news-header bg-warm-ivory border-bottom-hairline bg-grid-blueprint relative">
        <div className="container relative z-10">
          <Breadcrumbs items={[{ label: 'News & Events' }]} />

          <div className="news-header-inner">
            <div className="header-badge-row">
              <span className="badge-overline">Dispatches and exhibitions</span>
              <span className="badge-subtag font-mono">Archive</span>
            </div>
            <h1 className="news-header-title">News, Exhibitions & Technological Milestones</h1>
            <p className="news-header-lead">
              Stay informed on upcoming international textile machinery fairs, new metrology product introductions, and field reports from Tomsic S.r.l.
            </p>

            <div className="news-filter-tabs">
              <button
                className={`news-tab ${filterType === 'all' ? 'active' : ''}`}
                onClick={() => setFilterType('all')}
              >
                All Announcements ({newsData.length})
              </button>
              <button
                className={`news-tab ${filterType === 'event' ? 'active' : ''}`}
                onClick={() => setFilterType('event')}
              >
                Trade Fairs & Exhibitions (2)
              </button>
              <button
                className={`news-tab ${filterType === 'product' ? 'active' : ''}`}
                onClick={() => setFilterType('product')}
              >
                Product Releases (2)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="section bg-white">
        <div className="container">
          <div className="news-articles-stack">
            {filteredNews.map(item => (
              <article key={item.slug} className="news-article-card relative" id={item.slug}>
                <div className="news-article-media">
                  <img src={item.image} alt={item.title} className="news-article-img" loading="lazy" />
                  <span className="news-badge-type">{item.type}</span>
                </div>

                <div className="news-article-body">
                  <div className="news-article-meta font-mono">
                    <span className="meta-cell">
                      <Calendar size={14} color="#AA8B62" />
                      <span>{item.date}</span>
                    </span>
                    <span className="meta-cell">
                      <MapPin size={14} color="#647887" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <h2 className="news-article-title">{item.title}</h2>

                  <div className="news-article-text">
                    {item.content.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="news-article-action">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => onOpenEnquiry && onOpenEnquiry(item.title, 'Sales')}
                    >
                      <span>Connect Regarding this Event</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .news-header {
          padding-top: 2rem;
          padding-bottom: 3.5rem;
        }
        .news-header-inner {
          max-width: 860px;
          margin-top: 1.5rem;
        }
        .news-header-title {
          font-size: clamp(2.25rem, 4.5vw, 3.25rem);
          margin: 0.5rem 0 1.25rem;
          line-height: 1.15;
        }
        .news-header-lead {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #384A59;
          margin-bottom: 2rem;
        }
        .news-filter-tabs {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .news-tab {
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          padding: 0.55rem 1.125rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 600;
          color: #4D606E;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .news-tab:hover {
          border-color: #17232D;
          color: #17232D;
        }
        .news-tab.active {
          background-color: #17232D;
          color: #FFFFFF;
          border-color: #17232D;
        }
        .news-articles-stack {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .news-article-card {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 3.5rem;
          background-color: #FAF9F6;
          border: 1px solid var(--border-hairline);
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }
        .news-article-media {
          position: relative;
          height: 100%;
          min-height: 320px;
          background-color: #FFFFFF;
          border-right: 1px solid var(--border-hairline);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow: hidden;
        }
        .news-article-img {
          max-width: 100%;
          max-height: 280px;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: var(--radius-xs);
        }
        .news-badge-type {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: rgba(23, 35, 45, 0.9);
          color: #FFFFFF;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-xs);
          z-index: 2;
        }
        .news-article-body {
          padding: 2.5rem 2.5rem 2.5rem 0;
          display: flex;
          flex-direction: column;
        }
        .news-article-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 0.8125rem;
          color: #647887;
          flex-wrap: wrap;
        }
        .meta-cell {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .news-article-title {
          font-size: 1.65rem;
          margin-bottom: 1rem;
          line-height: 1.25;
          color: #17232D;
          font-family: var(--font-heading);
        }
        .news-article-text p {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #384A59;
          margin-bottom: 1rem;
        }
        .news-article-action {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-hairline);
        }

        @media (max-width: 1024px) {
          .news-article-card {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .news-article-body {
            padding: 0 1.5rem 1.5rem 1.5rem;
          }
          .news-article-media {
            height: 240px;
            min-height: auto;
          }
        }
        @media (max-width: 640px) {
          .news-filter-tabs {
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 0.5rem;
            width: 100%;
            -webkit-overflow-scrolling: touch;
          }
          .news-tab {
            white-space: nowrap;
            flex-shrink: 0;
            min-height: 42px;
          }
          .news-article-media {
            height: 220px;
            padding: 1.25rem 1.5rem;
            border-right: none;
            border-bottom: 1px solid var(--border-hairline);
          }
          .news-article-img {
            max-height: 180px;
          }
          .news-badge-type {
            top: 0.75rem;
            right: 0.75rem;
          }
          .news-article-body {
            padding: 0 1.15rem 1.25rem;
          }
          .news-article-title {
            font-size: 1.3rem;
          }
          .news-article-action .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
