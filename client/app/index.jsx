import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './containers/Home';
import MainLayout from './layouts/main';

render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
    </Route>
  </Router>
), document.getElementById('app'));