// import * as api from '../api';
import { AUTH } from '../actionTypes';

export const authCheck = () => async (dispatch) => {
    try {
        dispatch({
            type: AUTH,
        });
    } catch (error) {
        console.error(error);
    }
}