import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    role: 'Full Stack MERN Developer',
    company: 'Independent & Client Solutions',
    location: 'Remote / Dhaka',
    period: '2023 - Present',
    description:
      'Designing, engineering, and deploying full-stack web applications for diverse client requirements. Developing modular React components, performant Node.js/Express backends, and reliable MongoDB data models.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
  },
  {
    role: 'Frontend Web Developer',
    company: 'Creative Web Projects',
    location: 'Remote',
    period: '2022 - 2023',
    description:
      'Engineered interactive user interfaces and responsive web apps including healthcare booking systems (Doctors Portal) and e-commerce platforms. Focused on performance, smooth animations, and UX optimization.',
    skills: ['React.js', 'JavaScript (ES6+)', 'Framer Motion', 'Context API', 'Firebase'],
  },
  {
    role: 'Web Development Trainee & Contributor',
    company: 'Tech Academy & Community',
    location: 'Dhaka, Bangladesh',
    period: '2021 - 2022',
    description:
      'Completed comprehensive full-stack JavaScript training covering frontend foundations, modern ECMAScript features, backend server architectures, database integration, and Git version control.',
    skills: ['HTML5/CSS3', 'JavaScript', 'Git/GitHub', 'Component Architecture'],
  },
];

const Experience = () => {
  return (
    <div style={{ marginTop: '80px', marginBottom: '80px' }}>
      <div className="section-header">
        <span className="section-tag">Career Journey</span>
        <h2 className="section-title">Work & Experience</h2>
        <p className="section-subtitle">
          Hands-on experience in building scalable web apps and delivering high-quality digital solutions.
        </p>
      </div>

      <div
        style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          paddingLeft: '30px',
          borderLeft: '2px solid var(--border-color)',
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              position: 'relative',
              marginBottom: index === experiences.length - 1 ? '0' : '45px',
            }}
          >
            {/* Timeline Bullet Node */}
            <div
              style={{
                position: 'absolute',
                left: '-41px',
                top: '4px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--bg-primary)',
                border: '3px solid var(--accent-color)',
                boxShadow: '0 0 12px var(--accent-glow)',
                zIndex: 2,
              }}
            />

            {/* Experience Card */}
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
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '10px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {exp.role}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--accent-color)',
                    }}
                  >
                    {exp.company}
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FiCalendar size={14} /> {exp.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FiMapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.65',
                  marginBottom: '16px',
                }}
              >
                {exp.description}
              </p>

              {/* Skills badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
