import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import DateFnsUtils from '@date-io/date-fns';
import deLocale from "date-fns/locale/da";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../actions/item';
import { Auth, getLoggedInUser } from '../Auth/Auth';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const defaultItemData = {
    item: '',
    amount: 1,
    expirationDate: new Date()
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AddItem() {
    Auth(false);

    const dispatch = useDispatch();

    const itemState = useSelector(state => state.addItem);
    const [open, setOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    // const [selectedDate, setSelectedDate] = useState(new Date());
    const [itemData, setItemData] = useState(defaultItemData);
    
    useEffect(() => {
        if (itemState.message !== undefined) {
            setAlertOpen(true);
            
        }
    }, [itemState]);

    const alertHandleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(addItem({}));
        setAlertOpen(false);
    };

    const handleClickOpen = () => {
        setItemData({ ...itemData, expirationDate: new Date() });
        setOpen(true);
        //setSelectedDate();
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDateChange = (date) => {
        // setSelectedDate(date);
        setItemData({ ...itemData, expirationDate: date });
    };

    const handleChange = (e) => {
        if (e.target !== undefined) {
            setItemData({ ...itemData, [e.target.name]: e.target.value });
        }
    }

    const onSubmit = () => {
        const allData = {
            itemData,
            user: getLoggedInUser()
        }

        dispatch(addItem(allData));
        handleClose();
    }

    return (
        <Box>
            <Snackbar open={ alertOpen } autoHideDuration={2000} onClose={ alertHandleClose }>
                <Alert severity={ itemState.type }>
                    { itemState.message }
                </Alert>
            </Snackbar>
            <Tooltip arrow title="Tilføj en vare til køleskabet" placement="top">
                <Fab onClick={ handleClickOpen } style={{ position: 'fixed', 'bottom': '25px', right: '25px' }} size="medium" color="primary" aria-label="addItem">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Dialog maxWidth="xs" open={ open } onClose={ handleClose } aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Tilføj en vare</DialogTitle>
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
                    onChange={ handleChange }
                />
                <TextField
                    margin="normal"
                    id="itemAmount"
                    label="Antal"
                    type="number"
                    name="amount"
                    placeholder="1"
                    value={ itemData.amount }
                    fullWidth
                    onChange={ handleChange }
                />
                <MuiPickersUtilsProvider locale={ deLocale } utils={ DateFnsUtils }>
                    <KeyboardDatePicker
                    margin="normal"
                    id="expirationDate"
                    name="expirationDate"
                    label="Udløbsdato"
                    format="dd/MM/yyyy"
                    value={ itemData.expirationDate }
                    onChange={ handleDateChange }
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
                <Button onClick={ onSubmit } color="primary">
                    Tilføj
                </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default AddItem;