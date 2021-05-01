import { AUTH, AUTH_OUT } from '../actionTypes';

const authCheck = (status = false, action) => {
    switch (action.type) {
        case AUTH:
            return true;
        case AUTH_OUT:
            return false;
        default:
            return status;
    }
}

export default authCheck;