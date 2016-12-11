import _     from 'lodash';
import board from '../createBoard';

export default (state = board, action) =>{
  const blankBoard = _.cloneDeep(board);

  switch(action.type){
    case 'SET_BOARD':

      return action.board;

    case 'RESET_BOARD':
      console.dir('board reset', blankBoard)
      return blankBoard;
    default: 
      return state;
  }
};
