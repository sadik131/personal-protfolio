import React from 'react';
import { motion } from 'framer-motion';
import owner from './assets/developer-pic-2.webp';

const Devloper = ({ className = '' }) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          width: '85%',
          height: '85%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
          filter: 'blur(35px)',
          zIndex: 0,
        }}
      />

      {/* Modern Card Frame */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '360px',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)',
          padding: '14px',
        }}
      >
        <div
          style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            aspectRatio: '4/5',
            position: 'relative',
            background: 'var(--bg-tertiary)',
          }}
        >
          <img
            src={owner}
            alt="Salatus Sadik Supto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />
        </div>

        <div style={{ padding: '16px 8px 6px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Salatus Sadik (Supto)
          </h3>
          <span style={{ fontSize: '0.88rem', color: 'var(--accent-color)', fontWeight: 600 }}>
            MERN Stack & Frontend Specialist
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Devloper;
