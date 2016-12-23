import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './containers/Home';
import Archive from './containers/Archive';
import MainLayout from './layouts/main';

render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/archive" component={Archive} />
      <Route path="/store" component={Archive} />
      <Route path="/subscribe" component={Archive} />
    </Route>
  </Router>
), document.getElementById('app'));