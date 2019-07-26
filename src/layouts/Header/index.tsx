import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import { fontColor } from '@src/styles/variables/fonts.ts';

const Nav = styled.nav`
  font-size: 2rem;
  color: ${fontColor.primary};
  box-shadow: 0 2px 5px #ccc;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const navLinks = [
  {
    text: 'Home',
    path: '/',
    id: 'Home',
  },
  {
    text: 'About',
    path: '/about',
    id: 'About',
  },
  {
    text: 'Contents',
    path: '/contents',
    id: 'Contents',
  },
];

export const Header: FC = () => {
  return (
    <header>
      <Nav>
        <Ul>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink activeStyle={{ color: 'red' }} exact to={navLink.path}>
                {navLink.text}
              </NavLink>
            </li>
          ))}
        </Ul>
      </Nav>
    </header>
  );
};
