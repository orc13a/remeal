import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import KitchenIcon from '@material-ui/icons/Kitchen';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// import theme from '../../../theme';

const useStyles = makeStyles({
  list: {
    width: 275,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    menuOpen: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            <Link to="/" style={{ color: 'black' }}>
                <ListItem button>
                    <ListItemIcon><KitchenIcon /></ListItemIcon>
                    <ListItemText>Mit køleskab</ListItemText>
                </ListItem>
            </Link>
            <Link to="profil" style={{ color: 'black' }}>
                <ListItem button>
                    <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                    <ListItemText>Profil</ListItemText>
                </ListItem>
            </Link>
            <Divider />
            <ListItem button>
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText>Log ud</ListItemText>
            </ListItem>
        </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)}>
                <MenuIcon color="secondary" fontSize="large" />
            </IconButton>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
