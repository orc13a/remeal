import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Frontpage.module.css';

const Frontpage = () => {
    return (
        <div>
            <Link to="/login">
                login
            </Link><br />
            <Link to="/signup">
                signup
            </Link>
        </div>
    );
}

export default Frontpage;