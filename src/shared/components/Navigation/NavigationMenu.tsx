import React, { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Link,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const menus = [
  {
    path: '/',
    text: 'ホーム',
  },
  {
    path: '/about',
    text: '自己紹介',
  },
  {
    path: '/material',
    text: 'マテリアル',
  },
  {
    path: '/formik-form',
    text: 'formikフォーム',
  },
  {
    path: '/github-query',
    text: 'GitHub Query',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'navigationMenu-Header': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: `0 ${theme.spacing(1)}`,
      ...theme.mixins.toolbar,
    },
  })
);

interface Props {
  handleDrawerClose: () => void;
}

export const NavigationMenu: FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  const { handleDrawerClose } = props;

  return (
    <nav className="navigationMenu">
      <div className={classes['navigationMenu-Header']}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List className="navigationMenu-List">
        {menus.map((menu) => (
          <Link
            key={menu.path}
            component={RouterLink}
            to={menu.path}
            className="navigationMenu-ListItem"
          >
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </nav>
  );
};
