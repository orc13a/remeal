import { Typography, Container, Paper, Grid } from '@material-ui/core';

function Item({ item }) {
    return (
        <Container maxWidth="sm">
            <Paper elevation={2} style={{ padding: '25px', marginBottom: '25px'}}>
                <Grid spacing={2} justify="space-evenly" direction="row" alignItems="center">
                    <Grid item xs>
                        <Typography>
                            {item.item}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            {item.amount}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Item;