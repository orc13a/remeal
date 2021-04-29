import { combineReducers } from 'redux';

import users from './users';
import item from './item';

export default combineReducers({
    users,
    item,
});