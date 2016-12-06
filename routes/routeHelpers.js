const _                 = require('lodash');
const { board1, board2 } = require('./boards.js');

module.exports = {
  setUser(req, res, next) {
    console.log(req.params.userName, !req.app.get('userInfo')['user1']);
    if(req.params.userName === 'user1' && !req.app.get('userInfo')['user1']){

      req.app.set('userInfo', {
        user1:true,
        user2:req.app.get('userInfo').user2
      });

      req.user = 'user1';
      next();
    }else if(req.params.userName === 'user2' && !req.app.get('userInfo')['user2']){

      req.app.set('userInfo', {
        user1:req.app.get('userInfo').user1,
        user2:true
      });
      
      req.user = 'user2';
      next();
    }else {
      res.status(300).send({message: 'Wrong input, try again.'});
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
      res.status(400).send({message: 'An Error Occured, Please Refresh The Page.'})
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
    if(req.body.username === 'user1'){
      req.user = req.body.username;

      //check board two
      const board2 = req.app.get('board2').board;
      let block = board[req.body.index[0]][req.body.index[1]];

      if(block.toggled){
        req.move = 'hit';
      }else{
        req.move = 'miss';
      }

      if(block.class === 'hit'){
        req.move = 'taken';
      }

      next();
    }

    if(req.body.username === 'user2'){
    req.user = req.body.username;

      //check board two
      const board = req.app.get('board1').board;
      let block = board[req.body.index[0]][req.body.index[1]];

      if(block.toggled){
        req.move = 'hit';
      }else{
        req.move = 'miss';
      }

      if(block.class === 'hit'){
        req.move = 'taken';
      }

      next();
    }
  },
  toggleBoard(req, res, next) {
    console.log(req.user, req.move, req.body.index);
    res.end();
  }
};
