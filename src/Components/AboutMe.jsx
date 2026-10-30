import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiCheck, FiAward } from 'react-icons/fi';

const AboutMe = ({ className = '' }) => {
  return (
    <div className={className}>
      <div style={{ marginBottom: '18px' }}>
        <span className="badge-pill" style={{ marginBottom: '10px' }}>
          Full-Stack Developer
        </span>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '6px' }}>
          Passionate about building scalable digital solutions.
        </h2>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '16px' }}>
        Hello! I'm <strong style={{ color: 'var(--text-primary)' }}>Salatus Sadik (Supto)</strong>, a dedicated Full Stack MERN Developer based in Bangladesh. I specialize in designing and engineering high-performance web applications with seamless user experiences.
      </p>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '16px' }}>
        Over the past 3+ years, I have built and delivered real-world web applications ranging from interactive e-commerce platforms and healthcare portals to custom web tools and responsive dashboards. I thrive on clean architecture, reusable component patterns, and modern state management.
      </p>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '24px' }}>
        Whether creating a sleek front-end with React and Tailwind CSS or architecting a robust REST API with Node.js and MongoDB, I approach every challenge with precision, curiosity, and a commitment to quality.
      </p>

      {/* Quick Info Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '14px',
          padding: '18px',
          background: 'var(--bg-tertiary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-color)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FiMapPin color="var(--accent-color)" size={18} />
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>Location</span>
            <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Dhaka, Bangladesh</strong>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FiAward color="var(--accent-color)" size={18} />
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>Experience</span>
            <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>3+ Years Coding</strong>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FiCheck color="#10b981" size={18} />
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>Availability</span>
            <strong style={{ fontSize: '0.9rem', color: '#10b981' }}>Open for Projects</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
