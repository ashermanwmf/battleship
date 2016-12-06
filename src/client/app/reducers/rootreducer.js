import { combineReducers } from 'redux';
import gameBoard from './gameBoard';

const rootReducer = combineReducers({
  gameBoard: gameBoard
});

export default rootReducer;