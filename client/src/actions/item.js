import * as api from '../api';
import { ADD_ITEM, GET_ITEMS } from '../actionTypes';

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

export const getItems = (user) => async (dispatch) => {
    try {
        const { data } = await api.getUsersItems(user);
        dispatch({
            type: GET_ITEMS,
            payload: data
        });
    } catch (error) {
        console.error(error);
    }
}