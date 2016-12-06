import _ from 'lodash';

const data = {
  userName: ''
};

export default (state = data, action) =>{
  switch(action.type){
    case "SET_USERNAME":
      // toggle on and of the matrix
      if(state.userName === ''){
        //set user name return that new state
        const newState = _.cloneDeep(state);

        newstate.userName = action.payload;

        return newState;
      }

      return state;
    default: 
      return state;
  }
};