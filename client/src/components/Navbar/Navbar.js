import { Typography, Box, Grid } from '@material-ui/core/';
import { Link } from 'react-router-dom';

import Sidebar from './Sidenav/Sidenav';
import styles from './Navbar.module.css';
import { Auth } from '../Auth/Auth';
import { useSelector } from 'react-redux';

function Navbar() {
    Auth(false);

    const authCheck = useSelector(state => state.authCheck);

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
                    { authCheck ? <Sidebar /> : '' }
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar;