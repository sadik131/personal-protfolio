import React from 'react';
import { motion } from 'framer-motion';
import { FiCompass, FiCode, FiLayers, FiDatabase, FiTrendingUp, FiMapPin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import owner from '../assets/developer-pic-2.webp';

const AboutSection = () => {
  return (
    <section id="about" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="section-header">
        <span className="section-tag">03 / About Me</span>
        <h2 className="section-title">
          Engineering Thoughtful Web Apps, <span className="gradient-text">Step by Step.</span>
        </h2>
        <p className="section-subtitle">
          From crafting interactive frontends to architecting structured backends and databases.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '45px',
          alignItems: 'center',
        }}
        className="about-grid-container"
      >
        {/* Left Column: Narrative Story */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <div
            style={{
              padding: '24px 28px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              backdropFilter: 'blur(12px)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <FiCompass color="var(--accent-primary)" /> My Development Journey
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '16px' }}>
              I am a passionate web developer focused on building modern, responsive, and user-friendly web applications. My journey started with a deep curiosity about how digital interfaces work, which naturally expanded from frontend design into complete full-stack application development.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '16px' }}>
              I enjoy working across frontend and backend technologies—designing scalable application structures, integrating databases, and turning ideas into functional digital products. My practical experience spans modern JavaScript frameworks like React and Next.js, as well as PHP-based backend technologies like Laravel, relational and document databases (MySQL, MongoDB), and modern development workflows under Linux / Ubuntu environments.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.75' }}>
              I strongly believe that great software is built through continuous learning and disciplined problem solving. Alongside full-stack engineering, I have a keen interest in modern design systems and visual tools like Framer and Webflow to build intuitive, aesthetically refined experiences.
            </p>
          </div>

          {/* Core Focus Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
            }}
          >
            <div
              style={{
                padding: '16px 18px',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--badge-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                }}
              >
                <FiCode size={18} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', fontFamily: 'var(--font-mono)' }}>Focus</span>
                <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>Full-Stack MERN & PHP</strong>
              </div>
            </div>

            <div
              style={{
                padding: '16px 18px',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(99, 179, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-secondary)',
                }}
              >
                <FiTrendingUp size={18} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', fontFamily: 'var(--font-mono)' }}>Mindset</span>
                <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>Continuous Growth</strong>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Subtle Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              width: '85%',
              height: '85%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99, 179, 255, 0.2) 0%, rgba(139, 255, 106, 0.12) 60%, transparent 75%)',
              filter: 'blur(45px)',
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '380px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--card-shadow)',
              padding: '16px',
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
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>

            <div style={{ padding: '18px 8px 6px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {personalInfo.name}
              </h3>
              <span style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 600, display: 'block', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
                {personalInfo.role}
              </span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                <FiMapPin size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                {personalInfo.location}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid-container {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
