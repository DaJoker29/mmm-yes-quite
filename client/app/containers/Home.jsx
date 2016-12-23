import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Feed from '../containers/Feed';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="main-feed">
            <div class="py-1">
              <div class="row my-1">
                <div class="col-xs-12">
                  <form class="form-inline text-xs-right">
                    <input type="text" class="form-control" placeholder="Search" />
                    <button type="submit" class="btn btn-outline-primary">Search</button>
                  </form>
                </div>
                <div class="col-xs-12">
                  <ul class="nav nav-pills">
                    <li class="nav-item">
                      <a href="#" class="nav-link active">All</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Episodes</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Skits</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Songs</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Stories</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Articles</a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">Videos</a>
                    </li>
                  </ul>
                </div>
              </div>

              <Feed />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;