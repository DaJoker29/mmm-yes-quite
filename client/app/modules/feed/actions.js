// import fetch from 'isomorphic-fetch';
import * as t from './actionTypes';
import dummy from './dummy';


export function requestFeed() {
  return {
    type: t.REQUEST,
  };
}

export function receiveFeed(feed) {
  return {
    type: t.RECEIVE,
    feed,
  };
}

function fetchPosts() {
  return (dispatch) => {
    dispatch(receiveFeed(dummy));
  };
}

function shouldFetchPosts({ feed }) {
  if (!feed || 0 === feed.length) {
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