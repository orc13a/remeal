import { Typography, Box, Grid, Button, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';

function Navbar() {
    return (
        <Box style={{ padding: '10px 25px' }}>
            <Grid container>
                <Grid item xs={8} justify="center">
                    <Link to="/">
                        <Typography style={{ lineHeight: '57px', letterSpacing: '1px' }} variant="h4" color="primary">
                                    remeal
                        </Typography>
                    </Link>
                </Grid>
                <Grid item xs={4} style={{ textAlign: 'right' }}>
                    <Sidebar />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar;