import * as t from './actionTypes';
import { State as initialState } from './model';

function feedReducer(state = initialState, action) {
  switch (action.type) {
    case t.REQUEST:
      return Object.assign({}, state, {
        fetching: true,
      });
    case t.RECEIVE:
      return Object.assign({}, state, { 
        posts: action.posts,
        fetching: false,
      });
    case t.SET_FILTER:
      return Object.assign({}, state, {
        filter: action.filter,
      });
    default:
      return state;
  }
}

export default feedReducer;