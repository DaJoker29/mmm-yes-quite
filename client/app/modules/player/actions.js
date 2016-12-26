// import fetch from 'isomorphic-fetch';
import { audioPlay, audioPause, audioSrc } from 'redux-audio/actions';
import * as t from './actionTypes';
import dummyPlaylist from './dummy';
import { NAME } from './constants';
import { getCurrentTrack, getStatus } from './selectors';

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

export const load = () => ({
  type: t.LOAD,
});

export function loadPlayer() {
  return (dispatch, getState) => {
    dispatch(audioSrc(NAME, getCurrentTrack(getState()).media));
    dispatch(load());
  };
}

export const play = () => ({
  type: t.PLAY,
});

export const pause = () => ({
  type: t.PAUSE,
});


export function togglePlaying() {
  return (dispatch, getState) => {
    if ('playing' === getStatus(getState())) {
      dispatch(audioPause(NAME));
      return dispatch(pause());
    }
    dispatch(audioPlay(NAME));
    return dispatch(play());
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