// src/components/About.js
import React, { useState } from 'react';
import styled from 'styled-components';
import educationImage from '../assets/images/education.png'; 
import skillsets from '../assets/images/skills.png'; 

// --- Constants for Efficiency ---
// Organized skills into a single, logical list for better rendering
const TECHNICAL_SKILLS = [
  'Java', 'React.js', 'MongoDB',
  'Python', 'Node.js', 'Figma',
  'C', 'HTML/CSS', 'PostgreSQL', 'MySQL',
  'Microsoft Azure', 'GitHub',
];
// ---------------------------------

const AboutSection = styled.section`
  padding: 2rem;
  text-align: center;
  min-height: 80vh; 
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-around; /* Distributes space more evenly */
  align-items: center;
  width: 70%; /* Constraint width for a cleaner look */
  margin: 50px auto 0 auto; /* Centers the container */
`;

const Circle = styled.div`
  width: 130px;
  height: 130px;
  background-color: #36847C;
  border-radius: 50%;
  border: 5px solid #FFCEBB;
  box-shadow: 0 0 0 5px #36847C;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
`;

const CircleWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%; /* Ensures each circle column takes equal space */
`;

const Divider = styled.div`
  width: 250px; 
  height: 4px;
  background-color: black;
`;

const Heading = styled.h3`
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 1.5em; 
  margin-top: 30px; 
`;

// ⚠️ FIX: Using the same layout constraints and display for alignment
const AdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%; /* MATCHES CircleContainer width */
  margin: 30px auto 0 auto; 
`;

const EducationInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Ensures this column takes its half of the space */
  width: 50%; 
`;

const SkillInfo = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; 
  /* Ensures this column takes its half of the space */
  width: 50%;
`;

// ⚠️ RE-REFACTORED: Skills are now displayed in a single, wrapping row for centered look
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: 20px 40px; /* Vertical | Horizontal gap */
  max-width: 350px; /* Constraints the list width for better centering */
  margin-top: 20px;
`;

// Column is no longer needed since we are using a single flex container for skills
const SkillItem = styled.div`
  /* Styles for the individual skill text */
  text-align: center;
  min-width: 100px;
  padding: 2px 0;
`;

const RelevantCourseworkButton = styled.button`
  background-color: #36847C;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

// ⚠️ FIX: Applied the full styling to the Download Button anchor tag
const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #FFCEBB;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid #FFCEBB;
  margin-top: 10px; /* Added spacing from text above */
  
  &:hover {
    background-color: #f7b2a0;
  }
`;

// --- Modal Components (Fully Styled) ---

const ModalBackground = styled.div`
  /* Covers the entire viewport */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Dark semi-transparent overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it's on top of everything */
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  position: relative; /* For positioning the close button */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 80vh; /* Limits height to prevent content overflow */
  overflow-y: auto; /* Allows scrolling if content is too long */
  text-align: left;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`;

const ModalTitle = styled.h2`
  color: #36847C;
  margin-top: 0;
  margin-bottom: 20px;
  border-bottom: 2px solid #FFCEBB;
  padding-bottom: 5px;
  text-align: center;
`;

const RelevantCoursework = ({ onClose }) => {
  return (
    <ModalBackground onClick={onClose}> {/* Clicking background closes the modal */}
      <ModalContent onClick={e => e.stopPropagation()}> {/* Prevents click from propagating to the background */}
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>Relevant Coursework</ModalTitle>
        <p>
          CSCI 1302: Software Development<br /><br />
          CSCI 1730: Systems Programming<br /><br />
          CSCI 2610: Discrete Mathematics for Computer Science<br /><br />
          CSCI 2670: Introduction to Theory of Computing<br /><br />
          CSCI 2720: Data Structures<br /><br />
          CSCI 3030: Computing, Ethics and Society<br /><br />
          CSCI 4800: Human-Computer Interaction<br /><br />
          CSCI 4370: Database Management<br /><br />
          CSCI 4300: Web Programming<br /><br />
          CSCI 4300: Algorithms<br /><br />
          CSCI 4300: Computer Architecture<br /><br />
        </p>
      </ModalContent>
    </ModalBackground>
  );
};

// --- Main About Component ---

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <AboutSection>
      <CircleContainer>
        {/* Education Circle */}
        <CircleWithText>
          <Circle>
            <img src={educationImage} alt="Education" style={{ width: '70%', height: '70%', align: 'center' }} />
          </Circle>
          <Heading>University of Georgia</Heading>
          <Divider />
        </CircleWithText>
        
        {/* Skills Circle */}
        <CircleWithText>
          <Circle>
            <img src={skillsets} alt="Skills" style={{ width: '70%', height: '70%', align: 'center' }} />
          </Circle>
          <Heading>Skills</Heading>
          <Divider />
        </CircleWithText>
      </CircleContainer>
      
      <AdditionalInfoContainer>
        {/* Education Info Section */}
        <EducationInfo>
          <p style={{ lineHeight: '1.4' }}>
            <span style={{ fontWeight: 'bold' }}>Fourth-Year Student, </span>{' '}
            <span style={{ fontStyle: 'italic' }}>Expected Graduation: December 2025</span>
            <br /><br />Bachelors in Computer Science
            <br /><br />Member of{' '}
            <span style={{ fontWeight: 'bold' }}>Women in Technology, </span>
            {' '}
            <span style={{ fontWeight: 'bold' }}>Girls Who Code@UGA</span> {' '}
            and {' '}
            <span style={{ fontWeight: 'bold' }}>ACM@UGA</span>.
          </p>
          
          <RelevantCourseworkButton onClick={toggleModal}>
            Relevant Coursework
          </RelevantCourseworkButton>
          
          <DownloadButton href="/resume.pdf" download>
            Download Resume (PDF)
          </DownloadButton>

          {/* Conditional rendering of the modal */}
          {showModal && <RelevantCoursework onClose={toggleModal} />}
        </EducationInfo>

        {/* Skill Info Section */}
        <SkillInfo>
          <SkillsContainer>
            {/* Mapping over a single list and letting Flexbox wrap the items */}
            {TECHNICAL_SKILLS.map((skill) => (
              <SkillItem key={skill}>{skill}</SkillItem>
            ))}
          </SkillsContainer>
        </SkillInfo>
      </AdditionalInfoContainer>
    </AboutSection>
  );
};

export default About;