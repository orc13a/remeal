import { Box, Container, Grid, Typography } from "@material-ui/core";
import LoadingBox from '../LoadingBox/LoadingBox';
import PageTitle from "../PageTitle/PageTitle";
import Recipe from "./Recipe/Recipe";

function RecipeContent({ recipe }) {
    if (recipe.message === 'empty') {
        return (
            <Grid container spacing={0} alignItems="center" justify="center" style={{ minHeight: '60vh', textAlign: 'center' }}>
                <Container maxWidth="xs">
                    <Grid item xl={true}>
                        <Typography>
                            Der er ingen opskrifter til dig,<br /><br />tilføj noget til de køleskab.
                        </Typography>
                    </Grid>
                </Container>
            </Grid>
        );
    } else if (recipe.length === 0) {
        return (
            <LoadingBox />
        );
    } else {
        return (
            <Recipe recipe={ recipe } />
        );
    }
}

function recipe() {
    return (
        <Box style={{ paddingBottom: '65px' }}>
            <PageTitle title={ 'Opskrift forslag' } />
            <RecipeContent recipe={ {message: 'empty'} } />
        </Box>
    );
}

export default recipe;