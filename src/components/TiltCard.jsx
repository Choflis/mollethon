import React, { useRef, useState } from 'react';

export default function TiltCard({ children, className = '', glowColor = 'rgba(3, 196, 197, 0.15)' }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    // Disable on reduced motion or coarse pointers
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max tilt angle (subtle: 6deg)
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 100ms ease-out',
    });

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 350ms var(--ease-out)',
    });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper interactive ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div
        className="tilt-card-glare"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, ${glowColor} 0%, rgba(255,255,255,0) 65%)`,
          opacity: glarePos.opacity,
        }}
        aria-hidden="true"
      />
      {children}
      <style>{`
        .tilt-card-wrapper {
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .tilt-card-glare {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          transition: opacity 250ms ease;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}
