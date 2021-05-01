//import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import jwt from 'jsonwebtoken';
import Cookies from 'universal-cookie';

export const Auth = (loginPage) => {
    const history = useHistory();
    const cookies = new Cookies();
    const loggedInUserState = useSelector(state => state.loginUser);
    const loggedInUserCookie = cookies.get('loggedInUser');

    // if (cookies.get('userLoggedIn') === undefined) {
    //     history.push('/');
    // }

    // if (loggedInUser.token !== undefined) {
    //     jwt.verify(loggedInUser.token, 'remealSECRET', function(err, decoded) {
            
    //     });
    // } else {
    //     history.push('/');
    // }

    if (loggedInUserCookie !== undefined) {
        jwt.verify(loggedInUserCookie.token, 'remealSECRET', function(err, decoded) {
            if (decoded.userId === loggedInUserCookie.userId) {
                if (loginPage === true) {
                   history.push('/myFridge'); 
                }
            }
        });
    } else {
        history.push('/');
    }
}