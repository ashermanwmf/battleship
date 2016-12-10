import data from '../board.json';

export default (state = data, action) =>{
  switch(action.type){
    case "SET_BOARD":

      return action.board;
    default: 
      return state;
  }
};
