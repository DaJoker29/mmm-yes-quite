import { RECEIVE_FEED } from './actions';

function feedReducer(state = [], action) {
  const newArray = state.concat(action.feed);

  switch (action.type) {
    case RECEIVE_FEED:
      return newArray;
    default:
      return state;
  }
}

export default feedReducer;