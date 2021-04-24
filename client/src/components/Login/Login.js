import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div>
            <form>
                <input type="text" name="loginEmail" placeholder="E-mail"/>
                <input type="password" name="loginPassword" placeholder="Adgangskode"/>
                <button type="submit">Log ind</button>
            </form>
        </div>
    );
}

export default Login;