import data from '../board.json';

export default (state = data, action) =>{
  switch(action.type){
    case "SET_BOARD":

      console.log(state, action.board)

      return action.board;
    default: 
      return state;
  }
};
