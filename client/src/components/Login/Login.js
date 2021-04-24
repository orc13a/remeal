import { Container, Button, Grid, Typography, TextField } from '@material-ui/core/';

function Login() {
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
        <Container maxWidth="xs">
            <Grid item xl={true}>
                <Typography>
                    <form>
                        <TextField type="email" fullWidth autoFocus id="outlined-basic" label="E-mail" variant="outlined" />
                        <br/><br/>
                        <TextField type="password" fullWidth id="outlined-basic" label="Adgangskode" variant="outlined" />
                        <br/><br/>
                        <Button size="large" fullWidth variant="contained" color="primary">Log ind</Button>
                    </form>
                </Typography>
            </Grid>
        </Container>
        </Grid>
    );
}

export default Login;