import React, { useEffect, useRef } from 'react';

export default function OceanCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Track mouse over canvas/window
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let step = 0;

    // Dark Mode Wave layers
    const darkWaves = [
      {
        baseY: 0.72,
        amplitude: 24,
        frequency: 0.007,
        speed: 0.015,
        colorStart: 'rgba(3, 196, 197, 0.18)',
        colorEnd: 'rgba(3, 12, 31, 0.95)',
      },
      {
        baseY: 0.78,
        amplitude: 32,
        frequency: 0.005,
        speed: 0.011,
        colorStart: 'rgba(116, 28, 243, 0.22)',
        colorEnd: 'rgba(3, 12, 31, 0.98)',
      },
      {
        baseY: 0.85,
        amplitude: 20,
        frequency: 0.009,
        speed: 0.02,
        colorStart: 'rgba(3, 196, 197, 0.28)',
        colorEnd: '#030c1f',
      },
    ];

    // Light Mode Wave layers
    const lightWaves = [
      {
        baseY: 0.72,
        amplitude: 24,
        frequency: 0.007,
        speed: 0.015,
        colorStart: 'rgba(1, 142, 144, 0.25)',
        colorEnd: 'rgba(243, 247, 252, 0.92)',
      },
      {
        baseY: 0.78,
        amplitude: 32,
        frequency: 0.005,
        speed: 0.011,
        colorStart: 'rgba(94, 17, 214, 0.16)',
        colorEnd: 'rgba(243, 247, 252, 0.96)',
      },
      {
        baseY: 0.85,
        amplitude: 20,
        frequency: 0.009,
        speed: 0.02,
        colorStart: 'rgba(1, 142, 144, 0.38)',
        colorEnd: '#f3f7fc',
      },
    ];

    const render = () => {
      // Smooth lerp mouse influence
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      if (!isReduced) {
        step += 1;
      }

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const activeWaves = isLight ? lightWaves : darkWaves;

      activeWaves.forEach((w, index) => {
        ctx.beginPath();
        const yBase = height * w.baseY;
        ctx.moveTo(0, height);

        // Mouse influence on amplitude and phase
        const mouseShift = (mouseRef.current.x - 0.5) * 40;
        const mouseLift = (mouseRef.current.y - 0.5) * 30;

        for (let x = 0; x <= width; x += 8) {
          const distNorm = Math.abs(x / width - mouseRef.current.x);
          const localizedSwell = Math.exp(-distNorm * 4) * 20;

          const currentY =
            yBase +
            Math.sin(x * w.frequency + step * w.speed + mouseShift * 0.02 + index) *
              (w.amplitude + localizedSwell) +
            mouseLift;

          ctx.lineTo(x, currentY);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, yBase - 60, 0, height);
        grad.addColorStop(0, w.colorStart);
        grad.addColorStop(1, w.colorEnd);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className="ocean-canvas-wrapper" aria-hidden="true">
      <canvas ref={canvasRef} className="ocean-canvas" />
      <style>{`
        .ocean-canvas-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .ocean-canvas {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
