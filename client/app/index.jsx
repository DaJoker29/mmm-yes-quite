import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Feed } from './modules/feed';
import { Archive } from './modules/archive';
import Layout from './layout';
import configureStore from './configureStore';
import '../css/index.css';

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path="/" component={Feed} />
        <Route path="/archive" component={Archive} />
        <Route path="/store" component={Archive} />
        <Route path="/subscribe" component={Archive} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));