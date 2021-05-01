import { Typography, Box, Grid } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Sidebar from './Sidenav/Sidenav';
import styles from './Navbar.module.css';
import { Auth, IsLoggedIn } from '../Auth/Auth';
import { useSelector } from 'react-redux';

function Navbar() {
    Auth(false);

    const [showMenu, setShowMenu] = useState(false);
    const authCheck = useSelector(state => state.authCheck);

    useEffect(() => {
        // if (IsLoggedIn() === true) {
        //     setShowMenu(true);
        // }
        setShowMenu(authCheck);
    }, []);

    // ## Mærkeligt - menu iconet kommer efter login og forsvinder efter logout, kun hvis denne linje er her
    // console.log(useSelector(state => state));

    return (
        <Box className={ styles.nav }>
            <Grid container>
                <Grid item xs={8}>
                    <Link to="/myFridge" style={{ textDecoration: 'none' }}>
                        <Typography style={{ lineHeight: '57px', letterSpacing: '1px', fontFamily: 'Racing Sans One, cursive' }} variant="h4" color="primary">
                            remeal
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={4} style={{ textAlign: 'right' }} className={ styles.sidenav }>
                    { showMenu ? <Sidebar /> : '' }
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar;