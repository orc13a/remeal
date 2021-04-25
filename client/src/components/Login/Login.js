import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Card, Container, Button, Grid, Typography, TextField } from '@material-ui/core/';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        minWidth: 300,
    },
    title: {
        fontSize: 30,
        fontWeight: 500,
        marginBottom: 25,
        textAlign: 'center'
    }
});

function Login() {
    const classes = useStyles();

    return (
        <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
            <Container maxWidth="xs">
                <Grid item xl={true}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography className={ classes.title }>
                                Log ind
                            </Typography>
                            <TextField type="email" fullWidth autoFocus id="outlined-basic" label="E-mail" variant="outlined" />
                            <br/><br/>
                            <TextField type="password" fullWidth id="outlined-basic" label="Adgangskode" variant="outlined" />
                            <br/><br/>
                            <Button size="large" fullWidth variant="contained" color="primary">Log ind</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </Grid>
    );
}

export default Login;