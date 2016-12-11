const data = {
  user1: 0,
  user2: 0
};

export default (state = data, action) =>{

  switch(action.type){
    case 'CHANGE_SCORE':
      return action.payload;
    case 'RESET_SCORE':
      return data;
    default: 
      return state;
  }
};