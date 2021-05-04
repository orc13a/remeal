import { Box, Container, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import LoadingBox from '../LoadingBox/LoadingBox';
import PageTitle from "../PageTitle/PageTitle";
import Recipe from "./Recipe/Recipe";
import Cookies from 'universal-cookie';


function RecipeContent({ recipes }) {
    //recipes === undefined && recipes.message === 'empty'
    if (recipes === undefined) {
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
    } else if (recipes.length === 0) {
        return (
            <LoadingBox />
        );
    } else {
        return (
            <Box style={{ textAlign: 'center' }}>
                { recipes.map((recipe) => (
                    <Recipe key={ recipe.recipeId } recipe={ recipe } />
                )) }
            </Box>
        );
    }
}

function Recipes() {
    //const usersRecipes = useSelector(state => state.recipes);
    const cookies = new Cookies();
    const usersRecipes = cookies.get('userRecipes');

    console.log(usersRecipes);
    return (
        <Box style={{ paddingBottom: '65px' }}>
            <PageTitle title={ 'Opskrift forslag' } />
            <RecipeContent recipes={ usersRecipes } />
        </Box>
    );
}

export default Recipes;