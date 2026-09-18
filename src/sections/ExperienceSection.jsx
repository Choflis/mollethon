import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import TiltCard from '../components/TiltCard';

export default function ExperienceSection() {
  const getAccentGlow = (color) => {
    switch (color) {
      case 'lime':
        return 'rgba(184, 218, 2, 0.22)';
      case 'violet':
        return 'rgba(116, 28, 243, 0.25)';
      case 'coral':
        return 'rgba(252, 108, 145, 0.22)';
      default:
        return 'rgba(3, 196, 197, 0.22)';
    }
  };

  const getTagClass = (color) => {
    switch (color) {
      case 'lime':
        return 'badge-lime';
      case 'violet':
        return 'badge-violet';
      case 'coral':
        return 'badge-coral';
      default:
        return 'badge-aqua';
    }
  };

  return (
    <section id="experiencias" className="section experience-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            ¿Qué vas a vivir en Mollendo?
          </h2>
          <p className="section-subtitle">
            Seis dimensiones de una experiencia diseñada para impulsar tu potencial creativo y tecnológico frente al océano.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="experience-bento-grid">
          {EVENT_DATA.experiences.map((exp, index) => (
            <TiltCard
              key={exp.id}
              className={`bento-card bento-card-${index}`}
              glowColor={getAccentGlow(exp.color)}
            >
              <div className="card-marine card-experience-inner">
                <div className="exp-top-row">
                  <span className={`badge ${getTagClass(exp.color)}`}>
                    {exp.tag}
                  </span>
                  <span className="exp-index">0{index + 1}</span>
                </div>

                <div className="exp-content">
                  <h3 className="exp-title">{exp.title}</h3>
                  <h4 className="exp-highlight">{exp.highlight}</h4>
                  <p className="exp-desc">{exp.description}</p>
                </div>

                <div className="exp-decor-line" style={{ background: `var(--color-${exp.color})` }} />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background-color: var(--color-navy);
          position: relative;
        }
        .experience-bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .experience-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .experience-bento-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          /* Subtle asymmetric hierarchy */
          .bento-card-0, .bento-card-4 {
            grid-column: span 1;
          }
        }
        .card-experience-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 250px;
          border-radius: var(--radius-lg);
          padding: 2rem;
        }
        .exp-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        .exp-index {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.15);
        }
        .exp-title {
          font-size: 1.6rem;
          margin-bottom: 0.35rem;
          color: var(--color-text-main);
        }
        .exp-highlight {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-aqua);
          margin-bottom: 0.85rem;
        }
        .exp-desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        .exp-decor-line {
          height: 3px;
          width: 48px;
          border-radius: var(--radius-full);
          margin-top: 1.75rem;
          transform: scaleX(1);
          transform-origin: left;
          transition: transform 240ms var(--ease-out);
        }
        .card-experience-inner:hover .exp-decor-line {
          transform: scaleX(1.75);
        }
        .badge-coral {
          background-color: rgba(252, 108, 145, 0.15);
          color: var(--color-coral);
          border-color: rgba(252, 108, 145, 0.3);
        }
      `}</style>
    </section>
  );
}
