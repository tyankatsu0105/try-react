import React, { FC } from 'react';
import styled from '@emotion/styled';

import { fontColor } from '@src/styles/variables/index.js';

const Nav = styled.nav`
  background-color: black;
  color: ${fontColor};
`;

const navLinks = [
  {
    text: 'Home',
    id: 'Home',
  },
  {
    text: 'About',
    id: 'About',
  },
  {
    text: 'Contents',
    id: 'Contents',
  },
];

export const Header: FC = () => {
  return (
    <header>
      <Nav>
        <ul>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>{navLink.text}</li>
          ))}
        </ul>
      </Nav>
    </header>
  );
};
