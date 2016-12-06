import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import gameBoard from './gameBoard';

const rootReducer = combineReducers({
  gameBoard: gameBoard
});

export default rootReducer;