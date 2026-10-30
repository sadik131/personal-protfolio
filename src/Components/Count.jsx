import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const Count = ({ count, text, suffix = '+' }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) {
      motionValue.set(count);
    }
  }, [inView, motionValue, count]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest);
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--card-shadow)',
        textAlign: 'center',
        minWidth: '130px',
      }}
    >
      <div
        style={{
          fontSize: '2.4rem',
          fontWeight: 800,
          lineHeight: 1,
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
        }}
        className="gradient-text"
      >
        <span ref={ref}>0</span>
        <span>{suffix}</span>
      </div>
      <span
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Count;
