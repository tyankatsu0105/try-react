import React, { FC } from 'react';
import styled from '@emotion/styled';

import { fontColor } from '@src/styles/variables/fonts.ts';

const Nav = styled.nav`
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
        <Ul>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>{navLink.text}</li>
          ))}
        </Ul>
      </Nav>
    </header>
  );
};
