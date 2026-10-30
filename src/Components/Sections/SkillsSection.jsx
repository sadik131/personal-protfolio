import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiRedux,
  SiGithub,
  SiUbuntu,
  SiVisualstudiocode,
  SiPostman,
  SiVite,
  SiComposer,
  SiXampp,
  SiFramer,
  SiWebflow,
} from 'react-icons/si';
import { TbDatabase, TbPin, TbLock, TbShieldLock, TbCloudUpload, TbEdit } from 'react-icons/tb';
import { skillsCategories } from '../../data/portfolioData';

// Icon mapping dictionary
const iconMap = {
  HTML5: { icon: SiHtml5, color: '#e34f26' },
  CSS3: { icon: SiCss3, color: '#1572b6' },
  'JavaScript ES6+': { icon: SiJavascript, color: '#f7df1e' },
  'React.js': { icon: SiReact, color: '#61dafb' },
  'Next.js': { icon: SiNextdotjs, color: '#ffffff' },
  'Vue.js': { icon: SiVuedotjs, color: '#42b883' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38bdf8' },
  'Bootstrap 5': { icon: SiBootstrap, color: '#7952b3' },
  PHP: { icon: SiPhp, color: '#777bb4' },
  Laravel: { icon: SiLaravel, color: '#ff2d20' },
  'Node.js': { icon: SiNodedotjs, color: '#68a063' },
  MySQL: { icon: SiMysql, color: '#00758f' },
  MongoDB: { icon: SiMongodb, color: '#47a248' },
  Prisma: { icon: SiPrisma, color: '#5a67d8' },
  'Eloquent ORM': { icon: TbDatabase, color: '#ff2d20' },
  'Redux Toolkit': { icon: SiRedux, color: '#764abc' },
  Pinia: { icon: TbPin, color: '#ffe66d' },
  NextAuth: { icon: TbLock, color: '#38bdf8' },
  'Laravel Sanctum': { icon: TbShieldLock, color: '#ff2d20' },
  'Git & GitHub': { icon: SiGithub, color: '#f05032' },
  'Linux / Ubuntu': { icon: SiUbuntu, color: '#e95420' },
  'VS Code': { icon: SiVisualstudiocode, color: '#007acc' },
  Postman: { icon: SiPostman, color: '#ff6c37' },
  'Vite & npm': { icon: SiVite, color: '#646cff' },
  Composer: { icon: SiComposer, color: '#885630' },
  XAMPP: { icon: SiXampp, color: '#fb7a24' },
  Cloudinary: { icon: TbCloudUpload, color: '#3448c5' },
  Tiptap: { icon: TbEdit, color: '#25c2a0' },
  Framer: { icon: SiFramer, color: '#0055ff' },
  Webflow: { icon: SiWebflow, color: '#4353ff' },
};

// Level color styling helper
const getLevelBadgeStyle = (level) => {
  switch (level) {
    case 'Hands-on Experience':
      return {
        bg: 'rgba(139, 255, 106, 0.12)',
        text: '#8BFF6A',
        border: 'rgba(139, 255, 106, 0.3)',
      };
    case 'Project Experience':
      return {
        bg: 'rgba(99, 179, 255, 0.12)',
        text: '#63B3FF',
        border: 'rgba(99, 179, 255, 0.3)',
      };
    case 'Familiar With':
      return {
        bg: 'rgba(192, 132, 252, 0.12)',
        text: '#C084FC',
        border: 'rgba(192, 132, 252, 0.3)',
      };
    case 'Currently Learning':
      return {
        bg: 'rgba(251, 191, 36, 0.12)',
        text: '#FBBF24',
        border: 'rgba(251, 191, 36, 0.3)',
      };
    default:
      return {
        bg: 'var(--bg-tertiary)',
        text: 'var(--text-secondary)',
        border: 'var(--border-color)',
      };
  }
};

const filterTabs = [
  'All',
  'Frontend',
  'Styling',
  'Backend',
  'Database & ORM',
  'State & Auth',
  'Dev Tools & Cloud',
  'Design & No-Code',
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredCategories =
    activeTab === 'All'
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.category === activeTab);

  return (
    <section id="skills" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="section-header">
        <span className="section-tag">04 / Technical Skills</span>
        <h2 className="section-title">
          Technologies & <span className="gradient-text">Architectures</span>
        </h2>
        <p className="section-subtitle">
          An honest overview of frameworks, languages, tools, and libraries I use to build scalable web applications.
        </p>

        {/* Filter Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '28px',
            flexWrap: 'wrap',
          }}
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: activeTab === tab ? 'var(--accent-primary)' : 'var(--border-color)',
                background: activeTab === tab ? 'var(--bg-tertiary)' : 'transparent',
                color: activeTab === tab ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Categories & Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
        {filteredCategories.map((group) => (
          <div key={group.category}>
            {activeTab === 'All' && (
              <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent-primary)',
                      display: 'inline-block',
                    }}
                  />
                  {group.category}
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {group.description}
                </span>
              </div>
            )}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '16px',
              }}
            >
              {group.skills.map((skill, index) => {
                const iconData = iconMap[skill.name] || { icon: TbDatabase, color: '#8BFF6A' };
                const IconComponent = iconData.icon;
                const badgeStyle = getLevelBadgeStyle(skill.level);

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    whileHover={{ y: -4, borderColor: 'var(--border-hover)' }}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      padding: '18px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '12px',
                      backdropFilter: 'blur(10px)',
                      boxShadow: 'var(--card-shadow)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '10px',
                            background: `${iconData.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: iconData.color,
                            fontSize: '1.4rem',
                            flexShrink: 0,
                          }}
                        >
                          <IconComponent />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {skill.desc}
                    </p>

                    <div style={{ marginTop: 'auto', paddingTop: '6px' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-full)',
                          background: badgeStyle.bg,
                          color: badgeStyle.text,
                          border: `1px solid ${badgeStyle.border}`,
                          fontFamily: 'var(--font-mono)',
                          display: 'inline-block',
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
