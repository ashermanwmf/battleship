const {
  setUser,
  sendBoard,
  resetUsers
} = require('./routeHelpers.js');

module.exports = (app) => {
  // get user info and board
  app.post('/api/setUser', setUser, sendBoard);

  // reset the whole game for users and boards
  app.get('/api/resetGame', resetUsers);

};
