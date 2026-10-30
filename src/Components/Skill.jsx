import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVite,
  SiVercel,
  SiPostman,
} from 'react-icons/si';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61dafb', level: 92, status: 'Advanced' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#facc15', level: 90, status: 'Advanced' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8', level: 95, status: 'Mastery' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#f8fafc', level: 82, status: 'Proficient' },
      { name: 'HTML5 & CSS3', icon: SiHtml5, color: '#ea580c', level: 95, status: 'Mastery' },
      { name: 'Framer Motion', icon: SiFramer, color: '#ec4899', level: 85, status: 'Proficient' },
    ],
  },
  {
    category: 'Backend & Cloud',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#22c55e', level: 88, status: 'Advanced' },
      { name: 'Express.js', icon: SiExpress, color: '#94a3b8', level: 88, status: 'Advanced' },
      { name: 'RESTful APIs', icon: SiPostman, color: '#f97316', level: 90, status: 'Advanced' },
      { name: 'Firebase', icon: SiFirebase, color: '#f59e0b', level: 84, status: 'Proficient' },
    ],
  },
  {
    category: 'Database & Tools',
    skills: [
      { name: 'MongoDB & Mongoose', icon: SiMongodb, color: '#10b981', level: 88, status: 'Advanced' },
      { name: 'Git & GitHub', icon: SiGithub, color: '#a855f7', level: 90, status: 'Advanced' },
      { name: 'Vite & Webpack', icon: SiVite, color: '#6366f1', level: 90, status: 'Advanced' },
      { name: 'Vercel & Netlify', icon: SiVercel, color: '#06b6d4', level: 92, status: 'Advanced' },
    ],
  },
];

const Skill = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Frontend', 'Backend & Cloud', 'Database & Tools'];

  const filteredCategories =
    activeTab === 'All'
      ? skillsData
      : skillsData.filter((group) => group.category === activeTab);

  return (
    <div style={{ marginTop: '90px', marginBottom: '80px' }}>
      <div className="section-header">
        <span className="section-tag">Technical Expertise</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          A collection of modern frameworks, languages, and tools I leverage to build robust, scalable web products.
        </p>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '24px',
            flexWrap: 'wrap',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: activeTab === tab ? 'var(--accent-color)' : 'var(--border-color)',
                background: activeTab === tab ? 'var(--accent-gradient)' : 'var(--bg-tertiary)',
                color: activeTab === tab ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
        {filteredCategories.map((group) => (
          <div key={group.category}>
            {activeTab === 'All' && (
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--accent-color)',
                    display: 'inline-block',
                  }}
                />
                {group.category}
              </h3>
            )}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '18px',
              }}
            >
              {group.skills.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -4, borderColor: item.color }}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      padding: '18px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      backdropFilter: 'blur(10px)',
                      boxShadow: 'var(--card-shadow)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: `${item.color}18`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: item.color,
                            fontSize: '1.3rem',
                          }}
                        >
                          <IconComponent />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {item.name}
                          </h4>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                        {item.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div
                      style={{
                        width: '100%',
                        height: '6px',
                        background: 'var(--bg-tertiary)',
                        borderRadius: '999px',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        style={{
                          height: '100%',
                          borderRadius: '999px',
                          background: `linear-gradient(90deg, ${item.color}88, ${item.color})`,
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
