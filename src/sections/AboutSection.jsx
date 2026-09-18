import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import TiltCard from '../components/TiltCard';

export default function AboutSection() {
  return (
    <section id="sobre-el-evento" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-narrative">
            <h2 className="section-title">
              Innovar hoy para transformar el mañana
            </h2>
            <p className="about-lead">
              {EVENT_DATA.manifesto.paragraphs[0]}
            </p>
            <p className="about-body">
              {EVENT_DATA.manifesto.paragraphs[1]}
            </p>

            {/* Structured Insights Cards */}
            <div className="about-insights-list">
              <div className="insight-card">
                <div className="insight-indicator" />
                <div>
                  <h3 className="insight-heading">¿Para quién es?</h3>
                  <p className="insight-text">
                    Estudiantes, desarrolladores, diseñadores, investigadores marinos, creadores y líderes comunitarios con ganas de resolver desafíos reales.
                  </p>
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-indicator" style={{ backgroundColor: 'var(--color-lime)' }} />
                <div>
                  <h3 className="insight-heading">¿Por qué Mollendo?</h3>
                  <p className="insight-text">
                    {EVENT_DATA.manifesto.whyMollendo}
                  </p>
                </div>
              </div>

              <div className="insight-card">
                <div className="insight-indicator" style={{ backgroundColor: 'var(--color-violet)' }} />
                <div>
                  <h3 className="insight-heading">¿Qué proyectos nacerán?</h3>
                  <p className="insight-text">
                    Plataformas cívicas, monitoreo ambiental marino, aplicaciones turísticas inteligentes, logística pesquera y soluciones comunitarias sostenibles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual & Brand Pillars Column */}
          <div className="about-visuals">
            {/* Coastal Identity Card */}
            <TiltCard className="about-photo-card">
              <div className="photo-card-inner">
                <img
                  src="/assets/mollendo-coast.jpg"
                  alt="Costa y mar de Mollendo"
                  className="about-coast-photo"
                />
                <div className="photo-overlay">
                  <span className="photo-caption">Litoral de Mollendo — Sede Oficial</span>
                </div>
              </div>
            </TiltCard>

            {/* 5 Brand Pillars Grid (from Page 7 of Brandkit) */}
            <div className="pillars-grid">
              {EVENT_DATA.brandPillars.map((pillar) => (
                <div key={pillar.id} className="pillar-card card-marine">
                  <div className="pillar-icon-wrap">
                    <img src={pillar.icon} alt={`Icono ${pillar.title}`} className="pillar-icon-img" />
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--color-section-alt);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1.1fr 1fr;
            gap: 4.5rem;
          }
        }
        .about-lead {
          font-size: 1.25rem;
          color: var(--color-text-main);
          font-weight: 600;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .about-body {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: 2.25rem;
        }
        .about-insights-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .insight-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          background-color: var(--color-navy-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
        }
        .insight-indicator {
          width: 4px;
          height: 36px;
          border-radius: 4px;
          background-color: var(--color-aqua);
          flex-shrink: 0;
          margin-top: 4px;
        }
        .insight-heading {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 0.35rem;
        }
        .insight-text {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.55;
        }
        .about-visuals {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .about-photo-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--color-border-marine);
          box-shadow: var(--shadow-lg);
        }
        .photo-card-inner {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .about-coast-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 600ms var(--ease-out);
        }
        .about-photo-card:hover .about-coast-photo {
          transform: scale(1.04);
        }
        .photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(3, 12, 31, 0.85) 100%);
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
        }
        .photo-caption {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .pillars-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .pillar-card {
          padding: 1.25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .pillar-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
          border: 1px solid var(--color-border);
        }
        .pillar-icon-img {
          width: 32px;
          height: 32px;
          object-fit: contain;
          filter: drop-shadow(0 2px 6px rgba(3, 196, 197, 0.3));
        }
        .pillar-title {
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
        }
        .pillar-desc {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
}
