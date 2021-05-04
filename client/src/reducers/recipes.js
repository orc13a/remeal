import { GET_USER_RECIPES } from '../actionTypes';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

const recipes = (recipes = [], action) => {
    switch (action.type) {
        case GET_USER_RECIPES:
            return action.payload
        default:
            return recipes;
    }
}

export default recipes;