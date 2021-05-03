import { ADD_ITEM, DELETE_ITEM, ERROR, CLEAR_ITEM_MESSAGE } from '../actionTypes';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

const addItem = (item = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return action.payload
        case DELETE_ITEM:
            return action.payload
        case CLEAR_ITEM_MESSAGE:
            return {}
        case ERROR:
            return action.payload
        default:
            return item;
    }
}

export default addItem;