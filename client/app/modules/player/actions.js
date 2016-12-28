// import fetch from 'isomorphic-fetch';
import { audioPlay, audioPause, audioSrc } from 'redux-audio/actions';
import * as t from './actionTypes';
import dummyPlaylist from './dummy';
import { NAME } from './constants';
import { getCurrentTrack, getStatus } from './selectors';

/**
 * Actions
 */

export const requestPlaylist = () => ({
  type: t.REQUEST,
});

export const receivePlaylist = playlist => ({
  type: t.RECEIVE,
  playlist,
});

export const setElapsed = elapsed => ({
  type: t.SET_ELAPSED,
  elapsed,
});

export const load = () => ({
  type: t.LOAD,
});

export const setTime = time => ({
  type: t.SET_TIME,
  time,
});

export const clearSeeking = () => ({
  type: t.CLEAR_SEEKING,
});

export const play = () => ({
  type: t.PLAY,
});

export const pause = () => ({
  type: t.PAUSE,
});


/**
 * Action Creators
 */

export function loadPlayer() {
  return (dispatch, getState) => {
    dispatch(audioSrc(NAME, getCurrentTrack(getState()).media));
    dispatch(load());
  };
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
      dispatch(pause());
      return;
    }
    dispatch(audioPlay(NAME));
    dispatch(play());
  };
}

export function fetchPlaylistIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPlaylist(getState())) {
      dispatch(receivePlaylist(dummyPlaylist));
    }
  };
}

/**
 * Helpers
 */

function calculateTime(seekPoint, state) {
  const { player } = state;
  const { current, playlist } = player;
  const totalLength = playlist[current].length;
  return (seekPoint / 100) * totalLength;
}

function shouldFetchPlaylist({ player }) {
  const { playlist } = player;
  if (!playlist || 0 === playlist.length) {
    return true;
  }
  return false;
}