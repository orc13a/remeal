import { GET_USER_RECIPES } from '../actionTypes';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const recipes = (recipes = [], action) => {
    switch (action.type) {
        case GET_USER_RECIPES:
            if (action.payload.length !== 0) {
                cookies.set('userRecipes', action.payload);
            } else {
                cookies.remove('userRecipes');
            }
            return action.payload
        default:
            return recipes;
    }
}

export default recipes;