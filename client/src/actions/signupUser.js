import * as api from '../api';
import { SIGNUP } from '../actionTypes';

export const signupUser = (userData) => async (dispatch) => {
    try {
        const { data } = await api.signupUser(userData);
        dispatch({
            type: SIGNUP,
            payload: data
        });
    } catch (error) {
        console.error(error);
    }
}