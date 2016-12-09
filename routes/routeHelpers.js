const _                            = require('lodash');
const { board1Start, board2Start } = require('./boards.js');

module.exports = {
  setUser(req, res, next) {
      if(req.body.username === 'user1' && !req.app.get('userInfo')['user1']){

        req.app.set('userInfo', {
          user1:true,
          user2:req.app.get('userInfo').user2
        });

        req.user = 'user1';
        next();

      }else if(req.body.username === 'user2' && !req.app.get('userInfo')['user2']){

        req.app.set('userInfo', {
          user1:req.app.get('userInfo').user1,
          user2:true
        });
        
        req.user = 'user2';
        next();

      }else {
        res.status(300)
          .send({message: 'Wrong input, try again.'});
      }
  },

  sendBoard(req, res, next) {
    if(req.user === 'user1'){

      req.app.set('board1', _.cloneDeep(board1Start));
      
      const sendObj1 = {
        username: req.user,
        board: req.app.get('board1'),
        turn: true
      };

      res.send(sendObj1);

    }else if(req.user === 'user2'){

      req.app.set('board2', _.cloneDeep(board2Start));

      const sendObj2 = {
        username: req.user,
        board: req.app.get('board2'),
        turn: false
      };

      res.send(sendObj2);

    }else {
      res.status(400)
        .send({message: 'An Error Occured, Please Refresh The Page.'});
    }
  },

  resetUsers(req, res, next) {
    req.app.set('userInfo', {
      user1:false,
      user2:false
    });

    req.app.set('board1', board1Start);
    req.app.set('board2', board2Start);
    
    res.send(req.app.get('userInfo'));
  }
};
