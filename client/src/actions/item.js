import * as api from '../api';

export const addItem = (item) => async (dispatch) => {
    try {
        const { data } = await api.addItem(item);
        dispatch({ type: 'ADD', payload: data });
    } catch (error) {
        console.error(error);
    }
}