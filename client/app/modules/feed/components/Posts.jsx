import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions';

class Posts extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    // const { feed } = this.props;

    return (
      <div>
        Pink
      </div>
    );
  }
}

Posts.propTypes = {
  // feed: PropTypes.object,
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  const { feed } = state;
  return {
    feed,
  };
}

export default connect(mapStateToProps)(Posts);