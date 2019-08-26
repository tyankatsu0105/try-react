---
to: src/shared/<%= dir %>/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    <%= h.changeCase.pascalCase(name) %>: {

    },
  })
);

export const <%= h.changeCase.pascalCase(name) %>: FunctionComponent = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.<%= h.changeCase.pascalCase(name) %>}>
      
    </div>
  );
};