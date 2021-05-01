import * as api from '../api';
import { LOGIN, LOGOUT } from '../actionTypes';

export const logoutUser = (history) => async (dispatch) => {
    try {
        dispatch({
            type: LOGOUT,
        });
        history.push('/');
    } catch (error) {
        console.error(error);
    }
}