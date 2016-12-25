import { combineReducers } from 'redux';
import feed from './modules/feed';
import player from './modules/player';

export default combineReducers({
  [feed.constants.NAME]: feed.reducer,
  [player.constants.NAME]: player.reducer,
});