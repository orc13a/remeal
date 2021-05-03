import { ADD_ITEM } from '../actionTypes';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

const addItem = (item = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return action.payload
        default:
            return item;
    }
}

export default addItem;