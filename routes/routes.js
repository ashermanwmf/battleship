const { setUser, sendBoard } = require('./routeHelpers.js');

module.exports = (app) => {
  app.get('/api/setUser/:userName', setUser, sendBoard);
};
