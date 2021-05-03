import { Box, Grid, Container, CircularProgress } from '@material-ui/core';
// import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';

import { Auth, getLoggedInUser } from '../Auth/Auth';
import AddItem from '../../components/AddItem/AddItem';
import { useEffect } from 'react';
import { getItems } from '../../actions/item';

function LoadingBox() {
    return (
        <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: '72vh', textAlign: 'center' }}>
            <Container maxWidth="xs">
                <Grid item xl={true}>
                    <CircularProgress />
                </Grid>
            </Container>
        </Grid>
    );
}

function MyFridge() {
    Auth(false);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getItems({ user: getLoggedInUser() }));
    }, []);

    const usersItems = useSelector(state => state.items);

    return (
        <Box>
            Home
            {!usersItems ? <LoadingBox /> : 'hej'}
            <AddItem />
        </Box>
    );
}

export default MyFridge;