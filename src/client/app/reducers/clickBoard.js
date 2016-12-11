import _     from 'lodash';
import board from '../createBoard';

const blankBoard = _.cloneDeep(board);

export default (state = blankBoard, action) =>{
  
  switch(action.type){
    case 'TOGGLE_PIECE':
      //change the board and retur nit with action.index
      action.board.board[action.index[0]][action.index[1]].class = action.className;

      return action.board;
    case 'RESET_BOARD':
      const boardNew = {board: []};

      for(let i=0;i<10;i++){
        let newRow = [];
        for(let s=0;s<10;s++){
          newRow.push({"toggled":false, "class":"off"});
        }
        boardNew.board.push(newRow);
      }

      return boardNew;
    default: 
      return state;
  }
};
