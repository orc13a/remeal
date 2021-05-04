import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import MyFridge from './components/MyFridge/MyFridge';
import Recipes from './components/Recipes/Recipes';

function App() {
  return (
    <Router>
      <Navbar authCheck />
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/myFridge" exact component={ MyFridge } />
        <Route path="/recipes" exact component={ Recipes } />

        <Route path="/" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
