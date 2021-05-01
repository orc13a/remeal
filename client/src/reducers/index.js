import { combineReducers } from 'redux';

// Reducers
// import signupUser from './signupUser';
import loginUser from './loginUser';
import authCheck from './authCheck';

export default combineReducers({
    loginUser,
    authCheck,
});