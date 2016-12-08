const _                 = require('lodash');
const { board1, board2 } = require('./boards.js');

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

      req.app.set('board1', board1);
      
      const sendObj1 = {
        username: req.user,
        board: board1,
        turn: true
      };

      res.send(sendObj1);
      
    }else if(req.user === 'user2'){

      req.app.set('board2', board2);

      const sendObj2 = {
        username: req.user,
        board: board2,
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

    req.app.set('board1', board1);
    req.app.set('board2', board2);
    
    res.send(req.app.get('userInfo'));
  },

  checkMove(req, res, next) {
    new Promise((resolve, reject) =>{
      if(!req.app.get('userInfo').user1 && !req.app.get('userInfo').user2) {
        console.log('log');
        throw new Error();
      }

      req.user = req.body.username;
      req.boardName = req.user === 'user1' ? 'board2' : 'board1';

      const board = req.app.get(req.boardName).board;
      let block = board[req.body.index[0]][req.body.index[1]];

      req.move = block.toggled ? 'hit' : 'miss';
      req.move = block.class === 'hit' ? 'taken' : '';

      resolve();
    })
    .then(() =>{
      next();
    })
    .catch((err) =>{
      res.status(300)
          .send({"message": "The Game Is Not Ready, Please Rest Or Wait For A Friend."});
    });
    
  },

  toggleBoard(req, res, next) {
    // change the boards where they where effected 
    console.log(req.user, req.move, req.body.index);
    res.send('hi');
  },

  changeScore(req, res, next) {
    // change the score after board has been updated and turn has been updated
  }
};
