import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheckCircle, FiInfo, FiX, FiLayers } from 'react-icons/fi';
import { projectsData } from '../../data/portfolioData';

// Image assets
import shikhoImg from '../assets/concol.png';
import groceryImg from '../assets/grocery.png';
import mobileImg from '../assets/proect.png';
import cryptoImg from '../assets/crypto-screener-cover-image.webp';
import doctorImg from '../assets/doctor.png';

const projectImages = {
  afree_edu: shikhoImg,
  women_cooperative: groceryImg,
  laravel_ecommerce: mobileImg,
  youtube_quiz: cryptoImg,
  responsive_ui_collection: doctorImg,
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full-Stack Next.js', 'Full-Stack Vue & Laravel', 'Laravel & PHP', 'Frontend & UI'];

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="section-header">
        <span className="section-tag">06 / Portfolio</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects & Architectures</span>
        </h2>
        <p className="section-subtitle">
          Real application developments, hands-on architectural studies, and active exploratory projects.
        </p>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '28px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: filter === cat ? 'var(--accent-primary)' : 'var(--border-color)',
                background: filter === cat ? 'var(--bg-tertiary)' : 'transparent',
                color: filter === cat ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '30px',
        }}
      >
        {filteredProjects.map((project, index) => {
          const imageSrc = projectImages[project.id] || shikhoImg;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              style={{
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
            >
              {/* Image Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  background: 'var(--bg-tertiary)',
                  borderBottom: '1px solid var(--border-color)',
                }}
              >
                <img
                  src={imageSrc}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Status Badge Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(8, 11, 18, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: project.status.includes('Concept') ? '#FBBF24' : 'var(--accent-primary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {project.status}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, gap: '14px' }}>
                <div>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: '1.3',
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.65',
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.technologies.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Card Actions */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-secondary"
                    style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                  >
                    <FiInfo size={15} /> Highlights & Details
                  </button>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    {project.hasRealRepo ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ padding: '8px 12px' }}
                        title="View Source Repository"
                      >
                        <FiGithub size={16} />
                      </a>
                    ) : (
                      <span
                        title="Repository configured upon release"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-full)',
                          background: 'var(--bg-tertiary)',
                          color: 'var(--text-muted)',
                          fontSize: '0.8rem',
                          cursor: 'default',
                        }}
                      >
                        <FiGithub size={16} />
                      </span>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                      >
                        Visit <FiExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(8, 11, 18, 0.85)',
              backdropFilter: 'blur(16px)',
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '680px',
                maxHeight: '90vh',
                overflowY: 'auto',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-hover)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                boxShadow: 'var(--card-hover-shadow)',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <FiX size={18} />
              </button>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--accent-primary)',
                  textTransform: 'uppercase',
                }}
              >
                {selectedProject.category} • {selectedProject.status}
              </span>

              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', margin: '6px 0 16px' }}>
                {selectedProject.title}
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '20px' }}>
                {selectedProject.description}
              </p>

              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                Key Technical Highlights:
              </h4>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                    <FiCheckCircle color="var(--accent-primary)" size={16} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                  My Contribution:
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {selectedProject.myContribution}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                  Full Stack Applied:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
