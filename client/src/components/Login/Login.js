import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div>
            <form method="POST" action="/">
                <input type="text" name="loginEmail" placeholder="E-mail"/>
                <input type="password" name="loginPassword" placeholder="Adgangskode"/>
                <button type="submit">Log ind</button>
            </form>
        </div>
    );
}

export default Login;