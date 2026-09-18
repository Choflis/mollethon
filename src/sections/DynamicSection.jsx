import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import Timeline from '../components/Timeline';

export default function DynamicSection() {
  return (
    <section id="dinamica" className="section dynamic-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            ¿Cómo se vive la Innovathon?
          </h2>
          <p className="section-subtitle">
            Un recorrido de 7 fases continuas donde cada hora cuenta para transformar una idea en una solución real.
          </p>
        </div>

        {/* Interactive Progress Timeline */}
        <Timeline steps={EVENT_DATA.timeline} />
      </div>

      <style>{`
        .dynamic-section {
          background-color: #040d21;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
      `}</style>
    </section>
  );
}
