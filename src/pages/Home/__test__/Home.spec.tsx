import React from 'react';
import { Helmet } from 'react-helmet';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Home from '../Home';

describe('Home', () => {
  it('render', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toMatchSnapshot();
  });

  it('text', () => {
    const { getByText } = render(<Home />);
    expect(getByText('This is')).toBeInTheDocument();
  });

  it('meta', () => {
    render(<Home />);
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('This is Home');
  });
});
