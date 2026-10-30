import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const socialLinks = [
  {
    name: 'GitHub',
    url: personalInfo.social.github,
    icon: FiGithub,
    color: '#8BFF6A',
  },
  {
    name: 'LinkedIn',
    url: personalInfo.social.linkedin,
    icon: FiLinkedin,
    color: '#63B3FF',
  },
  {
    name: 'Twitter',
    url: personalInfo.social.twitter,
    icon: FiTwitter,
    color: '#38bdf8',
  },
  {
    name: 'Facebook',
    url: personalInfo.social.facebook,
    icon: FaFacebookF,
    color: '#60a5fa',
  },
];

const Socal = ({ className = '', iconSize = 18 }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className={className}>
      {socialLinks.map((item) => {
        const IconComponent = item.icon;
        return (
          <motion.a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-color)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = item.color;
              e.currentTarget.style.borderColor = item.color;
              e.currentTarget.style.boxShadow = `0 0 14px ${item.color}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <IconComponent size={iconSize} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default Socal;
