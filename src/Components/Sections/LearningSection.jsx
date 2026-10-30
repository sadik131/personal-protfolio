import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import { SiFramer, SiWebflow, SiJavascript } from 'react-icons/si';
import { TbLayersLinked, TbLayoutGrid, TbServer2 } from 'react-icons/tb';

const learningItems = [
  {
    title: 'Framer',
    category: 'Motion & Interactive Prototyping',
    desc: 'Creating fluid, high-fidelity micro-interactions and interactive component prototypes.',
    icon: SiFramer,
    color: '#0055ff',
  },
  {
    title: 'Webflow',
    category: 'Visual Development',
    desc: 'Exploring rapid visual development, CMS-driven page architectures, and modern web publishing.',
    icon: SiWebflow,
    color: '#4353ff',
  },
  {
    title: 'Advanced JavaScript',
    category: 'Core Language Deep Dive',
    desc: 'Mastering execution contexts, event loop microtasks, prototype chains, and design patterns.',
    icon: SiJavascript,
    color: '#facc15',
  },
  {
    title: 'Modern Full-Stack Architecture',
    category: 'System Design',
    desc: 'Decoupling services, optimizing server-side rendering, and managing cross-cutting state concerns.',
    icon: TbLayersLinked,
    color: '#8BFF6A',
  },
  {
    title: 'Better UI/UX Practices',
    category: 'User Experience',
    desc: 'Accessibility (a11y), visual hierarchy, keyboard navigation, and cognitive load minimization.',
    icon: TbLayoutGrid,
    color: '#63B3FF',
  },
  {
    title: 'Scalable Application Development',
    category: 'Engineering Best Practices',
    desc: 'Building modular codebases that remain maintainable and performant under growing codebases.',
    icon: TbServer2,
    color: '#f43f5e',
  },
];

const LearningSection = () => {
  return (
    <section id="learning" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="section-header">
        <span className="section-tag">10 / Continuous Growth</span>
        <h2 className="section-title">
          Currently <span className="gradient-text">Learning & Exploring</span>
        </h2>
        <p className="section-subtitle">
          Software engineering is a journey of continuous curiosity. Here are the core topics I am actively expanding.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '22px',
          maxWidth: '1140px',
          margin: '0 auto',
        }}
      >
        {learningItems.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4, borderColor: item.color }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: 'var(--card-shadow)',
                backdropFilter: 'blur(10px)',
                transition: 'all var(--transition-fast)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${item.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color,
                    fontSize: '1.4rem',
                    flexShrink: 0,
                  }}
                >
                  <IconComponent />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {item.category}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default LearningSection;
