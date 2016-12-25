import { RECEIVE } from './actionTypes';
import { State as initialState } from './model';

function feedReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE:
      return state.concat(action.feed);
    default:
      return state;
  }
}

export default feedReducer;