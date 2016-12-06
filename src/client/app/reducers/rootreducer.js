import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import gameBoard           from './gameBoard';
import userState           from './userState'

const rootReducer = combineReducers({
  gameBoard: gameBoard,
  userState: userState
});

export default rootReducer;