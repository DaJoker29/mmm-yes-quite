import _ from 'lodash';
import { NAME } from './constants';

const playlistLength = playlist => playlist.reduce((a, b) => {
  if (a.length) {
    return a.length + b.length;
  }
  return a + b.length;
}, 0);

const currentTrack = (state) => {
  const { playlist, current } = state[NAME];
  return 0 < playlist.length ? playlist[current] : 'N/A';
};

const nextTrack = (state) => {
  const { playlist, current } = state[NAME];
  return playlist[current + 1] ? playlist[current + 1] : 'N/A';
};

export const getPlaylist = state => state[NAME].playlist;
export const getFetching = state => state[NAME].fetching;
export const getElapsedTime = state => state[NAME].elapsed;
export const getStatus = state => state[NAME].status;
export const getSeeking = state => state[NAME].seeking;
export const getCurrentTrack = currentTrack;
export const getNextTrack = nextTrack;
export const getPlaylistLength = _.flowRight(playlistLength, getPlaylist);