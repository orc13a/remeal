import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import KitchenIcon from '@material-ui/icons/Kitchen';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import Badge from '@material-ui/core/Badge';
import SecurityIcon from '@material-ui/icons/Security';
import Cookies from 'universal-cookie';

import styles from './Sidenav.module.css';
// import { Auth } from '../../Auth/Auth';
import { logoutUser } from '../../../actions/logout';
import { getLoggedInUser } from '../../Auth/Auth';
import { sendUserItems } from '../../sendUserItems/sendUserItems';

const useStyles = makeStyles({
  list: {
    width: 275,
  },
  fullList: {
    width: 'auto',
  },
});

function Sidenav() {

    const dispatch = useDispatch();
    const cookies = new Cookies();

    const history = useHistory();
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });
    const [userRecipes, setUserRecipes] = useState(0);
    const usersItems = useSelector(state => state.items);

    const checkItems = () => {
        sendUserItems(dispatch, usersItems);
    }

    useEffect(() => {
        if (cookies.get('userRecipes') !== undefined) {
            setUserRecipes(cookies.get('userRecipes').length);
        }
    }, [checkItems, dispatch, cookies, userRecipes, usersItems]);

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
                    <ListItem button key="myFridge" onClick={ checkItems }>
                        <ListItemIcon><KitchenIcon /></ListItemIcon>
                        <ListItemText>
                            <Typography color="textPrimary">Mit køleskab</Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/recipes">
                    <ListItem button key="recipes" onClick={ checkItems }>
                        <ListItemIcon>
                            <Badge badgeContent={ userRecipes } color="primary">
                                <RestaurantIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography color="textPrimary">Opskrifter</Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/profil">
                    <ListItem button key="profil" onClick={ checkItems }>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText>
                            <Typography color="textPrimary">Profil</Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link to="/settings">
                    <ListItem button key="settings" onClick={ checkItems }>
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText>
                            <Typography color="textPrimary">Indstillinger</Typography>
                        </ListItemText>
                    </ListItem>
                </Link>
                { getLoggedInUser().admin === false ? '' : (
                    <Link to="/admin">
                        <ListItem button key="settings" onClick={ checkItems }>
                            <ListItemIcon><SecurityIcon /></ListItemIcon>
                            <ListItemText>
                                <Typography color="textPrimary">Admin</Typography>
                            </ListItemText>
                        </ListItem>
                    </Link>
                ) }
                <Divider />
                <ListItem button key="logout" onClick={ () => { dispatch(logoutUser(history)) } }>
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