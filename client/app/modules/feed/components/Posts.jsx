import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAll } from '../selectors';
import { fetchPostsIfNeeded } from '../actions';
import Post from './Post';

class Posts extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    const { feed } = this.props;

    return (
      <div>
        { feed.map(p => <Post key={p.id} post={p} />) }
      </div>
    );
  }
}

Posts.propTypes = {
  feed: PropTypes.array,
  dispatch: PropTypes.func,
};

export default connect(
  createStructuredSelector({
    feed: getAll,
  }),
)(Posts);