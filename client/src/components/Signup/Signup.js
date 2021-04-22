import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

const Signup = () => {
    return (
        <div>
            <form method="POST" action="/">
                <input type="text" name="signupEmail" placeholder="E-mail"/>
                <input type="text" name="signupFirstName" placeholder="Fornavn"/>
                <input type="text" name="signupLastName" placeholder="Efternavn"/>
                <input type="password" name="signupPassword" placeholder="Adgangskode"/>
                <input type="password" name="signupPasswordRepeat" placeholder="Gentag adgangskode"/>
                <button type="submit">Opret</button>
            </form>
        </div>
    );
}

export default Signup;