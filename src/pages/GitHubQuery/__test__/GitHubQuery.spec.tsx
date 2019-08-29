import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import GitHubQuery from '../GitHubQuery';

describe('GitHubQuery', () => {
  it('snapshot', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <GitHubQuery />
      </MemoryRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
