import { combineReducers } from 'redux';
import feed from './modules/feed';

export default combineReducers({
  [feed.constants.NAME]: feed.reducer,
});