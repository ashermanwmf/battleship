import _ from 'lodash';

const data = {
  userName: '',
  turn: false
};

export default (state = data, action) =>{
  switch(action.type){
    case "SET_STATE":
      // toggle on and of the matrix

      const newState = _.cloneDeep(state);

      newState.userName = action.username;
      newState.turn = action.turn;

      return newState;
    default: 
      return state;
  }
};