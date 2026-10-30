import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiCompass, FiCheckCircle } from 'react-icons/fi';
import { TbSparkles } from 'react-icons/tb';
import { journeyMilestones, currentlyExploring } from '../../data/portfolioData';

const JourneySection = () => {
  return (
    <section id="journey" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="section-header">
        <span className="section-tag">05 / Chronology</span>
        <h2 className="section-title">
          My Development <span className="gradient-text">Journey</span>
        </h2>
        <p className="section-subtitle">
          Documented milestones tracking the progression from foundational web structure to full-stack application development.
        </p>
      </div>

      {/* Timeline Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '840px',
          margin: '0 auto',
          paddingLeft: '32px',
          borderLeft: '2px solid var(--border-color)',
        }}
      >
        {journeyMilestones.map((item, index) => (
          <motion.div
            key={item.date}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            style={{
              position: 'relative',
              marginBottom: index === journeyMilestones.length - 1 ? '40px' : '45px',
            }}
          >
            {/* Glowing Timeline Marker */}
            <div
              style={{
                position: 'absolute',
                left: '-43px',
                top: '4px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--bg-primary)',
                border: `3px solid ${item.accent}`,
                boxShadow: `0 0 14px ${item.accent}50`,
                zIndex: 2,
              }}
            />

            {/* Timeline Milestone Card */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '26px 28px',
                boxShadow: 'var(--card-shadow)',
                backdropFilter: 'blur(12px)',
                transition: 'all var(--transition-normal)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '12px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: item.accent,
                    letterSpacing: '0.08em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <FiCalendar size={14} /> {item.date}
                </span>

                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Milestone 0{index + 1}
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  marginBottom: '18px',
                }}
              >
                {item.description}
              </p>

              {/* Tag Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Currently Exploring Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'relative',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '-43px',
              top: '4px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              boxShadow: '0 0 16px var(--accent-glow)',
              zIndex: 2,
            }}
          />

          <div
            style={{
              background: 'linear-gradient(135deg, rgba(139, 255, 106, 0.06) 0%, rgba(99, 179, 255, 0.08) 100%)',
              border: '1px solid var(--border-hover)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px 28px',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <TbSparkles color="var(--accent-primary)" size={20} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Currently Exploring & Deepening
              </h4>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '14px' }}>
              Continuously leveling up technical depth and modern design tooling:
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {currentlyExploring.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    padding: '5px 14px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glow)',
                    color: 'var(--accent-secondary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <p
        style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          marginTop: '40px',
          fontFamily: 'var(--font-mono)',
        }}
      >
        * Documented milestones from development discussions, reflecting progressive skill expansion.
      </p>
    </section>
  );
};

export default JourneySection;
