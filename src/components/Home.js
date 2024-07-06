// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import gmail from '../assets/images/gmail.png';
import LinkedIn from '../assets/images/linkedin.png';


const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 79vh;
  text-align: center;
  
`;

const StyledH2 = styled.h2`
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 6.5em; /* Adjust the font size as needed */
  margin-top: -100px;
`;

const Quote = styled.p`
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 1.8em; /* Adjust the font size as needed */
  margin-top: -30px; /* Adjust as needed for spacing */
`;

const Author = styled.p`
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 1.2em; /* Adjust the font size as needed */
  margin-top: -15px; /* Adjust as needed for spacing */
`;

const Contact = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    margin: 0 10px;
    img {
      width: 40px; 
      height: 40px; 
      padding: 3px; 
      border: 1px solid #FFCEBB; 
      border-radius: 5px; 

      transition: border-color 0.3s ease-in-out;
      
      &:hover {
        border-color: #36847C; /* Border color on hover */
      }
    }
  }
`;

const Home = () => (
  <HomeSection>
    <StyledH2>
       <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Hello</span>,{' '}
      <span style={{ fontWeight: 'bold', color: '#36847C' }}>I am Mukta</span>

    </StyledH2>
    <Quote>
    “Two of the most important characteristics of good<br />
      design are discoverability and understanding.”
    </Quote>

    <Author>
    <span style={{ fontWeight: 'bold' }}>Donald A. Norman, </span>{' '}
    <span style={{ fontStyle: 'italic' }}>The Design of Everyday Things</span>
    </Author>

    <Contact>
      <a href="mailto:muktaathene@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={gmail} alt="GMAIL" />
      </a>
      <a href="https://www.linkedin.com/in/mukta-deshmukh" target="_blank" rel="noopener noreferrer">
        <img src={LinkedIn} alt="Icon 2" />
      </a>
    </Contact>
    
  </HomeSection>
);

export default Home;
