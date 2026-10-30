import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi';

const articlesList = [
  {
    id: 1,
    title: 'Optimizing React 18 Concurrent Features: Transitions & Suspense in Production',
    date: 'August 14, 2024',
    readTime: '5 min read',
    topic: 'React & Performance',
    link: 'https://dev.to',
  },
  {
    id: 2,
    title: 'Mastering MongoDB Schema Design: Embedding vs Referencing for E-Commerce',
    date: 'July 28, 2024',
    readTime: '7 min read',
    topic: 'Databases',
    link: 'https://dev.to',
  },
  {
    id: 3,
    title: 'Securing Web Applications with JWT, HTTP-Only Cookies, and CSRF Protection',
    date: 'June 19, 2024',
    readTime: '6 min read',
    topic: 'Web Security',
    link: 'https://dev.to',
  },
  {
    id: 4,
    title: 'Framer Motion Magic: Designing Fluid Micro-Interactions That Delight Users',
    date: 'May 05, 2024',
    readTime: '4 min read',
    topic: 'UI/UX & Animation',
    link: 'https://dev.to',
  },
];

const AllArtical = () => {
  return (
    <div style={{ marginTop: '40px', marginBottom: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
        <FiBookOpen size={20} color="var(--accent-color)" />
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          More Technical Publications
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {articlesList.map((article, index) => (
          <motion.a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            style={{
              textDecoration: 'none',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              boxShadow: 'var(--card-shadow)',
              backdropFilter: 'blur(10px)',
              transition: 'all var(--transition-fast)',
            }}
            whileHover={{
              x: 6,
              borderColor: 'var(--border-hover)',
              background: 'var(--bg-card-hover)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--accent-color)',
                  }}
                >
                  {article.topic}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  • {article.readTime}
                </span>
              </div>
              <h3
                style={{
                  fontSize: '1.08rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {article.title}
              </h3>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                {article.date}
              </span>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                }}
              >
                <FiArrowUpRight size={16} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default AllArtical;
