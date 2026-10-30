import React from 'react';
import Layout from '../Layout';
import ProjectsSection from '../Sections/ProjectsSection';
import GithubSection from '../Sections/GithubSection';

const Project = () => {
  return (
    <Layout>
      <ProjectsSection />
      <GithubSection />
    </Layout>
  );
};

export default Project;
