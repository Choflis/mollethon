import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'input'
  const [visible, setVisible] = useState(false);
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);
  const requestRef = useRef();

  useEffect(() => {
    // Detect touch device or reduced motion preference
    const isTouch = window.matchMedia('(hover: none) or (pointer: coarse)').matches;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || isReduced) {
      setIsTouchOrReduced(true);
      return;
    }

    const handleMouseMove = (e) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      // Inspect target element for contextual cursor states
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive') ||
        target.closest('summary')
      ) {
        setCursorState('hover');
      } else if (
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select')
      ) {
        setCursorState('input');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(requestRef.current);
    };
  }, [visible]);

  // Spring / Lerp animation loop for smooth trailing fluid effect
  useEffect(() => {
    if (isTouchOrReduced) return;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      setPos((prev) => ({
        x: lerp(prev.x, targetPos.x, 0.22),
        y: lerp(prev.y, targetPos.y, 0.22),
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [targetPos, isTouchOrReduced]);

  if (isTouchOrReduced || !visible) return null;

  return (
    <div
      className={`ocean-cursor ocean-cursor-${cursorState}`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
      }}
      aria-hidden="true"
    >
      <div className="ocean-cursor-dot" />
      <div className="ocean-cursor-ring" />
      <style>{`
        .ocean-cursor {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
          opacity: 1;
        }
        .ocean-cursor-dot {
          width: 8px;
          height: 8px;
          background-color: var(--color-aqua);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 10px var(--color-aqua);
          transition: transform 160ms var(--ease-out), background-color 200ms ease;
        }
        .ocean-cursor-ring {
          width: 32px;
          height: 32px;
          border: 1.5px solid rgba(3, 196, 197, 0.45);
          background: radial-gradient(circle, rgba(3, 196, 197, 0.12) 0%, rgba(3, 196, 197, 0) 70%);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
          transition: transform 220ms var(--ease-out), border-color 200ms ease, background 200ms ease;
        }
        /* Hover on Interactive Elements */
        .ocean-cursor-hover .ocean-cursor-ring {
          transform: translate(-50%, -50%) scale(1.5);
          border-color: var(--color-lime);
          background: radial-gradient(circle, rgba(184, 218, 2, 0.18) 0%, rgba(184, 218, 2, 0) 75%);
          box-shadow: 0 0 16px rgba(184, 218, 2, 0.35);
        }
        .ocean-cursor-hover .ocean-cursor-dot {
          background-color: var(--color-lime);
          transform: translate(-50%, -50%) scale(1.35);
        }
        /* Focus / Inputs */
        .ocean-cursor-input .ocean-cursor-ring {
          transform: translate(-50%, -50%) scale(0.85);
          border-radius: 6px;
          border-color: var(--color-aqua);
          background: rgba(3, 196, 197, 0.08);
        }
        .ocean-cursor-input .ocean-cursor-dot {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
