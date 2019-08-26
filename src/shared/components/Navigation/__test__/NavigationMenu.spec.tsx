import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { NavigationMenu } from '../NavigationMenu';

describe('NavigationMenu', () => {
  it('snapshot', () => {
    const props = {
      open: true,
      handleDrawerClose: jest.fn(),
    };
    const { baseElement } = render(
      <MemoryRouter>
        <NavigationMenu {...props} />
      </MemoryRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
