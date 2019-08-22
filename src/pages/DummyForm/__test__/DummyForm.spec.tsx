import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Grommet } from 'grommet';

import DummyForm from '../DummyForm';

describe('DummyForm', () => {
  it('snapshot', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <Grommet>
          <DummyForm />
        </Grommet>
      </MemoryRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
