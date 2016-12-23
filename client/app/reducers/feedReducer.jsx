import { RECEIVE_FEED } from '../actions';

function feedReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_FEED:
      return Object.assign({}, state, action.feed);
    default:
      return state;
  }
}

export default feedReducer;