import * as t from './actionTypes';
import { State as initialState } from './models';

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case t.REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case t.RECEIVE:
      return Object.assign({}, state, { 
        playlist: action.playlist,
        fetching: false,
      });
    case t.PLAY:
      return Object.assign({}, state, {
        status: 'playing',
      });
    case t.PAUSE:
      return Object.assign({}, state, {
        status: 'paused',
      });
    case t.SET_ELAPSED:
      return Object.assign({}, state, {
        elapsed: action.elapsed,
      });
    default:
      return state;
  }
}

export default playerReducer;