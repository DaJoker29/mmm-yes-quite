import { combineReducers } from 'redux';
import { audioReducer as audio } from 'redux-audio';
import feed from './modules/feed';
import player from './modules/player';

export default combineReducers({
  [feed.constants.NAME]: feed.reducer,
  [player.constants.NAME]: player.reducer,
  audio,
});