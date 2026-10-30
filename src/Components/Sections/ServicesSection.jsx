import React from 'react';
import { motion } from 'framer-motion';
import {
  FiLayout,
  FiServer,
  FiLayers,
  FiSmartphone,
  FiDatabase,
  FiSliders,
  FiShare2,
} from 'react-icons/fi';
import { servicesData } from '../../data/portfolioData';

const iconMap = {
  frontend: FiLayout,
  backend: FiServer,
  fullstack: FiLayers,
  responsive: FiSmartphone,
  database: FiDatabase,
  dashboard: FiSliders,
  api: FiShare2,
};

const ServicesSection = () => {
  return (
    <section id="services" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="section-header">
        <span className="section-tag">07 / Capabilities</span>
        <h2 className="section-title">
          What I <span className="gradient-text">Do & Build</span>
        </h2>
        <p className="section-subtitle">
          Realistic technical competencies across modern frontend systems, backend services, and database integration.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {servicesData.map((service, index) => {
          const IconComponent = iconMap[service.id] || FiLayers;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -5, borderColor: 'var(--border-hover)' }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                boxShadow: 'var(--card-shadow)',
                backdropFilter: 'blur(12px)',
                transition: 'all var(--transition-normal)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--badge-bg)',
                    border: '1px solid var(--badge-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    fontSize: '1.35rem',
                  }}
                >
                  <IconComponent />
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                  }}
                >
                  {service.number}
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.65',
                }}
              >
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
