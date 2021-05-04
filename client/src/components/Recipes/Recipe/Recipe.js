import { Container, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Recipe({ recipe }) {
    console.log(recipe);
    return (
        <Container maxWidth="s">
            <Paper elevation={2} style={{ marginBottom: '25px' }}>
                <Grid spacing={3} container justify="center" alignItems="center">
                    <Grid item>
                        <Typography variant="h5">
                            { recipe.recipe }
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Antal ingredienser: { recipe.ingredients.length }
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="options">
                            <MoreVertIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Recipe;