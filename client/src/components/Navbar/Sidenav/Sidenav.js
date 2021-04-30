import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import KitchenIcon from '@material-ui/icons/Kitchen';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import Cookies from 'universal-cookie';

import styles from './Sidenav.module.css';
import Auth from '../../../Auth/Auth';

const useStyles = makeStyles({
  list: {
    width: 275,
  },
  fullList: {
    width: 'auto',
  },
});

function Sidenav() {
    Auth();

    const cookies = new Cookies();
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
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
            <List className={ styles.buttons }>
                <Link to="/myFridge">
                    <ListItem button key="myFridge">
                        <ListItemIcon><KitchenIcon /></ListItemIcon>
                        <ListItemText>
                            <Typography color="textPrimary">Mit køleskab</Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/recipes">
                    <ListItem button key="recipes">
                        <ListItemIcon><RestaurantIcon /></ListItemIcon>
                        <ListItemText>
                            <Typography color="textPrimary">Opskrifter</Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/profil">
                    <ListItem button key="profil">
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText>
                            <Typography color="textPrimary">Profil</Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/settings">
                    <ListItem button key="settings">
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText>
                            <Typography color="textPrimary">Indstillinger</Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Divider />
                <ListItem button key="logout" onClick={ () => { cookies.remove('userLoggedIn') } }>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText>Log ud</ListItemText>
                </ListItem>
            </List>
        </div>
    );

  return (
    <React.Fragment key={'right'}>
        <IconButton onClick={toggleDrawer('right', true)} style={{ position: 'relative', top: '2.5px' }}>
            <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
        </Drawer>
    </React.Fragment>
  );
}

export default Sidenav;