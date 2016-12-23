import fetch from 'isomorphic-fetch';

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
    dispatch(requestFeed());
    return fetch('dummy.json')
      .then(response => response.json())
      .then(json => dispatch(receiveFeed(json)));
  };
}

export function fetchPostsIfNeeded() {
  return dispatch => dispatch(fetchPosts());
}