import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import MyFridge from './components/MyFridge/MyFridge';

function App() {
  return (
    <Router>
      <Navbar authCheck />
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/myFridge" exact component={ MyFridge } />
      </Switch>
    </Router>
  );
}

export default App;
