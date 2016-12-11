import _ from 'lodash';

const data = {
  username: '',
  turn: false
};

export default (state = data, action) =>{
  const newState = _.cloneDeep(state);

  switch(action.type){
    case 'SET_STATE':
      // toggle on and of the matrix

      newState.username = action.username;
      newState.turn = action.turn;

      return newState;
    case 'CHANGE_TURN':
      newState.username = action.username;
      newState.turn = action.turn;

      return newState;
    default: 
      return state;
  }
};