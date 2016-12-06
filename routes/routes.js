const { setUser, 
        sendBoard, 
        resetUsers, 
        checkMove, 
        toggleBoard 
      } = require('./routeHelpers.js');

module.exports = (app) => {
  app.get('/api/setUser/:userName', setUser, sendBoard);
  app.get('/api/resetGame', resetUsers);
  app.post('/api/makeMove', checkMove, toggleBoard);
};
