const {
  setUser,
  sendBoard,
  resetUsers,
  checkMove,
  toggleBoard,
  changeScore
} = require('./routeHelpers.js');

module.exports = (app) => {
  // get user info and board
  app.post('/api/setUser', setUser, sendBoard);

  // reset the whole game for users and boards
  app.get('/api/resetGame', resetUsers);

  // toggle the board, change the score, send that all back
  app.post('/api/makeMove', checkMove, toggleBoard, changeScore);
};
