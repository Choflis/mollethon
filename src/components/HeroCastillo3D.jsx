import React, { useState, useRef, useEffect } from 'react';

export default function HeroCastillo3D() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth subtle 3D tilt (-9deg to +9deg)
    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 11;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const transformStyle = prefersReducedMotion
    ? 'none'
    : `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.025 : 1}, ${isHovered ? 1.025 : 1}, 1)`;

  return (
    <div
      ref={containerRef}
      className="hero-castillo-wrapper"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Modelo 3D interactivo del Castillo Forga de Mollendo"
    >
      {/* Outer Entrance Layer: Glides in majestically from the right side */}
      <div className="hero-castillo-entrance">
        {/* Dynamic 3D Scene Root */}
        <div
          className="hero-castillo-scene"
          style={{
            transform: transformStyle,
            transition: isHovered
              ? 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)'
              : 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Ambient Oceanic Backlight Glow */}
          <div className="castillo-ambient-glow" aria-hidden="true" />

          {/* Dynamic Rotating Beacon Light Beam */}
          <div className="lighthouse-beam" aria-hidden="true" />

          {/* Main 3D Castillo Forga Visual Asset */}
          <div className="castillo-figure-container">
            <img
              src="/assets/castillo-3d-cutout.png"
              alt="Castillo Forga de Mollendo en 3D sobre los acantilados marinos"
              className="castillo-3d-img"
              loading="eager"
            />

            {/* Shimmer Water Reflection Overlay */}
            <div className="castillo-water-reflection" aria-hidden="true" />
          </div>

          {/* Floating 3D Depth Badge 1: Heritage & Location */}
          <div
            className="floating-chip chip-location"
            style={{
              transform: prefersReducedMotion
                ? 'none'
                : `translateZ(38px) translate(${rotation.y * -0.55}px, ${rotation.x * 0.55}px)`
            }}
          >
            <span className="chip-icon">🏰</span>
            <div className="chip-text-group">
              <strong className="chip-title">Castillo Forga</strong>
              <span className="chip-subtitle">Mollendo • Costa Sur</span>
            </div>
          </div>

          {/* Floating 3D Depth Badge 2: Innovation Beacon Status */}
          <div
            className="floating-chip chip-status"
            style={{
              transform: prefersReducedMotion
                ? 'none'
                : `translateZ(48px) translate(${rotation.y * 0.65}px, ${rotation.x * -0.65}px)`
            }}
          >
            <span className="live-pulse-dot" />
            <div className="chip-text-group">
              <strong className="chip-title">Faro de Innovación</strong>
              <span className="chip-subtitle">48h Hackathon Marina</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-castillo-wrapper {
          position: relative;
          width: 100%;
          max-width: 640px; /* Enhanced grand size */
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;
        }

        /* Entrance Animation: Glide in from the side (ocean direction) with Exponential Deceleration */
        .hero-castillo-entrance {
          position: relative;
          width: 100%;
          animation: castleEntranceFromSide 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;
          will-change: transform, opacity;
        }

        @keyframes castleEntranceFromSide {
          0% {
            opacity: 0;
            transform: translateX(85px) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .hero-castillo-scene {
          position: relative;
          width: 100%;
          transform-style: preserve-3d;
          animation: castleFloat 6.5s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes castleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(0.6deg);
          }
        }

        /* Ambient Glow behind Castle */
        .castillo-ambient-glow {
          position: absolute;
          top: 15%;
          left: 10%;
          width: 80%;
          height: 70%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(3, 196, 197, 0.38) 0%,
            rgba(116, 28, 243, 0.28) 45%,
            transparent 70%
          );
          filter: blur(45px);
          pointer-events: none;
          z-index: 0;
          animation: ambientPulse 4s ease-in-out infinite alternate;
        }

        @keyframes ambientPulse {
          0% {
            opacity: 0.6;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        /* Lighthouse Beam Effect */
        .lighthouse-beam {
          position: absolute;
          top: 8%;
          left: 45%;
          width: 380px;
          height: 55px;
          background: linear-gradient(
            90deg,
            rgba(3, 196, 197, 0.85) 0%,
            rgba(3, 196, 197, 0.35) 40%,
            transparent 100%
          );
          transform-origin: left center;
          transform: rotate(-32deg);
          clip-path: polygon(0% 40%, 100% 0%, 100% 100%, 0% 60%);
          filter: blur(6px);
          opacity: 0.85;
          pointer-events: none;
          z-index: 1;
          animation: beamOscillate 5.5s ease-in-out infinite alternate;
        }

        @keyframes beamOscillate {
          0% {
            opacity: 0.45;
            transform: rotate(-36deg) scaleX(0.85);
          }
          100% {
            opacity: 0.95;
            transform: rotate(-27deg) scaleX(1.18);
          }
        }

        /* Image Container */
        .castillo-figure-container {
          position: relative;
          z-index: 2;
          width: 100%;
          filter: drop-shadow(0 25px 35px rgba(3, 12, 31, 0.65))
                  drop-shadow(0 0 30px rgba(3, 196, 197, 0.25));
        }

        .castillo-3d-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: var(--radius-lg);
          transition: filter 0.3s ease;
          mask-image: radial-gradient(ellipse 92% 92% at 50% 50%, black 78%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 92% 92% at 50% 50%, black 78%, transparent 100%);
        }

        /* Floating Chips (Depth Parallax) */
        .floating-chip {
          position: absolute;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.6rem 1.05rem;
          background: rgba(3, 12, 31, 0.82);
          border: 1px solid var(--color-border-marine);
          border-radius: var(--radius-full);
          backdrop-filter: blur(14px);
          box-shadow: var(--shadow-md);
          pointer-events: none;
          white-space: nowrap;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        :root[data-theme="light"] .floating-chip {
          background: rgba(255, 255, 255, 0.92);
          border-color: rgba(3, 196, 197, 0.4);
          box-shadow: 0 10px 28px rgba(3, 196, 197, 0.18), 0 2px 8px rgba(0, 10, 30, 0.08);
        }

        .chip-location {
          top: 12%;
          left: -4%;
        }

        .chip-status {
          bottom: 10%;
          right: -4%;
        }

        .chip-icon {
          font-size: 1.2rem;
        }

        .chip-text-group {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .chip-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-main);
          font-family: var(--font-display);
        }

        .chip-subtitle {
          font-size: 0.72rem;
          color: var(--color-text-muted);
        }

        .live-pulse-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: var(--color-lime);
          box-shadow: 0 0 12px var(--color-lime);
          animation: dotPulse 1.8s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.6;
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .hero-castillo-wrapper {
            max-width: 540px;
          }
        }

        @media (max-width: 991px) {
          .hero-castillo-wrapper {
            max-width: 460px;
            margin-top: 2.5rem;
          }
          .chip-location {
            left: 2%;
            top: 6%;
          }
          .chip-status {
            right: 2%;
            bottom: 4%;
          }
        }

        @media (max-width: 480px) {
          .hero-castillo-wrapper {
            max-width: 330px;
          }
          .floating-chip {
            padding: 0.45rem 0.8rem;
          }
          .chip-title {
            font-size: 0.75rem;
          }
          .chip-subtitle {
            font-size: 0.65rem;
          }
        }

        /* Respect Accessibility & Reduced Motion Preferences */
        @media (prefers-reduced-motion: reduce) {
          .hero-castillo-entrance {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .hero-castillo-scene {
            animation: none !important;
            transform: none !important;
          }
          .castillo-ambient-glow {
            animation: none !important;
          }
          .lighthouse-beam {
            animation: none !important;
          }
          .live-pulse-dot {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
