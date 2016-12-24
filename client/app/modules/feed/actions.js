import fetch from 'isomorphic-fetch';
import dummy from './dummy';

export const REQUEST_FEED = 'REQUEST_FEED';
export const RECEIVE_FEED = 'RECEIVE_FEED';

export function requestFeed() {
  return {
    type: REQUEST_FEED,
  };
}

export function receiveFeed(feed) {
  return {
    type: RECEIVE_FEED,
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