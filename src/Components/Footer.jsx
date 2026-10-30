import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiArrowUp, FiTerminal } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import Socal from './Socal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionScroll = (id) => {
    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)',
        padding: '50px 24px 30px',
        transition: 'all var(--transition-normal)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
        }}
      >
        {/* Main Footer Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          {/* Brand & Bio */}
          <div style={{ maxWidth: '380px' }}>
            <Link
              to="/"
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '8px',
              }}
            >
              <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>&lt;</span>
              <span>{personalInfo.firstName}</span>
              <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>/&gt;</span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.65' }}>
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleSectionScroll('home')}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Home
            </button>
            <button
              onClick={() => handleSectionScroll('about')}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              About
            </button>
            <button
              onClick={() => handleSectionScroll('skills')}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Skills
            </button>
            <button
              onClick={() => handleSectionScroll('journey')}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Journey
            </button>
            <button
              onClick={() => handleSectionScroll('projects')}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Projects
            </button>
            <button
              onClick={() => handleSectionScroll('contact')}
              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Contact
            </button>
          </div>

          {/* Social & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Socal iconSize={17} />

            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--accent-primary)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <FiArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div
          style={{
            paddingTop: '20px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            &copy; {currentYear} {personalInfo.name}. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FiTerminal color="var(--accent-primary)" size={14} />
            <span>Futuristic Architecture • React & Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
