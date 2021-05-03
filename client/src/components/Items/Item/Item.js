import { Typography, Container, Paper, Grid, IconButton, Divider } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { formateDate } from '../../../formatDate/formateDate';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';
import { deleteItem } from '../../../actions/item';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from '../../Auth/Auth';

function Item({ item }) {
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleDelete = () => {
        const allData = {
            item,
            user: getLoggedInUser()
        }

        dispatch(deleteItem(allData));
        handleClose();
    }
    
    return (
        <Container maxWidth="md">
            <Paper elevation={2} style={{ padding: '10px 0px', marginBottom: '25px'}}>
                <Grid container spacing={0} justify="space-evenly" direction="row" alignItems="center">
                    <Grid item style={{ width: '20%' }}>
                        <Typography>
                            { item.item }
                        </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item style={{ width: '5%' }}>
                        <Typography>
                            { item.amount }
                        </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item>
                        <Typography>
                            { formateDate(item.expirationDate) }
                        </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item style={{ textAlign: 'right', width: '5%' }}>
                        <IconButton onClick={ handleClick } aria-label="options">
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={ anchorEl }
                            keepMounted
                            open={ Boolean(anchorEl) }
                            onClose={ handleClose }
                        >
                            <MenuItem onClick={ handleClose }>Rediger</MenuItem>
                            <MenuItem onClick={ handleDelete }>Slet</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Item;