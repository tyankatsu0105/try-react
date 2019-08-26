---
to: src/shared/<%= dir %>/<%= h.changeCase.pascalCase(name) %>/__test__/<%= h.changeCase.pascalCase(name) %>.spec.ts
---
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { <%= h.changeCase.pascalCase(name) %> } from '../<%= h.changeCase.pascalCase(name) %>';

describe('<%= h.changeCase.pascalCase(name) %>', () => {
  it('snapshot', () => {
    const { baseElement } = render(
      <<%= h.changeCase.pascalCase(name) %> />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
