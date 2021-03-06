import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import About from '../About';

describe('About', () => {
  it('render', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <About />
      </MemoryRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('text', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <About />
      </MemoryRouter>
    );
    expect(getByText('太郎')).toBeInTheDocument();
  });
});
