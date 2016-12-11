export default (response) =>{
  return {
    type: 'SET_STATE',
    username: response.username,
    turn: response.turn
  };
};
