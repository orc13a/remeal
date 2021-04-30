import { LOGIN } from '../actionTypes';
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
        default:
            return user;
    }
}

export default loginUser;