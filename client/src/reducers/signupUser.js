import { SIGNUP } from '../actionTypes';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const signupUser = (userData = {}, action) => {
    switch (action.type) {
        case SIGNUP:
            userData = action.payload;
            cookies.set('userLoggedIn', {
                userId: userData.userId,
                token: userData.token
            }, { path: '/' });
            return userData;
        default:
            return userData;
    }
}

export default signupUser;