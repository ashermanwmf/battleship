import _     from 'lodash';
import board from '../createBoard';

export default (state = board, action) =>{
  const blankBoard = _.cloneDeep(board)
  
  switch(action.type){
    case 'TOGGLE_PIECE':
      //change the board and retur nit with action.index
      action.board.board[action.index[0]][action.index[1]].class = action.className

      return action.board;
    case 'RESET_BOARD':
      console.dir('board reset', blankBoard)
      return blankBoard;
    default: 
      return state;
  }
};
