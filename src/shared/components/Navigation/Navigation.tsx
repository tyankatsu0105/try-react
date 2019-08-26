import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Drawer, Divider } from '@material-ui/core';

import { NavigationMenu } from './NavigationMenu';
import { NavigationHeader } from './NavigationHeader';

const drawerWidth = 8 * 30;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigation: {
      display: 'flex',
    },
    'navigation-Drawer': {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    'navigation-Drawer-open': {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    'navigation-Drawer-close': {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      paddingTop: theme.spacing(10),
    },
  })
);

export const Navigation: FunctionComponent = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const { children } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.navigation}>
      <NavigationHeader open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        variant="permanent"
        className={clsx(classes['navigation-Drawer'], {
          [classes['navigation-Drawer-open']]: open,
          [classes['navigation-Drawer-close']]: !open,
        })}
        classes={{
          paper: clsx({
            [classes['navigation-Drawer-open']]: open,
            [classes['navigation-Drawer-close']]: !open,
          }),
        }}
        {...open}
      >
        <NavigationMenu handleDrawerClose={handleDrawerClose} />
        <Divider />
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  );
};
