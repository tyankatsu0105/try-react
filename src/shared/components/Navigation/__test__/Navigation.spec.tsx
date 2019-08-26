import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { Navigation } from '../Navigation';

describe('Navigation', () => {
  it('snapshot', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
