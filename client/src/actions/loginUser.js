import * as api from '../api';
import { ERROR, LOGIN } from '../actionTypes';
import { authCheck } from './authCheck';

export const loginUser = (userData, history, formType) => async (dispatch) => {
    try {
        if (formType === false) { // Login
            const { data } = await api.loginUser(userData);
            if (data.type === 'error') {
                dispatch({
                    type: ERROR,
                    payload: data,
                });
            } else {
                dispatch({
                    type: LOGIN,
                    payload: data,
                });
                dispatch(authCheck());
            }
        } else { // Signup
            const { data } = await api.signupUser(userData);
            if (data.type === 'error') {
                dispatch({
                    type: ERROR,
                    payload: data,
                });
            } else {
                dispatch({
                    type: LOGIN,
                    payload: data,
                });
                dispatch(authCheck());
            }
        }
        history.push('/myFridge');
    } catch (error) {
        console.error(error);
    }
}