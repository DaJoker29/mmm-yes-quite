// import fetch from 'isomorphic-fetch';
import * as t from './actionTypes';
import dummyPlaylist from './dummy';

export function requestPlaylist() {
  return {
    type: t.REQUEST,
  };
}

export function receivePlaylist(playlist) {
  return {
    type: t.RECEIVE,
    playlist,
  };
}

function fetchPlaylist() {
  return (dispatch) => {
    dispatch(receivePlaylist(dummyPlaylist));
  };
}

function shouldFetchPlaylist({ player }) {
  const { playlist } = player;
  if (!playlist || 0 === playlist.length) {
    return true;
  }
  return false;
}

export function fetchPlaylistIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPlaylist(getState())) {
      return dispatch(fetchPlaylist());
    }
  };
}