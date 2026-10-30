import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload, FiArrowUpRight } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import Socal from './Socal';
import classes from '../Components/Style/Nav/Nav.module.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section on single page
      if (pathname === '/') {
        const sections = navItems.map((item) => document.getElementById(item.id));
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);

    if (pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={`${classes.headerWrapper} ${isScrolled ? classes.scrolledHeader : ''}`}>
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <Link
            to="/"
            onClick={() => handleNavClick('home')}
            className={classes.logo}
          >
            <span className={classes.logoCode}>&lt;</span>
            <span>{personalInfo.firstName}</span>
            <span className={classes.logoCode}>/&gt;</span>
          </Link>

          <nav>
            <ul className={classes.navLinks}>
              {navItems.map((item) => {
                const isActive = activeSection === item.id && pathname === '/';
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`${classes.navLink} ${isActive ? classes.navLinkActive : ''}`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className={classes.activeIndicator}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className={classes.rightSection}>
          <a
            href={personalInfo.resumeUrl}
            download
            className={classes.resumeBtn}
            title="Download Full-Stack Resume"
          >
            <FiDownload size={14} /> Resume
          </a>

          <button
            onClick={toggleTheme}
            className={classes.themeToggle}
            aria-label="Toggle Dark/Light Mode"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={classes.ctaBtn}
          >
            Let's Talk <FiArrowUpRight size={15} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className={classes.hamburgerBtn}
            aria-label="Open Navigation Menu"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={classes.mobileOverlay}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className={classes.mobileDrawerHeader}>
              <Link
                to="/"
                className={classes.logo}
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('home');
                }}
              >
                <span className={classes.logoCode}>&lt;</span>
                <span>{personalInfo.firstName}</span>
                <span className={classes.logoCode}>/&gt;</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={classes.mobileCloseBtn}
                aria-label="Close Menu"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className={classes.mobileNavLinks}>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    className={`${classes.mobileNavLink} ${
                      isActive ? classes.mobileNavLinkActive : ''
                    }`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className={classes.mobileDrawerFooter}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="btn-secondary"
                  style={{ flex: 1, textAlign: 'center', padding: '10px' }}
                >
                  <FiDownload size={15} /> Resume
                </a>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="btn-primary"
                  style={{ flex: 1, textAlign: 'center', padding: '10px' }}
                >
                  Contact
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6px' }}>
                <Socal iconSize={18} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
