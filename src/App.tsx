import React, { FunctionComponent, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Container } from '@layouts/Container';

import { Home } from '@pages/Home';

export const App: FunctionComponent = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
};
