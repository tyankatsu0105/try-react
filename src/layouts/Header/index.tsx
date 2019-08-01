import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav`
  font-size: 2rem;
  box-shadow: 0 2px 5px #ccc;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Span = styled.span`
  display: block;
  padding: calc(var(--spacer-base) * 2) calc(var(--spacer-base) * 4);
`;

const navLinks = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'About',
    path: '/about',
  },
  {
    text: 'Contents',
    path: '/contents',
  },
  {
    text: 'Form',
    path: '/form',
  },
  {
    text: 'Context',
    path: '/context',
  },
  {
    text: 'Hooks',
    path: '/hooks',
  },
];

const navActiveStyle = {
  color: 'red',
};

export const Header: FC = () => {
  return (
    <header>
      <Nav>
        <Ul>
          {navLinks.map((navLink) => (
            <li key={navLink.path}>
              <NavLink activeStyle={navActiveStyle} exact to={navLink.path}>
                <Span>{navLink.text}</Span>
              </NavLink>
            </li>
          ))}
        </Ul>
      </Nav>
    </header>
  );
};
