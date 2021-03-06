import { Box, Grid, Container, Typography } from '@material-ui/core';
// import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';

import { Auth, getLoggedInUser } from '../Auth/Auth';
import AddItem from '../../components/AddItem/AddItem';
import { useEffect, useState } from 'react';
import { getItems } from '../../actions/item';
import Items from '../Items/Items';
import LoadingBox from '../LoadingBox/LoadingBox';
import PageTitle from '../PageTitle/PageTitle';
import { sendUserItems } from '../sendUserItems/sendUserItems';

function FridgeContent({ items }) {
    if (items.message === 'empty') {
        return (
            <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: '60vh', textAlign: 'center' }}>
                <Container maxWidth="xs">
                    <Grid item xl={true}>
                        <Typography>
                            Dit køleskab er tomt
                        </Typography>
                    </Grid>
                </Container>
            </Grid>
        );
    } else if (items.length === 0) {
        return (
            <LoadingBox />
        );
    } else {
        return (
            <Items items={ items } />
        );
    }
}

function MyFridge() {
    Auth(false);

    const dispatch = useDispatch();

    const [itemsSend, setItemsSend] = useState(false);

    const usersItems = useSelector(state => state.items);
    const itemState = useSelector(state => state.addItem);
    //const recipesState = useSelector(state => state.recipes);
    
    useEffect(() => {
        dispatch(getItems({ user: getLoggedInUser() }));

        if (itemsSend === false) {
            sendUserItems(dispatch, usersItems);
            setItemsSend(true);
        }

    }, [dispatch, usersItems, itemState]);
    
    return (
        <Box style={{ paddingBottom: '65px' }}>
            <PageTitle title={ 'Mit køleskab' } />
            <FridgeContent items={ usersItems } />
            <AddItem />
        </Box>
    );
}

export default MyFridge;