import _ from 'lodash';

const data = {
  username: '',
  turn: false
};

export default (state = data, action) =>{
  switch(action.type){
    case "SET_STATE":
      // toggle on and of the matrix

      const newState = _.cloneDeep(state);

      newState.username = action.username;
      newState.turn = action.turn;

      console.log(newState, ' in reducer')

      return newState;
    default: 
      return state;
  }
};