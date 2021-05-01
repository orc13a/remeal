import * as api from '../api';
import { SIGNUP } from '../actionTypes';

export const signupUser = (userData, history) => async (dispatch) => {
    try {
        const { data } = await api.signupUser(userData);
        dispatch({
            type: SIGNUP,
            payload: data
        });
        history.push('/myFridge');
    } catch (error) {
        console.error(error);
    }
}