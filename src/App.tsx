import React, { FunctionComponent, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Container } from '~layouts/Container';

import { Home } from '~pages/Home';
import { About } from '~pages/About';
import { Grommet } from '~pages/Grommet';
import { DummyForm } from '~pages/DummyForm';
import { FormikForm } from '~pages/FormikForm';

export const App: FunctionComponent = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/grommet" component={Grommet} />
          <Route path="/dummy-form" component={DummyForm} />
          <Route path="/formik-form" component={FormikForm} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
};
