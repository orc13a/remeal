import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, componse } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, componse(applyMiddleware(thunk)));

// Detter er lige som setup af vores app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
