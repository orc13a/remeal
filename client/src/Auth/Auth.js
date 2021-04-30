import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

function Auth() {
    const history = useHistory();
    const cookies = new Cookies();

    if (cookies.get('userLoggedIn') === undefined) {
        history.push('/');
    }
}

export default Auth;