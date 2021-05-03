import { combineReducers } from 'redux';

// Reducers
// import signupUser from './signupUser';
import loginUser from './loginUser';
import authCheck from './authCheck';
import addItem from './addItem';
import items from './items';

export default combineReducers({
    loginUser,
    authCheck,
    addItem,
    items,
});