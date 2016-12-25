import _ from 'lodash';
import { NAME } from './constants';
import { currentTrack, nextTrack } from './models';

const totalPlaylist = playlist => playlist.reduce((a, b) => {
  if (a.length) {
    return a.length + b.length;
  }
  return a + b.length;
}, 0);

export const getPlaylist = state => state[NAME].playlist;
export const getFetching = state => state[NAME].fetching;
export const getCurrentTrack = _.flowRight(currentTrack, getPlaylist);
export const getNextTrack = _.flowRight(nextTrack, getPlaylist);
export const getPlaylistLength = _.flowRight(totalPlaylist, getPlaylist);