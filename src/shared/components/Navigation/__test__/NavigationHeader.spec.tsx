import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { NavigationHeader } from '../NavigationHeader';

describe('NavigationHeader', () => {
  it('snapshot', () => {
    const props = {
      open: true,
      handleDrawerOpen: jest.fn(),
    };
    const { baseElement } = render(<NavigationHeader {...props} />);
    expect(baseElement).toMatchSnapshot();
  });
});
