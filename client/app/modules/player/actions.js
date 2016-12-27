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

export function setElapsed(elapsed) {
  return {
    type: t.SET_ELAPSED,
    elapsed,
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

export function setTime(time) {
  return {
    type: t.SET_TIME,
    time,
  };
}

export function clearSeeking() {
  return {
    type: t.CLEAR_SEEKING,
  };
}

export const play = () => ({
  type: t.PLAY,
});

export const pause = () => ({
  type: t.PAUSE,
});

function calculateTime(seekPoint, state) {
  const { player } = state;
  const { current, playlist } = player;
  const totalLength = playlist[current].length;
  return (seekPoint / 100) * totalLength;
}

export function seekTo(seekPoint) {
  return (dispatch, getState) => {
    const newTime = calculateTime(seekPoint, getState());
    dispatch(setTime(newTime));
    dispatch(setElapsed(newTime));
  };
}

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