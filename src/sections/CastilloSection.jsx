import React, { useState } from 'react';
import TiltCard from '../components/TiltCard';

export default function CastilloSection() {
  const [activeHotspot, setActiveHotspot] = useState(0);

  const hotspots = [
    {
      id: 1,
      title: "Torreón del Faro Digital",
      subtitle: "Mirador de Innovación",
      tag: "Conectividad",
      x: 62, // % on image
      y: 28,
      description: "Punto más alto del Castillo Forga. En la Innovathon simboliza la visión de futuro: transmisión de datos, redes comunitarias y hackathon sin fronteras."
    },
    {
      id: 2,
      title: "Acantilado del Pacífico",
      subtitle: "Laboratorio Marino en Vivo",
      tag: "Economía Azul",
      x: 35,
      y: 68,
      description: "Las rocas donde rompen las olas de Mollendo. Espacio de pruebas para prototipos de sensores IoT de oleaje, telemetría marina y monitoreo biológico."
    },
    {
      id: 3,
      title: "Baluarte Histórico Forga",
      subtitle: "Patrimonio & Memoria",
      tag: "Identidad",
      x: 72,
      y: 42,
      description: "Construido sobre las rocas del litoral a inicios del siglo XX. Representa las raíces de Mollendo: una ciudad que mira al mar con resiliencia y orgullo."
    }
  ];

  return (
    <section id="castillo-forga" className="section castillo-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge badge-aqua">
            Símbolo de Mollendo
          </span>
          <h2 className="section-title">
            El Castillo Forga: Donde la Historia se Une al Futuro
          </h2>
          <p className="section-subtitle">
            El emblema arquitectónico sobre las rocas de Mollendo cobra vida como faro de innovación, ciencia marina y tecnología comunitaria.
          </p>
        </div>

        <div className="castillo-interactive-layout">
          {/* Visual Interactive Artwork with Hotspots */}
          <TiltCard className="castillo-tilt-card" glowColor="rgba(3, 196, 197, 0.25)">
            <div className="castillo-canvas-card card-marine">
              <div className="castillo-image-container">
                <img
                  src="/assets/castillo-forga.jpg"
                  alt="Ilustración dinámica del Castillo Forga frente al mar de Mollendo"
                  className="castillo-main-image"
                />

                {/* Atmospheric Wave Shimmer Overlay */}
                <div className="castillo-shimmer-layer" aria-hidden="true" />

                {/* Interactive Hotspot Beacons */}
                {hotspots.map((spot, idx) => {
                  const isActive = activeHotspot === idx;
                  return (
                    <button
                      key={spot.id}
                      type="button"
                      className={`hotspot-beacon ${isActive ? 'beacon-active' : ''}`}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      onClick={() => setActiveHotspot(idx)}
                      aria-label={`Ver información de: ${spot.title}`}
                    >
                      <span className="beacon-core" />
                      <span className="beacon-wave" />
                      <span className="beacon-label">{spot.id}</span>
                    </button>
                  );
                })}

                {/* Real-time Coastal Telemetry HUD */}
                <div className="castillo-hud-overlay">
                  <div className="hud-metric">
                    <span className="hud-label">Marea Mollendo</span>
                    <strong className="hud-val">Pleamar Activa</strong>
                  </div>
                  <div className="hud-divider" />
                  <div className="hud-metric">
                    <span className="hud-label">Agua del Pacífico</span>
                    <strong className="hud-val">19.5 °C</strong>
                  </div>
                  <div className="hud-divider" />
                  <div className="hud-metric">
                    <span className="hud-label">Viento del Sur</span>
                    <strong className="hud-val">14 Nudos</strong>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Dynamic Hotspot Information Panel */}
          <div className="castillo-details-panel card-marine">
            <div className="hotspot-tab-bar">
              {hotspots.map((spot, idx) => (
                <button
                  key={spot.id}
                  type="button"
                  className={`hotspot-nav-tab ${activeHotspot === idx ? 'tab-active' : ''}`}
                  onClick={() => setActiveHotspot(idx)}
                >
                  <span className="tab-num">0{spot.id}</span>
                  <span className="tab-title-text">{spot.title}</span>
                </button>
              ))}
            </div>

            <div className="hotspot-detail-content">
              <div className="detail-meta-row">
                <span className="badge badge-lime">{hotspots[activeHotspot].tag}</span>
                <span className="detail-subtitle">{hotspots[activeHotspot].subtitle}</span>
              </div>
              <h3 className="detail-title">{hotspots[activeHotspot].title}</h3>
              <p className="detail-desc">{hotspots[activeHotspot].description}</p>

              <div className="detail-quote-box">
                <p>
                  “El Castillo Forga nos recuerda que las grandes obras nacen desafiando el oleaje. La Innovathon lleva ese mismo espíritu a cada línea de código y solución construida.”
                </p>
              </div>

              <div className="detail-actions">
                <a href="#registro" className="btn btn-primary btn-spot-cta">
                  <span>Construir en Mollendo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .castillo-section {
          background-color: var(--color-section-alt);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          position: relative;
        }
        .castillo-interactive-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }
        @media (min-width: 960px) {
          .castillo-interactive-layout {
            grid-template-columns: 1.3fr 1fr;
            gap: 3rem;
          }
        }
        .castillo-canvas-card {
          padding: 0.75rem;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: #051433;
        }
        .castillo-image-container {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: calc(var(--radius-xl) - 4px);
          overflow: hidden;
        }
        .castillo-main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .castillo-shimmer-layer {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 30%, rgba(3, 196, 197, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        
        /* Interactive Beacons */
        .hotspot-beacon {
          position: absolute;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          border: none;
          background: transparent;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .beacon-core {
          width: 14px;
          height: 14px;
          background-color: var(--color-aqua);
          border: 2px solid #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 14px var(--color-aqua);
          z-index: 2;
          transition: transform 180ms ease, background-color 180ms ease;
        }
        .beacon-wave {
          position: absolute;
          width: 32px;
          height: 32px;
          border: 2px solid var(--color-aqua);
          border-radius: 50%;
          animation: waterPulse 2.2s infinite;
          opacity: 0.8;
        }
        .beacon-label {
          position: absolute;
          top: -24px;
          background: rgba(3, 12, 31, 0.85);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 1px 6px;
          border-radius: 10px;
          border: 1px solid var(--color-aqua);
          opacity: 0;
          transition: opacity 160ms ease;
        }
        .hotspot-beacon:hover .beacon-label,
        .beacon-active .beacon-label {
          opacity: 1;
        }
        .beacon-active .beacon-core {
          background-color: var(--color-lime);
          border-color: var(--color-navy);
          transform: scale(1.3);
          box-shadow: 0 0 16px var(--color-lime);
        }
        .beacon-active .beacon-wave {
          border-color: var(--color-lime);
        }

        /* Coastal HUD */
        .castillo-hud-overlay {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          background: rgba(3, 12, 31, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 0.65rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 5;
        }
        .hud-metric {
          display: flex;
          flex-direction: column;
        }
        .hud-label {
          font-size: 0.7rem;
          color: var(--color-text-subtle);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .hud-val {
          font-size: 0.85rem;
          color: var(--color-aqua);
          font-weight: 700;
        }
        .hud-divider {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.12);
        }

        /* Information Panel */
        .castillo-details-panel {
          padding: 2.25rem;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          background: var(--color-navy-card);
        }
        .hotspot-tab-bar {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.75rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border);
        }
        @media (min-width: 600px) {
          .hotspot-tab-bar {
            flex-direction: row;
          }
        }
        .hotspot-nav-tab {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 0.85rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-muted);
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 180ms ease;
          text-align: left;
        }
        .hotspot-nav-tab:hover {
          border-color: var(--color-aqua);
          color: var(--color-text-main);
        }
        .tab-active {
          background: var(--color-aqua-subtle);
          border-color: var(--color-aqua);
          color: var(--color-aqua);
        }
        .tab-num {
          font-family: var(--font-display);
          font-weight: 800;
        }
        .detail-meta-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }
        .detail-subtitle {
          font-size: 0.85rem;
          color: var(--color-text-subtle);
          font-weight: 600;
        }
        .detail-title {
          font-size: 1.5rem;
          margin-bottom: 0.85rem;
          color: var(--color-text-main);
        }
        .detail-desc {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .detail-quote-box {
          background: rgba(3, 196, 197, 0.06);
          border: 1px solid var(--color-border-marine);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          margin-bottom: 1.75rem;
        }
        .detail-quote-box p {
          font-size: 0.88rem;
          color: var(--color-text-main);
          font-style: italic;
          line-height: 1.5;
        }
        .btn-spot-cta {
          padding: 0.85rem 1.75rem;
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
}
