/* eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ReduxThunk from 'redux-thunk';
import App from './pages/app';
import HomePage from './pages/home'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './pages/not-found';
import LoginPage from './pages/login';

import reducers from './reducers';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/main.css';
import { syncHistoryWithStore } from 'react-router-redux';

// O segundo argumento é um estado anterior
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

function requireAuth(nextState, replace) {
  let { auth } = store.getState();
  if (!auth.user) {
    replace({ pathname: '/login' });
  }
}

render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} path="/">
        <IndexRoute component={HomePage} onEnter={requireAuth}>
          <Route component={NotFoundPage} path="*" />
        </IndexRoute>
        <Route component={LoginPage} path="login" />
        <Route component={NotFoundPage} path="*" />
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
);
