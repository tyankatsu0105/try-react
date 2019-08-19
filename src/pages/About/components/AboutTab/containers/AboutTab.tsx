import React, { FunctionComponent } from 'react';

import { AboutTab as AboutTabComponent } from '../components/AboutTab';

const data = [
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

export const AboutTab: FunctionComponent = () => {
  return (
    <>
      <AboutTabComponent data={data}></AboutTabComponent>
    </>
  );
};
