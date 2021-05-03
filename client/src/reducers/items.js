import { GET_ITEMS, ERROR } from '../actionTypes';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

const items = (item = [], action) => {
    switch (action.type) {
        case GET_ITEMS:
            return action.payload
        case ERROR:
            return action.payload
        default:
            return item;
    }
}

export default items;