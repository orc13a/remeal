import { AUTH } from '../actionTypes';

const authCheck = (status = false, action) => {
    switch (action.type) {
        case AUTH:
            return true;
        default:
            return status;
    }
}

export default authCheck;