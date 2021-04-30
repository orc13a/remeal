import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Auth from './components/Auth/Auth';
import MyFridge from './components/MyFridge/MyFridge';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Auth } />
        <Route path="/myFridge" exact component={ MyFridge } />
      </Switch>
    </Router>
  );
}

export default App;
