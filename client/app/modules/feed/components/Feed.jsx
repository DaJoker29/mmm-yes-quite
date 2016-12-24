import React from 'react';
import Filter from './Filter';
import Posts from './Posts';
import Search from './Search';

const Feed = () => (
  <div class="container">
    <div class="row">
      <div class="main-feed">
        <div class="py-1">
          <div class="row my-1">
            <div class="col-xs-12">
              <Search />
            </div>
            <Filter />
          </div>
          <Posts />
        </div>
      </div>
    </div>
  </div>
);

export default Feed;