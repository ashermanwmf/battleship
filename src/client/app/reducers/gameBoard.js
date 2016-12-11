import _     from 'lodash';
import board from '../createBoard';

const blankBoard = _.cloneDeep(board)

export default (state = board, action) =>{
  switch(action.type){
    case "SET_BOARD":

      return action.board;

    case "RESET_BOARD":
      return blankBoard;
    default: 
      return state;
  }
};
