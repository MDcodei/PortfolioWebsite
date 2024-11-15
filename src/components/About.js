// src/components/About.js
import React, { useState } from 'react';
import styled from 'styled-components';
import educationImage from '../assets/images/education.png'; // Import first image
import skillsets from '../assets/images/skills.png'; // Import second image

const AboutSection = styled.section`
  padding: 2rem;
  text-align: center;
  height: 70.9vh;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 600px; /* Adjust the gap between the circles as needed */
  margin-top: 50px; /* Adjust to place circles appropriately */
`;

const Circle = styled.div`
  width: 130px; /* Adjust the size of the circle */
  height: 130px; /* Adjust the size of the circle */
  background-color: #36847C;
  border-radius: 50%;
  border: 5px solid #FFCEBB; /* First coral outline */
  box-shadow: 0 0 0 5px #36847C; /* Second #36847C outline */
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
`;


const Divider1 = styled.div`
  width: 180%; /* Adjust the width of each line */
  height: 4px; /* Adjust the height of the line */
  background-color: black; /* Adjust the color of the line */
`;

const Divider = styled.div`
  width: 250%; /* Adjust the width of each line */
  height: 4px; /* Adjust the height of the line */
  background-color: black; /* Adjust the color of the line */
`;

const Heading = styled.h3`
font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 1.5em; 
  margin-top: 30px; 
`;

const AdditionalInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px; /* Adjust as needed to position text below dividers */
  gap: 400px

`;

const EducationInfo = styled.div`
  text-align: center;
  margin-left: -65px;
`

const SkillInfo = styled.div`
  text-align: center;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; 
  
`;

const RelevantCourseworkButton = styled.button`
  background-color: #36847C;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color:  #D3FFFB;
  padding: 20px;
  border-radius: 10px;
  height: 400px;
  width: 700px;
  max-width: 80%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 1.5em; 
  text-align: center;
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 20px;
`;

const RelevantCoursework = ({ onClose }) => {
  return (
    <ModalBackground>
      <ModalContent>
        <CloseButton onClick={onClose}>CLOSE</CloseButton>
        <ModalTitle>Relevant Coursework</ModalTitle>
        {<p>CSCI 1302: Software Development<br /><br />
        CSCI 1730: Systems Programming<br /><br />
        CSCI 2610: Discrete Mathematics for Computer Science<br /><br />
        CSCI 2670: Introduction to Theory of Computing<br /><br />
        CSCI 2720: Data Structures<br /><br />
        CSCI 3030: Computing, Ethics and Society<br /><br />
        CSCI 4800: Human-Computer Interaction<br /><br />
        CSCI 4370: Database Management<br /><br />
        CSCI 4300: Web Programming<br /><br /></p>}
      </ModalContent>
    </ModalBackground>
  );
};

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
  <AboutSection>
    <CircleContainer>
      <CircleWithText>
        <Circle>
          <img src={educationImage} alt="Education" style={{ width: '70%', height: '70%', align: 'center' }} />
        </Circle>
        <Heading>
          University of Georgia
        </Heading> {/* Title for the first circle */}
        <Divider1 />
      </CircleWithText>
      <CircleWithText>
        <Circle>
          <img src={skillsets} alt="skills" style={{ width: '70%', height: '70%', align: 'center' }} />
        </Circle>
        <Heading>Skills</Heading> {/* Title for the second circle */}
        <Divider />
      </CircleWithText>
    </CircleContainer>
    
    <AdditionalInfoContainer>
      <EducationInfo>
        <span style={{ fontWeight: 'bold' }}> Third-Year Student, </span>{' '}
        <span style={{ fontStyle: 'italic' }}>Expected Graduation: December 2025</span>
        <br /><br />Bachelors in Computer Science
        <br /><br />Member of{' '}
        <span style={{ fontWeight: 'bold' }}>Women in Technology, </span>
        {' '}
        <span style={{ fontWeight: 'bold' }}>Girls Who Code@UGA</span> {' '}
        and {' '}
        <span style={{ fontWeight: 'bold' }}>ACM@UGA</span>
        .<br /><br />
        <RelevantCourseworkButton onClick={toggleModal}>Relevant Coursework</RelevantCourseworkButton>
          {showModal && <RelevantCoursework onClose={toggleModal} />}
      </EducationInfo>

      <SkillInfo>
        <SkillsContainer>
          <Column>
            <div>Java</div>
            <div>Python</div>
            <div>C</div>
          </Column>
          <Column>
            <div>React.js</div>
            <div>HTML/CSS</div>
            <div>Figma</div>
          </Column>
        </SkillsContainer>
      </SkillInfo>
    </AdditionalInfoContainer>
  </AboutSection>
);
  };

export default About;
