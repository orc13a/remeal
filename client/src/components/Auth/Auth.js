//import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux'
import jwt from 'jsonwebtoken';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';
import { authCheck } from '../../actions/authCheck';

export const Auth = (loginPage) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cookies = new Cookies();
    // const loggedInUserState = useSelector(state => state.loginUser);
    const loggedInUserCookie = cookies.get('userLoggedIn');
    
    if (loggedInUserCookie !== undefined) {
        jwt.verify(loggedInUserCookie.token, 'remealSECRET', function(err, decoded) {
            if (decoded !== undefined && decoded.userId === loggedInUserCookie.userId) {
                if (loginPage === true) {
                   history.push('/myFridge'); 
                }
                dispatch(authCheck());
            }
        });
    } else {
        if (loginPage === false) {
            history.push('/');
        }
    }

    cookies.addChangeListener('', (name) => {
        console.log(name);
    });
}

export const getLoggedInUser = () => {
    const cookies = new Cookies();
    return cookies.get('userLoggedIn');
}

export const IsLoggedIn = () => {
    const cookies = new Cookies();
    if (cookies.get('userLoggedIn') !== undefined) {
        return true;
    } else {
        return false;
    }
}