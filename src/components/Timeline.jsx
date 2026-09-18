import React from 'react';

export default function Timeline({ steps }) {
  return (
    <div className="timeline-container">
      <div className="timeline-line-track" aria-hidden="true" />
      <div className="timeline-grid">
        {steps.map((item, index) => (
          <div key={item.step || index} className="timeline-node">
            <div className="timeline-badge-wrap">
              <span className="timeline-step-badge">{item.step}</span>
            </div>
            <div className="timeline-content card-marine">
              <h3 className="timeline-node-title">{item.title}</h3>
              <p className="timeline-node-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 980px;
          margin: 0 auto;
          padding: 1.5rem 0;
        }
        .timeline-line-track {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 24px;
          width: 2px;
          background: linear-gradient(180deg, var(--color-aqua) 0%, var(--color-violet) 50%, var(--color-lime) 100%);
          opacity: 0.4;
        }
        @media (min-width: 768px) {
          .timeline-line-track {
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .timeline-grid {
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
          position: relative;
          z-index: 2;
        }
        .timeline-node {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          position: relative;
        }
        @media (min-width: 768px) {
          .timeline-node {
            width: 50%;
          }
          .timeline-node:nth-child(odd) {
            align-self: flex-start;
            padding-right: 2.5rem;
            flex-direction: row-reverse;
            text-align: right;
          }
          .timeline-node:nth-child(even) {
            align-self: flex-end;
            padding-left: 2.5rem;
          }
        }
        .timeline-badge-wrap {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--color-navy-surface);
          border: 2px solid var(--color-aqua);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px rgba(3, 196, 197, 0.4);
          z-index: 3;
        }
        @media (min-width: 768px) {
          .timeline-node:nth-child(odd) .timeline-badge-wrap {
            position: absolute;
            right: -24px;
            top: 14px;
          }
          .timeline-node:nth-child(even) .timeline-badge-wrap {
            position: absolute;
            left: -24px;
            top: 14px;
          }
        }
        .timeline-step-badge {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--color-aqua);
        }
        .timeline-content {
          flex: 1;
        }
        .timeline-node-title {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--color-text-main);
        }
        .timeline-node-desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.55;
        }
      `}</style>
    </div>
  );
}
