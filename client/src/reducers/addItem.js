import { ADD_ITEM, ERROR } from '../actionTypes';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

const addItem = (item = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return action.payload
        case ERROR:
            return action.payload
        default:
            return item;
    }
}

export default addItem;