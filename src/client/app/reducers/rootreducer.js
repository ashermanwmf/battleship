import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import gameBoard           from './gameBoard';
import userState           from './userState';
import clickBoard          from './clickBoard';
import score               from './score';

const rootReducer = combineReducers({
  gameBoard: gameBoard,
  userState: userState,
  clickBoard: clickBoard,
  score: score
});

export default rootReducer;