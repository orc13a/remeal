import { LOGIN, LOGOUT } from '../actionTypes';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const loginUser = (user = {}, action) => {
    switch (action.type) {
        case LOGIN:
            //return {...user, user: action.payload};
            user = action.payload;
            cookies.set('userLoggedIn', {
                userId: user.userId,
                token: user.token
            }, { path: '/' });
            return user;
        case LOGOUT:
            cookies.remove('userLoggedIn');
            return { 
                message: 'Du er blevet logget ud', type: 'succes'
            };
        default:
            return user;
    }
}

export default loginUser;