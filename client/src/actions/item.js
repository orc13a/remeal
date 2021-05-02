import * as api from '../api';
import { ADD_ITEM } from '../actionTypes';

export const addItem = (allData) => async (dispatch) => {
    try {
        const { data } = await api.addItem(allData);
        dispatch({
            type: ADD_ITEM,
            payload: data
        });
    } catch (error) {
        console.error(error);
    }
}