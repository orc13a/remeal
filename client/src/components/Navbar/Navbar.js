import { Typography, Box, Grid } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'universal-cookie';

import Sidebar from './Sidenav/Sidenav';
import styles from './Navbar.module.css';

function Navbar() {
    const cookies = new Cookies();
    const [showMenu, setShowMenu] = useState(false);

    if (cookies.get('userLoggedIn') !== undefined && showMenu == false) {
        setShowMenu(true);
    }

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