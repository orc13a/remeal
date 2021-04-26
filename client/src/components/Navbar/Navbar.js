import { Typography, Box, Grid, Button, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <Box style={{ padding: '10px 25px' }}>
            <Grid container>
                <Grid item xs={8} justify="center">
                    <Typography style={{ lineHeight: '57px' }} variant="h4" color="primary">
                            remeal
                    </Typography>
                </Grid>
                <Grid item xs={4} style={{ textAlign: 'right' }}>
                    <IconButton>
                        <MenuIcon color="secondary" fontSize="large" />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar;