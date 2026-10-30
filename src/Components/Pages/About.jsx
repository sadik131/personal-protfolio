import React from 'react';
import Layout from '../Layout';
import AboutSection from '../Sections/AboutSection';
import SkillsSection from '../Sections/SkillsSection';
import JourneySection from '../Sections/JourneySection';

const About = () => {
  return (
    <Layout>
      <AboutSection />
      <SkillsSection />
      <JourneySection />
    </Layout>
  );
};

export default About;
