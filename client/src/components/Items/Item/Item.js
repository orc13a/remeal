import { Typography, Container, Paper, IconButton, Divider, Tooltip, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { formateDate } from '../../../formatDate/formateDate';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from 'react';
import { deleteItem } from '../../../actions/item';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from '../../Auth/Auth';
import cssStyles from './Item.module.css';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
            </IconButton>
        ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

// Component
function Item({ item }) {
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const [helpDialogOpen, setHelpDialogOpen] = useState(false);

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

    const helpDialoghandleClickOpen = () => {
        setHelpDialogOpen(true);
        handleClose();
    };
    const helpDialogHandleClose = () => {
        setHelpDialogOpen(false);
    };
    
    return (
        <Container maxWidth="xs">
            <Dialog onClose={ helpDialogHandleClose } aria-labelledby="customized-dialog-title" open={ helpDialogOpen }>
                <DialogTitle id="customized-dialog-title" onClose={ helpDialogHandleClose }>
                    Hjælp
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Hvis dato'en skriftfarve er rød, så er det fordi at der er tre eller mindre dage til at du er på udløbsdatoen eller forbi den.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={ helpDialogHandleClose } color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
            <Paper elevation={2} style={{ marginBottom: '25px' }}>
                <table style={{ padding: '15px', verticalAlign: 'middel' }}>
                    <tbody className={cssStyles.itemTable}>
                        <tr>
                            <td colSpan="2" className={cssStyles.itemTdTitle}>
                                <Tooltip title="Vareren" placement="top" arrow>
                                    <Typography variant="h6">
                                        { item.item }
                                    </Typography>
                                </Tooltip>
                            </td>
                            <td rowSpan="2" style={{ width: '10%', textAlign: 'right', position: 'relative', top: '3.5px' }}>
                                <Tooltip title="Muligheder" placement="left" arrow>
                                    <IconButton onClick={ handleClick } aria-label="options">
                                        <MoreVertIcon />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    id={'item-option-menu-' + item.itemId}
                                    anchorEl={ anchorEl }
                                    keepMounted
                                    open={ Boolean(anchorEl) }
                                    onClose={ handleClose }
                                >
                                    <MenuItem onClick={ helpDialoghandleClickOpen }>Hjælp</MenuItem>
                                    <MenuItem onClick={ handleClose }>Rediger</MenuItem>
                                    <MenuItem onClick={ handleDelete }>Slet</MenuItem>
                                </Menu>
                            </td>
                        </tr>
                        <tr>
                            <td className={ cssStyles.itemTdInfo }>
                                <Tooltip title="Antal" placement="bottom" arrow>
                                    <Typography>
                                        { item.amount } stk.
                                    </Typography>
                                </Tooltip>
                                <Divider orientation="vertical" />
                            </td>
                            <td className={ cssStyles.itemTdInfo }>
                                <Tooltip title="Udløbsdato" placement="bottom" arrow>
                                    { formateDate(item.expirationDate) }
                                    {/* <Typography>
                                        { formateDate(item.expirationDate) }
                                    </Typography> */}
                                </Tooltip>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Paper>
        </Container>
    );
}

export default Item;