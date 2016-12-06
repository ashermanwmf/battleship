const { getUser, sendBoard } = require('./routeHelpers.js');

module.exports = (app) => {
  app.get('/api/getUser/:userName', getUser, sendBoard);

};
