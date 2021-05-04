import * as api from '../api';
import { GET_USER_RECIPES } from '../actionTypes';

export const getUserRecipes = (itemsData) => async (dispatch) => {
    try {
        const { data } = await api.getUserRecipes(itemsData);
        dispatch({
            type: GET_USER_RECIPES,
            payload: data
        });
    } catch (error) {
        console.error(error);
    }
}