import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiGitBranch, FiStar, FiExternalLink, FiCode, FiActivity } from 'react-icons/fi';
import { githubConfig } from '../../data/portfolioData';

const GithubSection = () => {
  return (
    <section id="github" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="section-header">
        <span className="section-tag">08 / Open Source</span>
        <h2 className="section-title">
          GitHub & <span className="gradient-text">Coding Activity</span>
        </h2>
        <p className="section-subtitle">
          Real repositories and active coding practice documented publicly on GitHub.
        </p>
      </div>

      <div
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '36px',
          boxShadow: 'var(--card-shadow)',
          backdropFilter: 'blur(12px)',
          maxWidth: '1020px',
          margin: '0 auto',
        }}
      >
        {/* Profile Card Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            paddingBottom: '26px',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
              }}
            >
              <FiGithub size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                github.com/{githubConfig.username}
              </h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Open source repositories & development commits
              </span>
            </div>
          </div>

          <a
            href={githubConfig.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.9rem' }}
          >
            Visit Profile <FiExternalLink size={15} />
          </a>
        </div>

        {/* Featured Public Repositories */}
        <div style={{ marginTop: '28px' }}>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <FiCode color="var(--accent-primary)" /> Documented Public Repositories
          </h4>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '18px',
            }}
          >
            {githubConfig.featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  transition: 'all var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiGitBranch color="var(--accent-primary)" size={16} />
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {repo.name}
                    </span>
                  </div>
                  <FiExternalLink size={14} color="var(--text-muted)" />
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {repo.description}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#f7df1e',
                        display: 'inline-block',
                      }}
                    />
                    {repo.language}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Public Repo
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Activity Summary Note */}
        <div
          style={{
            marginTop: '26px',
            padding: '16px 20px',
            background: 'var(--bg-input)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <FiActivity color="var(--accent-primary)" size={20} style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
            Continuous hands-on commit activity exploring modern Next.js 16 architectures, PHP/Laravel, and responsive user interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
