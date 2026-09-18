import React from 'react';
import OceanCanvas from '../components/OceanCanvas';
import HeroCastillo3D from '../components/HeroCastillo3D';
import { EVENT_DATA } from '../data/eventData';

export default function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      {/* Background Interactive Ocean Wave Canvas */}
      <OceanCanvas />

      {/* Atmospheric Radial Gradients */}
      <div className="hero-atmosphere hero-atmosphere-top" aria-hidden="true" />
      <div className="hero-atmosphere hero-atmosphere-right" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-grid-layout">
          {/* Left Column: Headline, Hook, Actions, Highlights */}
          <div className="hero-content">
            {/* Metadata Badges */}
            <div className="hero-meta-row">
              <span className="badge badge-aqua">
                <span className="live-dot" />
                {EVENT_DATA.city}
              </span>
              <span className="badge badge-lime">
                {EVENT_DATA.date}
              </span>
            </div>

            {/* Main Title (Headline) */}
            <h1 className="hero-title">
              {EVENT_DATA.headline}
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              {EVENT_DATA.subtitle}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="hero-actions">
              <a href="#registro" className="btn btn-primary btn-hero-cta">
                <span>Quiero participar</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a href="#castillo-forga" className="btn btn-secondary">
                <span>Explorar el Castillo</span>
              </a>
            </div>

            {/* Floating Live Metric Highlights */}
            <div className="hero-highlights-strip">
              <div className="highlight-item">
                <span className="highlight-num">48h</span>
                <span className="highlight-text">Co-creación intensiva</span>
              </div>
              <div className="highlight-divider" />
              <div className="highlight-item">
                <span className="highlight-num">3+</span>
                <span className="highlight-text">Retos de ciudad y mar</span>
              </div>
              <div className="highlight-divider" />
              <div className="highlight-item">
                <span className="highlight-num">100%</span>
                <span className="highlight-text">Gratuito y descentralizado</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated 3D Castillo Forga */}
          <div className="hero-castillo-column">
            <HeroCastillo3D />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          padding-top: calc(var(--nav-height) + 2rem);
          padding-bottom: 4.5rem;
          overflow: hidden;
          background: linear-gradient(180deg, var(--color-hero-bg-top) 0%, var(--color-navy) 100%);
        }
        .hero-atmosphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-atmosphere-top {
          top: -10%;
          left: 15%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(116, 28, 243, 0.18) 0%, rgba(116, 28, 243, 0) 70%);
        }
        .hero-atmosphere-right {
          top: 25%;
          right: -5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(3, 196, 197, 0.18) 0%, rgba(3, 196, 197, 0) 70%);
        }
        .hero-container {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .hero-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 992px) {
          .hero-grid-layout {
            grid-template-columns: 1fr 1.05fr;
            gap: 2.5rem;
          }
        }
        @media (min-width: 1280px) {
          .hero-grid-layout {
            grid-template-columns: 1fr 1.15fr;
            gap: 3.5rem;
          }
        }
        .hero-content {
          max-width: 640px;
        }
        .hero-castillo-column {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-meta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .live-dot {
          width: 8px;
          height: 8px;
          background-color: var(--color-aqua);
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px var(--color-aqua);
        }
        .hero-title {
          font-size: clamp(2.35rem, 4.8vw, 4.2rem);
          line-height: 1.08;
          margin-bottom: 1.5rem;
          color: var(--color-text-main);
          letter-spacing: -0.035em;
        }
        .hero-subtitle {
          font-size: clamp(1.05rem, 1.6vw, 1.25rem);
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 2.25rem;
          max-width: 52ch;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 3rem;
        }
        .btn-hero-cta {
          padding: 1rem 2.25rem;
          font-size: 1.05rem;
        }
        .hero-highlights-strip {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.75rem;
          padding-top: 1.75rem;
          border-top: 1px solid var(--color-border);
        }
        .highlight-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .highlight-num {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.8rem;
          color: var(--color-aqua);
          line-height: 1;
        }
        .highlight-text {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }
        .highlight-divider {
          display: none;
          width: 1px;
          height: 36px;
          background: var(--color-border);
        }
        @media (min-width: 640px) {
          .highlight-divider {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
