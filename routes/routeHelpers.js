const _ = require('lodash');
const blankBoard = require('./boards.js');

module.exports = {
  getUser(req, res, next) {
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
    const newBoard = _.cloneDeep(blankBoard);
    // https://en.wikipedia.org/wiki/Battleship_(game)
    res.send(req.app.get('userInfo'));
  }
};
