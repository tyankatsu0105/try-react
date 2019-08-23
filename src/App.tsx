import React, { FunctionComponent, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

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
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/formik-form" component={FormikForm} />
        <Route path="/material" component={Material} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};
