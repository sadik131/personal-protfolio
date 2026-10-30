import React from 'react';
import { motion } from 'framer-motion';
import { workflowSteps } from '../../data/portfolioData';

const WorkflowSection = () => {
  return (
    <section id="workflow" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="section-header">
        <span className="section-tag">09 / Methodology</span>
        <h2 className="section-title">
          My Development <span className="gradient-text">Workflow</span>
        </h2>
        <p className="section-subtitle">
          A disciplined, step-by-step engineering pipeline from initial problem understanding to cloud deployment.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {workflowSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            whileHover={{ y: -4, borderColor: 'var(--border-hover)' }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              boxShadow: 'var(--card-shadow)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              transition: 'all var(--transition-fast)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: index % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                }}
              >
                {step.step}
              </span>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: index % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                }}
              />
            </div>

            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
              }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowSection;
