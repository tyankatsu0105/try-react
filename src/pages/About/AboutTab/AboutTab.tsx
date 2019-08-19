import React, { FunctionComponent } from 'react';
import { Link, Route } from 'react-router-dom';

import { AboutTabItem } from './Components/AboutTabItem';

const data = [
  {
    id: 1,
    name: '太郎',
  },
  {
    id: 2,
    name: '花子',
  },
  {
    id: 3,
    name: 'ジュニア',
  },
];

const AboutTab: FunctionComponent = () => {
  return (
    <>
      {data.map((item) => (
        <Link key={item.id} to={`/about/${item.id}`}>
          {item.name}
        </Link>
      ))}
      <Route path="/about/:userId" component={AboutTabItem} />
    </>
  );
};

export default AboutTab;
