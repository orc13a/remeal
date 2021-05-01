import * as api from '../api';
import { ERROR, LOGIN } from '../actionTypes';

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
            }
        }
        history.push('/myFridge');
    } catch (error) {
        console.error(error);
    }
}