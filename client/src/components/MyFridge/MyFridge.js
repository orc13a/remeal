import React from 'react';
import { Typography, Box } from '@material-ui/core/';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                    <DialogContent>
                        <DialogContentText>
                            Udfyld så meget information som muligt om den varer du vil tilføje til dit køleskab.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Annullere
                        </Button>
                        <Button onClick={handleClose} color="primary">
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