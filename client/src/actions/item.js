import * as api from '../api';
import { ADD_ITEM, GET_ITEMS, DELETE_ITEM, CLEAR_ITEM_MESSAGE } from '../actionTypes';

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

export const deleteItem = (itemId) => async (dispatch) => {
    try {
        const { data } = await api.deleteItem(itemId);
        dispatch({
            type: DELETE_ITEM,
            payload: data
        });
    } catch (error) {
        console.error(error);
    }
}

export const clearItemMessage = () => async (dispatch) => {
    try {
        dispatch({
            type: CLEAR_ITEM_MESSAGE
        })
    } catch (error) {
        console.error(error);
    }
}