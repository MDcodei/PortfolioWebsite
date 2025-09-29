// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectsSection = styled.section`
  padding: 2rem;
  display: flex;
  
  flex-wrap: wrap;
  justify-content: center;

  height: 71vh;

  
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  justify-content: center;
  width: 100%;
  gap: 4rem

  
  
`;

const Projects = () => (
  <ProjectsSection>
    <ProjectsWrapper>
      <ProjectCard 
        title="Cinema-eBooking" 
        description="A Cinema-eBooking (Web) App"
        type="|Web Application|"
        view="" 
      />
      <ProjectCard 
        title="AI Water Externality" 
        description="AI Water Usage Monitoring Extension"
        type="|Chrome Extension|"
        view="https://github.com/vennreddy490/AI_Water_Externality_Lab.git" 
      />
      <ProjectCard 
        title="SkyDeals" 
        description="An Airline Ticketing (Web) App"
        type="|Web Application|"
        view="https://github.com/sanslab22/Term-Project.git" 
      />
      <ProjectCard 
        title="BiteMap" 
        description="A 'Find Restaurant's near me' (Web) App"
        type="|Web Application|"
        view="https://muktadeshmukh.my.canva.site/bitemap-project" 
      />
      <ProjectCard 
        title="Matchbox" 
        description="A Collaboration (Web) App"
        type="|Prototype|"
        view="https://muktadeshmukh.my.canva.site/matchbox-project" 
      />
      <ProjectCard 
        title="Envi" 
        description="A Carbon Footprint Tracking (Web) App"
        type="|Prototype|"
        view="https://muktadeshmukh.my.canva.site/envi" 
      />
      <ProjectCard 
        title="MunchFlix" 
        description="A Snack Ordering (Mobile) App"
        type="|Prototyope|"
        view="https://muktadeshmukh.my.canva.site/munchflix-project" 
      />
      
      
      
    </ProjectsWrapper>
  </ProjectsSection>
);

export default Projects;


