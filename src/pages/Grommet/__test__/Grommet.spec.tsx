import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import Grommet from '../Grommet';

describe('Grommet', () => {
  it('snapshot', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <Grommet />
      </MemoryRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
