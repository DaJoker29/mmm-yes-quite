import React, { PropTypes } from 'react';
import Post from './Post';

const Posts = ({ posts }) => (
  <div>
    { posts ? posts.map(p => <Post key={p.id} post={p} />) : '' }
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;