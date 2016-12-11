const {
  setUser,
  sendBoard,
  resetUsers
} = require('./routeHelpers.js');

module.exports = (app) => {
  // access headers
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  // get user info and board
  app.post('/api/setUser', setUser, sendBoard);

  // reset the whole game for users and boards
  app.get('/api/resetGame', resetUsers);

};
