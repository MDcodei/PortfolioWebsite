// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 2rem;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input, textarea {
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 100%;
    max-width: 500px;
  }
`;

const Contact = () => (
  <ContactSection>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </ContactSection>
);

export default Contact;
