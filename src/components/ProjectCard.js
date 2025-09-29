// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 2px solid #36847C;
  border-radius: 8px;
  padding: 1rem;
  height: 160px;
  margin: 1rem;
  max-width: 300px;
  text-align: center;
  flex: 1 1 300px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: add some shadow for better visual separation */
  white-space: pre-wrap;
  
  
  h3 {
    margin-bottom: 0.5rem;
  }
`;

const Description1 = styled.p`
margin-bottom: 1rem;
`;

const Description2 = styled.p`
margin-bottom: 1rem;
`;

const ViewButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #36847C;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #276A64;
  }
`;

const Status = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #a86d00ff; /* orange for "in progress" */
  color: white;
  border-radius: 4px;
  font-weight: bold;
`;


const ProjectCard = ({ title, description, type, view }) => (
  <Card>
    <h3>{title}</h3>
    <Description1>{description}</Description1>
    <Description2>{type}</Description2>
    {view ? (
      <ViewButton href={view} target="_blank" rel="noopener noreferrer">
        View
      </ViewButton>
    ) : (
      <Status>In Progress</Status>
    )}
  </Card>
);

export default ProjectCard;