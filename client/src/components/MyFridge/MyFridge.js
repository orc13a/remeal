import React, { useState } from 'react';
import { Typography, Box } from '@material-ui/core/';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch } from 'react-redux';
//import { makeStyles } from '@material-ui/core/styles';
//import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Navbar from '../Navbar/Navbar';
//import theme from '../../theme';
//import zIndex from '@material-ui/core/styles/zIndex';

function MyFridge() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [itemData, setItemData] = useState({
        item: '',
        amount: 1,
        expiryDate: selectedDate
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleChange = (e) => {
        if (e.target.name !== undefined && e.target.name === 'item', e.target.name === 'amount', e.target.name === 'expiryDate') {
            setItemData({...itemData, [e.target.name]: e.target.value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(itemData);
    }

    return (
        <Box>
            <Navbar />

            <Box id="content" style={{ padding: '0px 25px 15px 25px' }}>
                <Box>
                    <Typography variant="h4">
                        Mit køleskab
                    </Typography>
                </Box>
                <Dialog maxWidth="xs" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Tilføj til køleskabet</DialogTitle>
                    <form onSubmit={ handleSubmit }>
                        <DialogContent>
                            <DialogContentText>
                                Udfyld så meget information som muligt om den varer du vil tilføje til dit køleskab.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="normal"
                                id="item"
                                label="Genstand"
                                type="text"
                                fullWidth
                                required
                                name="item"
                                onChange={ (e) => setItemData({...itemData, item: e.target.value}) }
                            />
                            <TextField
                                margin="none"
                                id="item"
                                label="Antal"
                                name="amount"
                                type="number"
                                defaultValue={1}
                                fullWidth
                                onChange={ (e) => setItemData({...itemData, amount: e.target.value}) }
                            />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                fullWidth
                                disableToolbar
                                name="expiryDate"
                                variant="inline"
                                format="dd/MM/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Udløbsdato"
                                value={selectedDate}
                                onChange={(e) => setItemData({...itemData, expiryDate: e.target.value})}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </MuiPickersUtilsProvider>
                        </DialogContent>
                    </form>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Annullere
                        </Button>
                        <Button onClick={handleSubmit} color="primary">
                            Tilføj
                        </Button>
                    </DialogActions>
                </Dialog>
                <div style={{ position: 'absolute', bottom: "25px", right: "25px", zIndex: '1199' }}>
                    <Tooltip title="Tilføj til køleskab" placement="top" arrow>
                        <Fab size="medium" aria-label="addItem" color="primary" onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </div>
            </Box>
        </Box>
    );
}

export default MyFridge;