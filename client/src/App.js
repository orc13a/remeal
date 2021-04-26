import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import ReactDOM from 'react-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MyFridge from './components/MyFridge/MyFridge';
import Profil from './components/Profil/Profil';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/" exact>
          <MyFridge />
        </Route>
        <Route path="/profil" exact>
          <Profil />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
