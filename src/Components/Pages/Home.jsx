import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../Layout';
import HeroSection from '../Sections/HeroSection';
import AboutSection from '../Sections/AboutSection';
import SkillsSection from '../Sections/SkillsSection';
import JourneySection from '../Sections/JourneySection';
import ProjectsSection from '../Sections/ProjectsSection';
import ServicesSection from '../Sections/ServicesSection';
import GithubSection from '../Sections/GithubSection';
import WorkflowSection from '../Sections/WorkflowSection';
import LearningSection from '../Sections/LearningSection';
import ContactSection from '../Sections/ContactSection';

const Home = () => {
  const { hash } = useLocation();

  // Handle hash scrolling if navigating with /#sectionId
  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [hash]);

  return (
    <Layout>
      {/* SECTION 02: HERO */}
      <HeroSection />

      {/* SECTION 03: ABOUT ME */}
      <AboutSection />

      {/* SECTION 04: TECHNICAL SKILLS */}
      <SkillsSection />

      {/* SECTION 05: DEVELOPMENT JOURNEY */}
      <JourneySection />

      {/* SECTION 06: FEATURED PROJECTS */}
      <ProjectsSection />

      {/* SECTION 07: WHAT I DO / SERVICES */}
      <ServicesSection />

      {/* SECTION 08: GITHUB & CODING ACTIVITY */}
      <GithubSection />

      {/* SECTION 09: MY WORKFLOW */}
      <WorkflowSection />

      {/* SECTION 10: CURRENTLY LEARNING */}
      <LearningSection />

      {/* SECTION 11: CONTACT */}
      <ContactSection />
    </Layout>
  );
};

export default Home;
