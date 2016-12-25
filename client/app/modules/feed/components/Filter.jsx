import React from 'react';
import FilterLink from './FilterLink';

const Filter = () => (
  <div class="col-xs-12">
    <ul class="nav nav-pills">
      <FilterLink filter="all">All</FilterLink>
      <FilterLink filter="audio">Audio</FilterLink>
      <FilterLink filter="article">Articles</FilterLink>
      <FilterLink filter="video">Videos</FilterLink>
    </ul>
  </div>
);

export default Filter;