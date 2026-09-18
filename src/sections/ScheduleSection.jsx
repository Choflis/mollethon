import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../data/scheduleData';

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(SCHEDULE_DATA[0].dayId);

  const currentDayData = SCHEDULE_DATA.find((d) => d.dayId === activeDay) || SCHEDULE_DATA[0];

  const getTypeBadge = (type) => {
    switch (type) {
      case 'keynote':
        return { label: 'Inauguración / Demo', color: 'badge-lime' };
      case 'mentoria':
        return { label: 'Mentoría 1:1', color: 'badge-violet' };
      case 'taller':
        return { label: 'Workshop', color: 'badge-aqua' };
      case 'premiacion':
        return { label: 'Premiación', color: 'badge-lime' };
      case 'networking':
        return { label: 'Comunidad', color: 'badge-aqua' };
      default:
        return { label: 'Desarrollo / Actividad', color: 'badge-aqua' };
    }
  };

  return (
    <section id="cronograma" className="section schedule-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Cronograma de Actividades
          </h2>
          <p className="section-subtitle">
            Tres días de inmersión total frente al océano. Los horarios son editables desde nuestro archivo de datos centralizado.
          </p>
        </div>

        {/* Day Selection Tabs */}
        <div className="schedule-tabs" role="tablist" aria-label="Días del evento">
          {SCHEDULE_DATA.map((day) => {
            const isActive = day.dayId === activeDay;
            return (
              <button
                key={day.dayId}
                role="tab"
                id={`tab-${day.dayId}`}
                aria-selected={isActive}
                aria-controls={`panel-${day.dayId}`}
                className={`schedule-tab-btn ${isActive ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveDay(day.dayId)}
              >
                <span className="tab-day-label">{day.dayLabel}</span>
                <span className="tab-day-theme">{day.theme}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel for Selected Day */}
        <div
          id={`panel-${currentDayData.dayId}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentDayData.dayId}`}
          className="schedule-panel"
        >
          <div className="schedule-list">
            {currentDayData.activities.map((act, index) => {
              const badge = getTypeBadge(act.type);
              return (
                <div key={index} className="schedule-item card-marine">
                  <div className="schedule-time-col">
                    <span className="schedule-time">{act.time}</span>
                    <span className={`badge ${badge.color} schedule-type-badge`}>
                      {badge.label}
                    </span>
                  </div>

                  <div className="schedule-details-col">
                    <h3 className="schedule-item-title">{act.title}</h3>
                    <p className="schedule-item-desc">{act.description}</p>
                    <div className="schedule-speaker-row">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="speaker-icon">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span className="schedule-speaker">{act.speaker}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .schedule-section {
          background-color: var(--color-navy);
          position: relative;
        }
        .schedule-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
        }
        .schedule-tab-btn {
          flex: 1 1 240px;
          max-width: 340px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1.25rem 1.5rem;
          background-color: var(--color-navy-card);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 200ms var(--ease-out);
          text-align: left;
        }
        .schedule-tab-btn:hover {
          border-color: var(--color-border-marine);
          transform: translateY(-2px);
        }
        .tab-btn-active {
          border-color: var(--color-aqua);
          background-color: #0c2656;
          box-shadow: 0 4px 20px rgba(3, 196, 197, 0.2);
        }
        .tab-day-label {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--color-text-main);
          margin-bottom: 0.35rem;
        }
        .tab-day-theme {
          font-size: 0.82rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }
        .tab-btn-active .tab-day-label {
          color: var(--color-aqua);
        }
        .schedule-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .schedule-item {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          padding: 1.75rem;
          border-radius: var(--radius-lg);
        }
        @media (min-width: 680px) {
          .schedule-item {
            grid-template-columns: 200px 1fr;
            gap: 2rem;
            align-items: start;
          }
        }
        .schedule-time-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.6rem;
        }
        .schedule-time {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--color-text-main);
        }
        .schedule-type-badge {
          font-size: 0.72rem;
        }
        .schedule-item-title {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--color-text-main);
        }
        .schedule-item-desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 0.85rem;
        }
        .schedule-speaker-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.82rem;
          color: var(--color-aqua);
          font-weight: 600;
        }
        .speaker-icon {
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
}
