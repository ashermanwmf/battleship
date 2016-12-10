import board from '../createBoard';

export default (state = board, action) =>{
  switch(action.type){
    case "TOGGLE_PIECE":
      //change the board and retur nit with action.index
      action.board.board[action.index[0]][action.index[1]].class = action.className

      return action.board;
    default: 
      return state;
  }
};
