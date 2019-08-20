import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../Home';

describe('Home', () => {
  it('render', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toMatchSnapshot();
  });
});
