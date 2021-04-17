// import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Dette er vores app og der som vil blive vist i din browser
// Dette er et "root component"
function App() {
  return (
    <Router>
      <div className="authContentContainer">
        <Navbar />
        <div className="authContent">
          
        </div>
      </div>
    </Router>
  );
}

export default App;
