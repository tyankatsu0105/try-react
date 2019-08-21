import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { AboutTab } from '../components/AboutTab';

describe('Home', () => {
  it('render', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <AboutTab />
      </MemoryRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('text', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <AboutTab />
      </MemoryRouter>
    );
    expect(getByText('太郎')).toBeInTheDocument();
  });
});
