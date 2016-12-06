import data from '../board.json';

export default (state = data, action) =>{
  switch(action.type){
    case "TOGGLE_PIECE":
      
      return action.board;
    default: 
      return state;
  }
};
