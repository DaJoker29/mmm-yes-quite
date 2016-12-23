import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Home from './containers/Home';
import Archive from './containers/Archive';
import MainLayout from './layouts/main';

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={MainLayout}>
        <Route path="/" component={Home} />
        <Route path="/archive" component={Archive} />
        <Route path="/store" component={Archive} />
        <Route path="/subscribe" component={Archive} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));