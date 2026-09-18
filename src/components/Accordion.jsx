import React, { useState } from 'react';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="accordion-root">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id || index}
            className={`accordion-item ${isOpen ? 'accordion-item-open' : ''}`}
          >
            <button
              id={`faq-btn-${item.id}`}
              className="accordion-trigger"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${item.id}`}
            >
              <span className="accordion-question">{item.question}</span>
              <span className="accordion-icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`icon-chevron ${isOpen ? 'icon-rotated' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>

            <div
              id={`faq-content-${item.id}`}
              className={`accordion-panel ${isOpen ? 'panel-open' : ''}`}
              role="region"
              aria-labelledby={`faq-btn-${item.id}`}
            >
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        .accordion-root {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 860px;
          margin: 0 auto;
        }
        .accordion-item {
          background-color: var(--color-navy-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .accordion-item:hover {
          border-color: var(--color-border-marine);
        }
        .accordion-item-open {
          border-color: var(--color-aqua);
          box-shadow: 0 4px 20px rgba(3, 196, 197, 0.15);
        }
        .accordion-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          padding: 1.35rem 1.5rem;
          background: transparent;
          border: none;
          color: var(--color-text-main);
          font-family: var(--font-body);
          font-size: 1.05rem;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
        }
        .accordion-trigger:focus-visible {
          outline: 2px solid var(--color-aqua);
          outline-offset: -2px;
        }
        .accordion-question {
          flex: 1;
        }
        .accordion-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-aqua);
          flex-shrink: 0;
          transition: background-color 180ms ease;
        }
        .accordion-item:hover .accordion-icon {
          background: var(--color-aqua-subtle);
        }
        .icon-chevron {
          transition: transform 220ms var(--ease-out);
        }
        .icon-rotated {
          transform: rotate(180deg);
        }
        .accordion-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 240ms var(--ease-out);
        }
        .accordion-panel.panel-open {
          grid-template-rows: 1fr;
        }
        .accordion-content {
          overflow: hidden;
          padding: 0 1.5rem 1.35rem;
        }
        .accordion-content p {
          color: var(--color-text-muted);
          font-size: 0.98rem;
          line-height: 1.65;
        }
      `}</style>
    </div>
  );
}
