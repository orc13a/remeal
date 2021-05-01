// import * as api from '../api';
import { LOGOUT, AUTH_OUT } from '../actionTypes';

export const logoutUser = (history) => async (dispatch) => {
    try {
        dispatch({
            type: LOGOUT,
        });
        dispatch({
            type: AUTH_OUT,
        });
        history.push('/');
    } catch (error) {
        console.error(error);
    }
}