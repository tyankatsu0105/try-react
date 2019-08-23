import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import FormikForm from '../FormikForm';

describe('FormikForm', () => {
  it('snapshot', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <FormikForm />
      </MemoryRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
