import React, { FunctionComponent } from 'react';
import { Link, Route } from 'react-router-dom';

import { AboutTabItem } from '../components/AboutTabItem';

export interface Props {
  data: {
    id: number;
    name: string;
    age: number;
  }[];
}

export const AboutTab: FunctionComponent<Props> = (props) => {
  const { data } = props;

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
