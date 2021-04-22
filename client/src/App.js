// import './App.css';
import Navbar from './components/Navbar/Navbar';
import Frontpage from './components/Frontpage/Frontpage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Dette er vores app og der som vil blive vist i din browser
// Dette er et "root component"
function App() {
  return (
    <Router>
      <div className="contentContainer">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Frontpage />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
          </Switch> 
        </div>
      </div>
    </Router>
  );
}

export default App;