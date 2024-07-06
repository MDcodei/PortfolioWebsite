// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: #FFCEBB; /* No background color */
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 1.2em;
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;

  &.active {
    border: 3px solid #36847C;
  }

  &:hover {
    border: 3px solid #36847C;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Nav>
      <NavLinkStyled exact to="/" activeClassName="active">
        Home
      </NavLinkStyled>
      <NavLinkStyled to="/about" activeClassName="active">
        About Me
      </NavLinkStyled>
      <NavLinkStyled to="/projects" activeClassName="active">
        Projects
      </NavLinkStyled>
    </Nav>
  </HeaderContainer>
);

export default Header;
