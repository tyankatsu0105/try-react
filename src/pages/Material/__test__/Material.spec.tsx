import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Material from '../Material';

describe('Material', () => {
  it('snapshot', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <Material />
      </MemoryRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
