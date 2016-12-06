const data = {
  userName: ''
};

export default (state = data, action) =>{
  switch(action.type){
    case "SET_USERNAME":
      // toggle on and of the matrix
      if(state.userName === ''){
        //set user name return that new state
      }

      return state;
    default: 
      return state;
  }
};