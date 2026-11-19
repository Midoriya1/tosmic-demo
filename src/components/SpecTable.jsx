import React from 'react';

export function SpecTable({ specifications = [], title = 'Technical Specifications' }) {
  if (!specifications || specifications.length === 0) return null;

  return (
    <div className="spec-table-container">
      {title && (
        <div className="spec-table-header">
          <h4 className="spec-table-title">{title}</h4>
          <span className="spec-meta-tag font-mono">CERTIFIED TOLERANCE: CLASS 0.5</span>
        </div>
      )}
      <div className="spec-table-responsive">
        <table className="spec-table">
          <thead>
            <tr>
              <th scope="col" style={{ width: '38%' }}>Parameter</th>
              <th scope="col">Design Specification / Engineering Standard</th>
            </tr>
          </thead>
          <tbody>
            {specifications.map((spec, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td className="spec-param">{spec.parameter}</td>
                <td className="spec-val tabular-nums">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .spec-table-container {
          margin: 1.5rem 0;
          background-color: #FFFFFF;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          overflow: hidden;
          box-shadow: var(--shadow-subtle);
        }
        .spec-table-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.5rem;
          background-color: #FAF9F6;
          border-bottom: 1px solid var(--border-hairline);
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .spec-table-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-graphite);
          margin: 0;
        }
        .spec-meta-tag {
          font-size: 0.6875rem;
          color: var(--color-muted-bronze);
          font-weight: 600;
          letter-spacing: 0.08em;
        }
        .spec-table-responsive {
          width: 100%;
          overflow-x: auto;
        }
        .spec-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.8875rem;
        }
        .spec-table th {
          background-color: var(--color-warm-ivory);
          color: var(--color-graphite);
          font-weight: 700;
          font-size: 0.775rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.85rem 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          font-family: var(--font-body);
        }
        .spec-table td {
          padding: 0.9rem 1.5rem;
          border-bottom: 1px solid var(--border-hairline);
          vertical-align: top;
          line-height: 1.55;
        }
        .spec-table tr:last-child td {
          border-bottom: none;
        }
        .spec-param {
          color: var(--color-graphite);
          font-weight: 600;
        }
        .spec-val {
          color: #384A59;
        }
        .row-odd {
          background-color: #FAF9F6;
        }
        .row-even {
          background-color: #FFFFFF;
        }

        @media (max-width: 640px) {
          .spec-table-header {
            padding: 0.85rem 1rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.35rem;
          }
          .spec-table {
            min-width: 320px;
            font-size: 0.8125rem;
          }
          .spec-table th, .spec-table td {
            padding: 0.75rem 0.85rem;
          }
          .spec-table th:first-child, .spec-table td:first-child {
            width: 44%;
          }
        }
      `}</style>
    </div>
  );
}
