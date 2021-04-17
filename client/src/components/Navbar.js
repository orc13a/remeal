import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className="titleName">
                remeal
            </div>
            <div className="navButtonsContainer">
                <Link to="/">
                    <div className="">
                        Status
                    </div>
                </Link>
                <Link to="/refrige">
                    <div className="navBtn">
                        Mit køleskab
                    </div>
                </Link>
            </div>
            <div className="profilIconContainer">
                <div className="profilIconUsername">

                </div>
                <div className="profilIcon">

                </div>
            </div>
        </nav>
    );
}

export default NavBar;