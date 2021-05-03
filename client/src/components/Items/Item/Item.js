import { Typography, Container, Paper, Grid } from '@material-ui/core';
import { formateDate } from '../../../formatDate/formateDate';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Item({ item }) {
    return (
        <Container maxWidth="sm">
            <Paper elevation={2} style={{ padding: '20px 0px', marginBottom: '25px'}}>
                <Grid container spacing={0} justify="space-evenly" direction="row" alignItems="center">
                    <Grid item sx={6}>
                        <Typography>
                            {item.item}
                        </Typography>
                    </Grid>
                    <Grid item sx={1}>
                        <Typography>
                            {item.amount} stk.
                        </Typography>
                    </Grid>
                    <Grid item sx={4}>
                        <Typography>
                            { formateDate(item.expirationDate) }
                        </Typography>
                    </Grid>
                    <Grid item sx={1} style={{ textAlign: 'right' }}>
                        <MoreVertIcon />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Item;