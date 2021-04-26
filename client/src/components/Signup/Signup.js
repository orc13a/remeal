import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Card, Container, Button, Grid, Typography, TextField } from '@material-ui/core/';
import { Link } from 'react-router-dom';

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
                                Opret bruger
                            </Typography>
                            <form>
                                <TextField required type="text" fullWidth autoFocus id="outlined-basic" label="Fornavn" color="secondary" variant="outlined" />
                                <br/><br/>
                                <TextField required type="text" fullWidth id="outlined-basic" label="Efternavn" color="secondary" variant="outlined" />
                                <br/><br/>
                                <TextField required type="email" fullWidth id="outlined-basic" label="E-mail" color="secondary" variant="outlined" />
                                <br/><br/>
                                <TextField required type="password" fullWidth id="outlined-basic" label="Adgangskode" color="secondary" variant="outlined" />
                                <br/><br/>
                                <TextField required type="password" fullWidth id="outlined-basic" label="Adgangskode gentag" color="secondary" variant="outlined" />
                                <br/><br/>
                                <Button type="submit" size="large" fullWidth variant="contained" color="primary">Opret</Button>
                                <br/><br/>
                                <Link to="/login">
                                    <Button color="secondary" ize="large" fullWidth>Log ind</Button>
                                </Link>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </Grid>
    );
}

export default Login;