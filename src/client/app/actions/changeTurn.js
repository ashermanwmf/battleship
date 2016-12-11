export default (username, turn) =>{
  return {
    type: 'CHANGE_TURN',
    username: username,
    turn: turn
  };
};
