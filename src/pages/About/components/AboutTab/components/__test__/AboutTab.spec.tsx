import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { AboutTab } from '../AboutTab';

const mockData = [
  {
    id: 1,
    name: '太郎',
    age: 25,
  },
  {
    id: 2,
    name: '花子',
    age: 20,
  },
  {
    id: 3,
    name: 'ジュニア',
    age: 1,
  },
];

describe('AboutTab', () => {
  it('render', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/']}>
        <AboutTab data={mockData} />
      </MemoryRouter>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('text', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <AboutTab data={mockData} />
      </MemoryRouter>
    );
    expect(getByText('太郎')).toBeInTheDocument();
  });
});
