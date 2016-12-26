import _ from 'lodash';
import { NAME } from './constants';

const playlistLength = playlist => playlist.reduce((a, b) => {
  if (a.length) {
    return a.length + b.length;
  }
  return a + b.length;
}, 0);

const currentTrack = (state) => {
  const { playlist, playing } = state[NAME];
  return 0 < playlist.length ? playlist[playing] : 'N/A';
};

const nextTrack = (state) => {
  const { playlist, playing } = state[NAME];
  return playlist[playing + 1] ? playlist[playing + 1] : 'N/A';
};

export const getPlaylist = state => state[NAME].playlist;
export const getFetching = state => state[NAME].fetching;
export const getCurrentTrack = currentTrack;
export const getNextTrack = nextTrack;
export const getPlaylistLength = _.flowRight(playlistLength, getPlaylist);