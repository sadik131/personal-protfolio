import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiCalendar, FiArrowUpRight, FiBookOpen } from 'react-icons/fi';
import Layout from '../Layout';
import thumbnet from '../assets/crypto-screener-cover-image.webp';
import reactImg from '../assets/react.png';
import AllArtical from '../AllArtical';

const featuredArticles = [
  {
    id: 1,
    title: 'Building Resilient Custom React Hooks for Enterprise Form Validation',
    summary:
      'A deep dive into creating flexible, reusable custom hooks in React with seamless error handling, touch states, and type-safe schema validations.',
    date: 'Oct 2024',
    readTime: '6 min read',
    tags: ['React.js', 'Custom Hooks', 'Web Architecture'],
    thumbnail: reactImg,
    link: 'https://dev.to',
  },
  {
    id: 2,
    title: 'Architecting Scalable REST APIs with Node.js, Express & MongoDB',
    summary:
      'Best practices for structuring MERN stack backends: modular routing, JWT authentication middleware, error handling pipelines, and MongoDB indexing.',
    date: 'Sep 2024',
    readTime: '8 min read',
    tags: ['Node.js', 'Express', 'MongoDB'],
    thumbnail: thumbnet,
    link: 'https://dev.to',
  },
];

const Artical = () => {
  return (
    <Layout>
      <div className="section-header">
        <span className="section-tag">Insights & Writings</span>
        <h1 className="section-title">
          Thoughts, Guides & <span className="gradient-text">Articles</span>
        </h1>
        <p className="section-subtitle">
          Writing about full-stack engineering, React ecosystem developments, modern web performance, and developer workflows.
        </p>
      </div>

      {/* Featured Articles Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px',
          marginBottom: '60px',
        }}
      >
        {featuredArticles.map((article, index) => (
          <motion.a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={{
              textDecoration: 'none',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--card-shadow)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all var(--transition-normal)',
            }}
            whileHover={{ y: -6, borderColor: 'var(--border-hover)' }}
          >
            <div
              style={{
                width: '100%',
                height: '210px',
                overflow: 'hidden',
                background: 'var(--bg-tertiary)',
                position: 'relative',
              }}
            >
              <img
                src={article.thumbnail}
                alt={article.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
              />
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  marginBottom: '12px',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <FiCalendar size={13} /> {article.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <FiClock size={13} /> {article.readTime}
                </span>
              </div>

              <h2
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                  lineHeight: '1.4',
                }}
              >
                {article.title}
              </h2>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '18px',
                  flex: 1,
                }}
              >
                {article.summary}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-color)',
                }}
              >
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--accent-color)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  Read <FiArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Additional Articles List */}
      <AllArtical />
    </Layout>
  );
};

export default Artical;
