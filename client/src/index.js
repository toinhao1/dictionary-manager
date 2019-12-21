import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'

import { Provider } from 'react-redux';
import { store } from './redux/store'
import { createBrowserHistory } from "history";
import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
