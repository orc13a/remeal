import { Container, Grid, Typography } from "@material-ui/core";

function NotFound() {
    return (
        <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: '60vh', textAlign: 'center' }}>
            <Container maxWidth="xs">
                <Grid item xl={true}>
                    <Typography variant="h3">
                        404<br />Ingen side fundet
                    </Typography>
                </Grid>
            </Container>
        </Grid>
    );
}

export default NotFound;