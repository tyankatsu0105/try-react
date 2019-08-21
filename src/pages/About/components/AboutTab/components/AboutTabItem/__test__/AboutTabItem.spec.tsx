import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AboutTabItem } from '../AboutTabItem';

const mock: any = jest.fn();
const mockMatchParams = {
  params: {
    userId: '1',
  },
};

const props = {
  match: {
    ...mockMatchParams,
    ...mock,
  },
  history: mock,
  location: mock,
};

describe('AboutTabItem', () => {
  it('render', () => {
    const { baseElement } = render(<AboutTabItem {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('text', () => {
    const { getByText } = render(<AboutTabItem {...props} />);
    expect(getByText('太郎')).toBeInTheDocument();
  });
});
