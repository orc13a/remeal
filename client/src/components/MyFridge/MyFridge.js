import { Box, Grid, Container, CircularProgress, Typography } from '@material-ui/core';
// import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';

import { Auth, getLoggedInUser } from '../Auth/Auth';
import AddItem from '../../components/AddItem/AddItem';
import { useEffect } from 'react';
import { getItems } from '../../actions/item';
import Items from '../Items/Items';

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

    const usersItems = useSelector(state => state.items);
    const itemState = useSelector(state => state.addItem);
    
    useEffect(() => {
        dispatch(getItems({ user: getLoggedInUser() }));
    }, [dispatch, usersItems, itemState]);
    
    return (
        <Box style={{ paddingBottom: '65px' }}>
            Home
            { usersItems.message === 'empty' ? <Typography>Dit køleskab er tomt</Typography> :
                usersItems.lenght > 1 ? <LoadingBox /> : ( 
                    <Items items={ usersItems } />
                )
            }
            <AddItem />
        </Box>
    );
}

export default MyFridge;