import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { getVisiblePosts, getFetching } from '../selectors';
import { fetchPostsIfNeeded } from '../actions';
import Filter from './Filter';
import Posts from './Posts';
import Search from './Search';

class Feed extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    const { posts, fetching } = this.props;
    return (
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
              { fetching ? <i class="fa fa-spinner fa-5x text-xs-center fa-pulse w-100 mt-3" /> : <Posts posts={posts} /> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Feed.propTypes = {
  posts: PropTypes.array,
  dispatch: PropTypes.func,
  fetching: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: getVisiblePosts(state),
  fetching: getFetching(state),
});

export default connect(mapStateToProps)(Feed);