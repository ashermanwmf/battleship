import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import gameBoard           from './gameBoard';
import userState           from './userState';
import clickBoard          from './clickBoard';

const rootReducer = combineReducers({
  gameBoard: gameBoard,
  userState: userState,
  clickBoard: clickBoard
});

export default rootReducer;