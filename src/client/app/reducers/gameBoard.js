import data from '../board.json';

export default (state = data, action) =>{
  switch(action.type){
    case "TOGGLE_MATRIX":
      // toggle on and of the matrix
      console.log(action.payload)
    default: 
      return state;
  }
};
