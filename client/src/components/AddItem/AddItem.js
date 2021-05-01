import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import DateFnsUtils from '@date-io/date-fns';
import deLocale from "date-fns/locale/da";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

function AddItem() {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleClickOpen = () => {
        setOpen(true);
        setSelectedDate();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <Box>
            <Tooltip arrow title="Tilføj varer til dit køleskab" placement="top">
                <Fab onClick={ handleClickOpen } style={{ position: 'absolute', 'bottom': '25px', right: '25px' }} size="medium" color="primary" aria-label="addItem">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Dialog maxWidth="xs" open={ open } onClose={ handleClose } aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Tilføj varer</DialogTitle>
                <DialogContent>
                {/* <DialogContentText>
                    Tekst
                </DialogContentText> */}
                <TextField
                    autoFocus
                    margin="normal"
                    id="itemName"
                    label="Varerne"
                    type="teskt"
                    name="item"
                    placeholder="Mælk"
                    fullWidth
                />
                <TextField
                    margin="normal"
                    id="itemAmount"
                    label="Antal"
                    type="number"
                    name="amount"
                    placeholder="1"
                    value={1}
                    fullWidth
                />
                <MuiPickersUtilsProvider locale={deLocale} utils={ DateFnsUtils }>
                    <KeyboardDatePicker
                    margin="normal"
                    id="expirationDate"
                    name="expirationDate"
                    label="Udløbsdato"
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    okLabel="Vælg"
                    cancelLabel="Annuller"
                    showTodayButton
                    todayLabel="I dag"
                    fullWidth
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />
                </MuiPickersUtilsProvider>
                </DialogContent>
                <DialogActions>
                <Button onClick={ handleClose } color="primary">
                    Annuller
                </Button>
                <Button onClick={ handleClose } color="primary">
                    Tilføj
                </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default AddItem;