const { setUser, sendBoard, resetGame } = require('./routeHelpers.js');

module.exports = (app) => {
  app.get('/api/setUser/:userName', setUser, sendBoard);
  app.get('/api/resetGame', resetUsers);
};
