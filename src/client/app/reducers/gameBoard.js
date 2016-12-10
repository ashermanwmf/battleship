import board from '../createBoard';

export default (state = board, action) =>{
  switch(action.type){
    case "SET_BOARD":

      return action.board;
    default: 
      return state;
  }
};
