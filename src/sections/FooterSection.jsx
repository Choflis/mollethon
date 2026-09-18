import React from 'react';
import { EVENT_DATA } from '../data/eventData';

export default function FooterSection() {
  return (
    <footer className="footer-root">
      {/* Final Closing CTA Block with Mollendo Sunset Gradient */}
      <div className="footer-cta-wrap">
        <div className="container">
          <div className="footer-cta-card">
            <div className="sunset-glow-layer" aria-hidden="true" />
            <div className="footer-cta-content">
              <span className="badge badge-lime cta-badge">
                Mollendo 2026
              </span>
              <h2 className="footer-cta-title">
                El mar espera tus ideas. ¿Listo para surfear la ola de la innovación?
              </h2>
              <p className="footer-cta-desc">
                Conecta con más de 100 mentes creativas del sur del Perú y construyamos juntos las soluciones que nuestra costa necesita.
              </p>
              <div className="footer-cta-actions">
                <a href="#registro" className="btn btn-lime btn-cta-large">
                  <span>Regístrate ahora</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
              <div className="footer-cta-meta">
                <span>📍 {EVENT_DATA.city}</span>
                <span>•</span>
                <span>📅 {EVENT_DATA.date}</span>
                <span>•</span>
                <span>🎟️ Acceso Libre</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Branding */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-brand-col">
            <a href="#inicio" className="footer-brand-logo">
              <img
                src="/assets/logo-light.png"
                alt="Logo Innovathon Mollendo"
                className="footer-logo-img"
              />
            </a>
            <p className="footer-tagline">
              “{EVENT_DATA.headline}”
            </p>
            <p className="footer-city-info">
              {EVENT_DATA.venue} — {EVENT_DATA.city}
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navegación</h4>
            <ul className="footer-nav-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-el-evento">La Innovathon</a></li>
              <li><a href="#experiencias">Experiencias</a></li>
              <li><a href="#dinamica">Dinámica</a></li>
              <li><a href="#cronograma">Cronograma</a></li>
              <li><a href="#mentores">Mentores</a></li>
              <li><a href="#faq">Preguntas</a></li>
              <li><a href="#registro">Registro</a></li>
            </ul>
          </div>

          <div className="footer-social-col">
            <h4 className="footer-col-title">Comunidad & Redes</h4>
            <p className="footer-social-lead">
              Sigue las novedades, anuncios de retos y fotos del evento en nuestros canales oficiales:
            </p>
            <div className="footer-social-icons">
              <a
                href={EVENT_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Repository"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              <a
                href={EVENT_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href={EVENT_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright-bar">
          <div className="container footer-copyright-inner">
            <p>© 2026 Innovathon Mollendo. Todos los derechos reservados.</p>
            <p className="footer-credits">
              Desarrollado con pasión para Mollendo por <a href="https://github.com/Choflis" target="_blank" rel="noopener noreferrer">Luis Guillermo (@Choflis)</a>.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .footer-root {
          background-color: #020712;
          position: relative;
        }
        .footer-cta-wrap {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        .footer-cta-card {
          position: relative;
          background: linear-gradient(135deg, #091c47 0%, #15113d 50%, #300f2e 100%);
          border: 1px solid var(--color-border-marine);
          border-radius: var(--radius-xl);
          padding: 3.5rem 2rem;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
        }
        @media (min-width: 768px) {
          .footer-cta-card {
            padding: 4.5rem 3.5rem;
          }
        }
        .sunset-glow-layer {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(252, 108, 145, 0.25) 0%, rgba(116, 28, 243, 0.15) 50%, transparent 70%);
          pointer-events: none;
        }
        .footer-cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }
        .cta-badge {
          margin-bottom: 1.25rem;
        }
        .footer-cta-title {
          font-size: clamp(1.85rem, 4vw, 3rem);
          margin-bottom: 1.25rem;
          color: #ffffff;
          line-height: 1.15;
        }
        .footer-cta-desc {
          font-size: 1.1rem;
          color: #e2e8f0;
          line-height: 1.6;
          margin-bottom: 2.25rem;
        }
        .btn-cta-large {
          padding: 1.1rem 2.5rem;
          font-size: 1.1rem;
        }
        .footer-cta-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.85rem;
          margin-top: 2rem;
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 4rem;
        }
        .footer-bottom-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          padding-bottom: 3.5rem;
        }
        @media (min-width: 768px) {
          .footer-bottom-inner {
            grid-template-columns: 1.4fr 1fr 1.2fr;
            gap: 3.5rem;
          }
        }
        .footer-brand-logo {
          display: inline-block;
          margin-bottom: 1rem;
        }
        .footer-logo-img {
          height: 38px;
          width: auto;
        }
        .footer-tagline {
          font-style: italic;
          color: var(--color-aqua);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .footer-city-info {
          font-size: 0.85rem;
          color: var(--color-text-subtle);
        }
        .footer-col-title {
          font-size: 1.05rem;
          color: var(--color-text-main);
          margin-bottom: 1.25rem;
        }
        .footer-nav-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.65rem;
        }
        .footer-nav-list a {
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }
        .footer-nav-list a:hover {
          color: var(--color-aqua);
        }
        .footer-social-lead {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }
        .footer-social-icons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--color-border);
          color: var(--color-text-main);
          transition: all 180ms ease;
        }
        .social-icon-btn:hover {
          background: var(--color-aqua);
          color: var(--color-navy);
          border-color: var(--color-aqua);
          transform: translateY(-2px);
        }
        .footer-copyright-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.5rem 0;
          font-size: 0.82rem;
          color: var(--color-text-subtle);
        }
        .footer-copyright-inner {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 640px) {
          .footer-copyright-inner {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
        .footer-credits a {
          color: var(--color-aqua);
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}
