import React, { FC, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Container } from '@layouts/Container';

const Home = lazy(() => import('@pages/Home/components'));
const About = lazy(() => import('@pages/About/components'));
const Contents = lazy(() => import('@pages/Contents/components'));
const Form = lazy(() => import('@pages/Form/components'));
const Context = lazy(() => import('@pages/Context/components'));
const Hooks = lazy(() => import('@pages/Hooks/components'));
const Api = lazy(() => import('@src/pages/Api/components'));

export const App: FC = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contents" component={Contents} />
          <Route path="/form" component={Form} />
          <Route path="/context" component={Context} />
          <Route path="/hooks" component={Hooks} />
          <Route path="/api" component={Api} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
};
