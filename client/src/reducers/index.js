import { combineReducers } from 'redux';

// Reducers
import signupUser from './signupUser';
import loginUser from './loginUser';

export default combineReducers({
    signupUser,
    loginUser,
});