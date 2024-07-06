import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
text-align: center;
padding: 1rem;
background: #FFCEBB;
color: #36847C;
position: absolute;
bottom: 0;
width: 97.8%;
`;


const Footer = () => (
    <Foot>
        <p>&copy; {new Date().getFullYear()} Portfolio</p>
    </Foot>
)

export default Footer;