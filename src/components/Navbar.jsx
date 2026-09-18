import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-el-evento', label: 'La Innovathon' },
    { href: '#experiencias', label: 'Experiencias' },
    { href: '#dinamica', label: 'Dinámica' },
    { href: '#cronograma', label: 'Cronograma' },
    { href: '#mentores', label: 'Mentores' },
    { href: '#faq', label: 'Preguntas' },
  ];

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Logo */}
        <a href="#inicio" className="navbar-brand" aria-label="Innovathon Mollendo - Inicio">
          <img
            src="/assets/logo-light.png"
            alt="Logo Innovathon Mollendo"
            className="brand-logo-img"
          />
          <span className="brand-badge">2026</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navegación principal">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <a href="#registro" className="btn btn-primary nav-cta">
            <span>Regístrate</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={toggleRef}
            id="mobile-toggle"
            className="mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <span className={`hamburger-bar ${isOpen ? 'open' : ''}`} />
            <span className={`hamburger-bar ${isOpen ? 'open' : ''}`} />
            <span className={`hamburger-bar ${isOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-nav"
        className={`mobile-drawer ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-drawer-header">
          <img
            src="/assets/logo-light.png"
            alt="Innovathon Mollendo"
            className="mobile-logo-img"
          />
          <button
            className="mobile-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="mobile-nav-link" onClick={handleLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <a
            href="#registro"
            className="btn btn-primary btn-block"
            onClick={handleLinkClick}
          >
            Regístrate ahora
          </a>
          <p className="mobile-drawer-tagline">“Las ideas también tienen marea.”</p>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          z-index: 1000;
          transition: background-color 220ms var(--ease-out), border-color 220ms var(--ease-out), backdrop-filter 220ms var(--ease-out);
          border-bottom: 1px solid transparent;
        }
        .navbar-scrolled {
          background-color: var(--color-navy-glass);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom-color: var(--color-border-marine);
          box-shadow: 0 4px 20px rgba(3, 12, 31, 0.4);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .brand-logo-img {
          height: 38px;
          width: auto;
          object-fit: contain;
        }
        .brand-badge {
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
          background-color: var(--color-aqua-subtle);
          color: var(--color-aqua);
          border: 1px solid rgba(3, 196, 197, 0.3);
          letter-spacing: 0.05em;
        }
        .desktop-nav {
          display: none;
        }
        @media (min-width: 960px) {
          .desktop-nav {
            display: block;
          }
        }
        .nav-list {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          list-style: none;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-muted);
          position: relative;
          padding: 0.35rem 0;
        }
        .nav-link:hover {
          color: var(--color-aqua);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--color-aqua);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 180ms var(--ease-out);
          border-radius: var(--radius-full);
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .nav-cta {
          display: none;
          padding: 0.65rem 1.35rem;
          font-size: 0.88rem;
        }
        @media (min-width: 640px) {
          .nav-cta {
            display: inline-flex;
          }
        }
        .mobile-toggle-btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          padding: 10px;
          color: var(--color-text-main);
          transition: background-color 160ms ease, border-color 160ms ease;
        }
        @media (min-width: 960px) {
          .mobile-toggle-btn {
            display: none;
          }
        }
        .hamburger-bar {
          display: block;
          height: 2px;
          width: 100%;
          background-color: var(--color-text-main);
          border-radius: 2px;
          transition: transform 220ms var(--ease-out), opacity 220ms ease;
        }
        .hamburger-bar.open:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger-bar.open:nth-child(2) {
          opacity: 0;
        }
        .hamburger-bar.open:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        
        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(85vw, 360px);
          background-color: #05102a;
          border-left: 1px solid var(--color-border-marine);
          box-shadow: -8px 0 32px rgba(3, 12, 31, 0.8);
          z-index: 1002;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          transform: translateX(100%);
          transition: transform 280ms var(--ease-drawer);
          visibility: hidden;
        }
        .mobile-drawer.open {
          transform: translateX(0);
          visibility: visible;
        }
        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border);
        }
        .mobile-logo-img {
          height: 32px;
        }
        .mobile-close-btn {
          background: transparent;
          border: none;
          color: var(--color-text-muted);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.25rem;
          line-height: 1;
        }
        .mobile-close-btn:hover {
          color: var(--color-aqua);
        }
        .mobile-nav-list {
          list-style: none;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .mobile-nav-link {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-text-main);
          display: block;
          padding: 0.4rem 0;
        }
        .mobile-nav-link:hover {
          color: var(--color-aqua);
        }
        .mobile-drawer-footer {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border);
        }
        .btn-block {
          width: 100%;
          text-align: center;
        }
        .mobile-drawer-tagline {
          margin-top: 1rem;
          font-size: 0.85rem;
          color: var(--color-text-subtle);
          text-align: center;
          font-style: italic;
        }
        .mobile-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(3, 12, 31, 0.75);
          backdrop-filter: blur(4px);
          z-index: 1001;
        }
      `}</style>
    </header>
  );
}
