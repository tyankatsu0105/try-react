---
to: src/pages/<%= h.changeCase.pascalCase(name) %>/__test__/<%= h.changeCase.pascalCase(name) %>.spec.tsx
---
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import <%= h.changeCase.pascalCase(name) %> from '../<%= h.changeCase.pascalCase(name) %>';

describe('<%= h.changeCase.pascalCase(name) %>', () => {
  it('snapshot', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <<%= h.changeCase.pascalCase(name) %> />
      </MemoryRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
