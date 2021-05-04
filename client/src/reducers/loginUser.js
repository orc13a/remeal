import { ERROR, LOGIN, LOGOUT } from '../actionTypes';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const loginUser = (user = {}, action) => {
    switch (action.type) {
        case ERROR: 
            return action.payload;
        case LOGIN:
            //return {...user, user: action.payload};
            user = action.payload;
            cookies.set('userLoggedIn', {
                userId: user.userId,
                token: user.token,
                admin: user.admin
            }, { path: '/' });
            return action.payload;
        case LOGOUT:
            cookies.remove('userLoggedIn');
            return { 
                message: 'Du er blevet logget ud', type: 'success'
            };
        default:
            return user;
    }
}

export default loginUser;