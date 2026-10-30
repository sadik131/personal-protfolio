import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin, FiLayers, FiCheckCircle } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiLaravel, SiMongodb } from 'react-icons/si';
import { personalInfo } from '../../data/portfolioData';
import bg from '../assets/developer-pic-1.webp';
import classes from '../Style/Home/Home.module.css';

const HeroSection = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={classes.heroWrapper}>
      <div className={classes.heroGrid}>
        {/* Left Column: Editorial Hero Info */}
        <motion.div
          className={classes.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status Pill */}
          <div className={classes.statusWrapper}>
            <span className="badge-pill">
              <span className="pulse-dot" /> {personalInfo.statusText}
            </span>
          </div>

          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              {personalInfo.heroIntro}
            </span>
            <h1 className={classes.headline}>
              Turning Ideas Into{' '}
              <span className="gradient-text">Powerful Digital</span> Experiences.
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {personalInfo.name}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--accent-secondary)' }}>
              {personalInfo.role}
            </span>
          </div>

          <p className={classes.description}>
            {personalInfo.heroSupportingText}
          </p>

          {/* Action CTAs */}
          <div className={classes.ctaGroup}>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work <FiArrowDown size={17} />
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-secondary"
            >
              <FiDownload size={17} /> Download Resume
            </a>
          </div>

          {/* Social Proof & Profiles */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginTop: '12px' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              Connect:
            </span>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-secondary)',
                fontSize: '0.88rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <FiGithub size={16} /> GitHub
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-secondary)',
                fontSize: '0.88rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-secondary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <FiLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual Showcase Frame */}
        <motion.div
          className={classes.visualWrapper}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            style={{
              position: 'absolute',
              width: '360px',
              height: '360px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139, 255, 106, 0.18) 0%, rgba(99, 179, 255, 0.15) 50%, transparent 75%)',
              filter: 'blur(50px)',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />

          {/* Floating Technology Badge 1 */}
          <motion.div
            className={classes.floatingChip1}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
          >
            <SiNextdotjs size={18} color="var(--accent-primary)" />
            <span>Next.js & React</span>
          </motion.div>

          {/* Floating Technology Badge 2 */}
          <motion.div
            className={classes.floatingChip2}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
          >
            <SiLaravel size={18} color="#f43f5e" />
            <span>PHP & Laravel Architecture</span>
          </motion.div>

          {/* Main Visual Frame */}
          <div className={classes.imageFrame}>
            <img
              src={bg}
              alt={personalInfo.name}
              className={classes.heroImage}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
