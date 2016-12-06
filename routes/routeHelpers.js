const _                 = require('lodash');
const { board, pieces } = require('./boards.js');

module.exports = {
  setUser(req, res, next) {
    if(req.params.userName === 'user1' && !req.app.get('userInfo').user1){

      req.app.set('userInfo', {
        user1:true,
        user2:req.app.get('userInfo').user2
      });

      next();
    }else if(req.params.userName === 'user2' && !req.app.get('userInfo').user2){

      req.app.set('userInfo', {
        user1:req.app.get('userInfo').user1,
        user2:true
      });

      next();
    }else {
      res.status(300).send({message: 'Wrong input, try again.'});
    }
  },
  sendBoard(req, res, next) {
    const mem = [];
    const newBoard = _.cloneDeep(board);
    const newPieces = _.cloneDeep(pieces);
    // https://en.wikipedia.org/wiki/Battleship_(game)
    res.send(newPieces);
  },
  resetUsers(req, res, next) {
    const cleanBoard = _.cloneDeep(board);

    req.app.set('userInfo', {
      user1:false,
      user2:false
    });

    console.log(app.get('userInfo'));
    
    res.send(cleanBoard);
  }
};
