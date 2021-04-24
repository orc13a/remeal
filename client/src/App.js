import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import ReactDOM from 'react-dom';

import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
