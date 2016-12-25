import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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

function mapStateToProps(state) {
  const { feed } = state;
  return {
    feed,
  };
}

export default connect(mapStateToProps)(Posts);