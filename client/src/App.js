// Libarys
import React from 'react';

// Components
import NewUser from './components/Users/newUser/NewUser';

// The app what is displayed int the browser
const App = () => {
    return (
        <div>
            <nav>
                <div className="titleName">
                    remeal
                </div>
                <NewUser />
            </nav>
        </div>
    );
}

export default App;