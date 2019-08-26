import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 8 * 30;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigationHeader: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    'navigationHeader-shift': {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    'navigationHeader-MenuButton': {
      marginRight: 36,
    },
    'navigationHeader-MenuButton-hide': {
      display: 'none',
    },
  })
);

interface Props {
  open: boolean;
  handleDrawerOpen: () => void;
}

export const NavigationHeader: FunctionComponent<Props> = (props) => {
  const classes = useStyles();

  const { open, handleDrawerOpen } = props;

  return (
    <AppBar
      className={clsx(classes['navigationHeader'], {
        [classes['navigationHeader-shift']]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes['navigationHeader-MenuButton'], {
            [classes['navigationHeader-MenuButton-hide']]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
