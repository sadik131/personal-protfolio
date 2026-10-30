import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const educations = [
  {
    degree: 'B.Sc in Computer Science & Engineering',
    institution: 'University / Institute of Technology',
    location: 'Bangladesh',
    period: '2019 - 2023',
    description:
      'Rigorous foundation in computer science principles, Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Software Engineering methodologies.',
    highlights: ['Algorithms & Data Structures', 'DBMS & SQL', 'Web Engineering', 'Software Architecture'],
  },
  {
    degree: 'Complete Full Stack Web Development Certification',
    institution: 'Programming Hero & Industry Bootcamps',
    location: 'Online / Dhaka',
    period: '2021 - 2022',
    description:
      'Intensive professional specialization covering modern JavaScript (ES6+), React.js ecosystem, Node.js, Express, MongoDB, Firebase authentication, RESTful APIs, and full-stack project deployments.',
    highlights: ['MERN Stack Specialization', 'Clean Code Practices', 'Full-Stack Project Deployments'],
  },
];

const Education = () => {
  return (
    <div style={{ marginTop: '80px', marginBottom: '80px' }}>
      <div className="section-header">
        <span className="section-tag">Academic Background</span>
        <h2 className="section-title">Education & Credentials</h2>
        <p className="section-subtitle">
          Formal education and continuous learning in computer science and modern software engineering.
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
        {educations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              position: 'relative',
              marginBottom: index === educations.length - 1 ? '0' : '45px',
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
                border: '3px solid #06b6d4',
                boxShadow: '0 0 12px rgba(6, 182, 212, 0.3)',
                zIndex: 2,
              }}
            />

            {/* Education Card */}
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
                    {item.degree}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#06b6d4',
                    }}
                  >
                    {item.institution}
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
                    <FiCalendar size={14} /> {item.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FiMapPin size={14} /> {item.location}
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
                {item.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {item.highlights.map((tag) => (
                  <span
                    key={tag}
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
                    {tag}
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

export default Education;
