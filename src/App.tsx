import React, { FunctionComponent, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { Navigation } from '~shared/components/Navigation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(2),
    },
  })
);

import { Home } from '~pages/Home';
import { About } from '~pages/About';
import { FormikForm } from '~pages/FormikForm';
import { Material } from '~pages/Material';
import { GitHubQuery } from '~pages/GitHubQuery';

export const App: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Suspense
      fallback={
        <div>
          <CircularProgress className={classes.progress} />
        </div>
      }
    >
      <Navigation>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/formik-form" component={FormikForm} />
          <Route path="/material" component={Material} />
          <Route path="/github-query" component={GitHubQuery} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </Navigation>
    </Suspense>
  );
};
