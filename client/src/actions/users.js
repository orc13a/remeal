import * as api from '../api';

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        dispatch({ type: 'ERROR', payload: error });
    }
}

export const loginUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(user);
        dispatch({ type: 'LOGIN', payload: data });
    } catch (error) {
        dispatch({ type: 'ERROR', payload: error });
    }
}