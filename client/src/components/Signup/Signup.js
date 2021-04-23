import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Signup.module.css';
import { createUser } from '../../actions/users';

const Signup = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(userData));
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={ handleSubmit }>
                <input type="text" name="signupFirstName" placeholder="Fornavn" value={ userData.firstName } onChange={ (e) => setUserData({ ... userData, firstName: e.target.value }) } />
                <input type="text" name="signupLastName" placeholder="Efternavn" value={ userData.lastName } onChange={ (e) => setUserData({ ... userData, lastName: e.target.value }) } />
                <input type="email" name="signupEmail" placeholder="E-mail" value={ userData.email } onChange={ (e) => setUserData({ ... userData, email: e.target.value }) } />
                <input type="password" name="signupPassword" placeholder="Adgangskode" value={ userData.password } onChange={ (e) => setUserData({ ... userData, password: e.target.value }) } />
                <input type="password" name="signupPasswordRepeat" placeholder="Gentag adgangskode" />
                <button type="submit">Opret</button>
            </form>
        </div>
    );
}

export default Signup;