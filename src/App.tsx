import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Container } from '@layouts/Container';
import { Home } from '@pages/Home/components';
import About from '@pages/About/components';
import { Contents } from '@pages/Contents/components';

export const App: FC = () => {
  return (
    <Container>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contents" component={Contents} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Container>
  );
};
