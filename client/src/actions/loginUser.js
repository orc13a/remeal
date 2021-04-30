import * as api from '../api';
import { LOGIN } from '../actionTypes';

export const loginUser = (userData) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(userData);
        dispatch({
            type: LOGIN,
            payload: data,
        });
    } catch (error) {
        console.error(error);
    }
}