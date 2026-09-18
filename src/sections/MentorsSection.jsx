import React from 'react';
import { MENTORS_DATA, ALLIES_DATA } from '../data/mentorsData';
import TiltCard from '../components/TiltCard';

export default function MentorsSection() {
  return (
    <section id="mentores" className="section mentors-section">
      <div className="container">
        {/* Mentors Header */}
        <div className="section-header text-center">
          <h2 className="section-title">
            Mentores & Guías de Innovación
          </h2>
          <p className="section-subtitle">
            Especialistas de la industria que acompañarán a los equipos durante las 48 horas de prototipado.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="mentors-grid">
          {MENTORS_DATA.map((mentor) => (
            <TiltCard key={mentor.id} className="mentor-card-tilt">
              <div className="card-marine mentor-card-inner">
                <div className="mentor-avatar-wrap">
                  <img
                    src={mentor.avatar}
                    alt={`Avatar de ${mentor.name}`}
                    className="mentor-avatar-img"
                    loading="lazy"
                  />
                  {mentor.isPlaceholder && (
                    <span className="mentor-ph-tag">Por Confirmar</span>
                  )}
                </div>

                <div className="mentor-info">
                  <span className="badge badge-aqua mentor-area-badge">
                    {mentor.area}
                  </span>
                  <h3 className="mentor-name">{mentor.name}</h3>
                  <p className="mentor-role">{mentor.role}</p>
                  <p className="mentor-org">{mentor.organization}</p>
                  <p className="mentor-bio">{mentor.bio}</p>

                  <div className="mentor-tags-row">
                    {mentor.tags.map((t, i) => (
                      <span key={i} className="mentor-tech-tag">#{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Callout: Postulación de Mentores */}
        <div className="mentor-cta-banner card-marine">
          <div className="mentor-cta-text">
            <h3>¿Quieres guiar a la próxima generación de innovadores?</h3>
            <p>Buscamos profesionales en tecnología, diseño, biología marina y negocios para sumarse a la red de mentores.</p>
          </div>
          <a href="#registro" className="btn btn-lime">
            Postular como Mentor
          </a>
        </div>

        {/* Allies & Communities Showcase */}
        <div className="allies-block">
          <h3 className="allies-heading text-center">
            Aliados Estratégicos & Ecosistema
          </h3>
          <p className="allies-sub text-center">
            Instituciones, universidades y comunidades que impulsan el desarrollo de Mollendo y la región sur.
          </p>

          <div className="allies-categories-grid">
            {ALLIES_DATA.map((group, gIdx) => (
              <div key={gIdx} className="ally-category-card card-marine">
                <h4 className="ally-category-title">{group.category}</h4>
                <div className="ally-items-list">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="ally-item-pill">
                      <span className="ally-logo-glyph">{item.logoText}</span>
                      <div className="ally-item-meta">
                        <span className="ally-name">{item.name}</span>
                        <span className="ally-type">{item.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mentors-section {
          background-color: #040e24;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .mentors-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }
        @media (min-width: 640px) {
          .mentors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .mentors-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .mentor-card-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 1.75rem;
        }
        .mentor-avatar-wrap {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 1.25rem;
          border: 2px solid var(--color-aqua);
          box-shadow: 0 4px 16px rgba(3, 196, 197, 0.25);
        }
        .mentor-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .mentor-ph-tag {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(3, 12, 31, 0.85);
          color: var(--color-lime);
          font-size: 0.6rem;
          font-weight: 800;
          text-align: center;
          padding: 2px 0;
          text-transform: uppercase;
        }
        .mentor-area-badge {
          margin-bottom: 0.65rem;
          font-size: 0.7rem;
        }
        .mentor-name {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
          color: var(--color-text-main);
        }
        .mentor-role {
          font-size: 0.9rem;
          color: var(--color-aqua);
          font-weight: 600;
          margin-bottom: 0.2rem;
        }
        .mentor-org {
          font-size: 0.82rem;
          color: var(--color-text-subtle);
          margin-bottom: 0.85rem;
        }
        .mentor-bio {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex: 1;
        }
        .mentor-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .mentor-tech-tag {
          font-size: 0.75rem;
          color: var(--color-lime);
          background: rgba(184, 218, 2, 0.1);
          padding: 0.2rem 0.55rem;
          border-radius: var(--radius-sm);
          font-weight: 600;
        }
        .mentor-cta-banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 2.25rem;
          border-color: var(--color-border-marine);
          background: linear-gradient(135deg, rgba(7, 21, 54, 0.9) 0%, rgba(11, 31, 72, 0.7) 100%);
          margin-bottom: 5rem;
          text-align: center;
        }
        @media (min-width: 768px) {
          .mentor-cta-banner {
            flex-direction: row;
            text-align: left;
          }
        }
        .mentor-cta-text h3 {
          font-size: 1.3rem;
          margin-bottom: 0.35rem;
        }
        .mentor-cta-text p {
          font-size: 0.95rem;
        }
        .allies-block {
          padding-top: 1rem;
        }
        .allies-heading {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        .allies-sub {
          margin-bottom: 2.5rem;
          margin-left: auto;
          margin-right: auto;
        }
        .allies-categories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .allies-categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .ally-category-card {
          padding: 1.75rem;
        }
        .ally-category-title {
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          color: var(--color-aqua);
        }
        .ally-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .ally-item-pill {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
        }
        .ally-logo-glyph {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.75rem;
          padding: 0.35rem 0.65rem;
          background-color: var(--color-aqua-subtle);
          color: var(--color-aqua);
          border-radius: var(--radius-sm);
          border: 1px solid rgba(3, 196, 197, 0.25);
          letter-spacing: 0.05em;
        }
        .ally-name {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text-main);
        }
        .ally-type {
          display: block;
          font-size: 0.78rem;
          color: var(--color-text-muted);
        }
      `}</style>
    </section>
  );
}
