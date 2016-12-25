// import fetch from 'isomorphic-fetch';
import * as t from './actionTypes';
import dummyPosts from './dummy';

export function requestFeed() {
  return {
    type: t.REQUEST,
  };
}

export function receiveFeed(posts) {
  return {
    type: t.RECEIVE,
    posts,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: t.SET_FILTER,
    filter,
  };
}

function fetchPosts() {
  return (dispatch) => {
    dispatch(receiveFeed(dummyPosts));
  };
}

function shouldFetchPosts({ feed }) {
  const { posts } = feed;
  if (!posts || 0 === posts.length) {
    return true;
  }
  return false;
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
    }
  };
}