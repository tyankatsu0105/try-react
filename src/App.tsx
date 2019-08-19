import React, { FunctionComponent, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Container } from '@layouts/Container';

import { Home } from '@pages/Home';
import { About } from '@pages/About';

export const App: FunctionComponent = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
};
