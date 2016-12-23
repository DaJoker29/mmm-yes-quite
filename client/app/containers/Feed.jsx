import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions';

class Feed extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    const { feed } = this.props;

    return (
      <div>
        Something
        { feed }
      </div>
    );
  }
}

Feed.propTypes = {
  feed: PropTypes.node,
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  const { feed } = state;
  return {
    feed,
  };
}

export default connect(mapStateToProps)(Feed);