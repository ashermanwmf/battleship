const app    = require('./server').app;
const server = require('./server').server;
const io     = require('socket.io').listen(server);

// connect to users with socket
io.on('connection', (socket) => {
  console.log('user connected');
  const {checkMove, toggleBoard, changeScore} = module.exports.updateScore; 

  socket.on('moveMade', (data) =>{
    const moveData = checkMove(data);
    const toggleData = toggleBoard(moveData);
    const scoreData = changeScore(toggleData);

    io.emit('UPDATE_BOARDS', scoreData);
  });
});

module.exports.updateScore = { 
  checkMove(data){
    if(!app.get('userInfo').user1 && !app.get('userInfo').user2) {
      return {message: 'ERROR: Not Everyone Is Logged In.'};
    }

    const returnObj = {};

    returnObj.user = data.username;
    returnObj.boardName = returnObj.user === 'user1' ? 'board2' : 'board1';

    const board = app.get(returnObj.boardName);
    let block = board.board[data.index[0]][data.index[1]];

    returnObj.move = block.toggled ? 'hit' : 'miss';
    returnObj.move = block.class === 'hit' ? 'taken' : returnObj.move;
    returnObj.boardToToggle = board;
    returnObj.index = data.index;

    return returnObj;
  },

  toggleBoard(data){
    // change the boards where they where effected 
    // console.log(req.user, req.move, req.body.index);

    let block = data.boardToToggle.board[data.index[0]][data.index[1]];

    if(data.move !== 'taken'){
      block.class = data.move;

      if(data.move === 'hit'){
        let pieceIndex = data.index.join('');
        let pieceArray = data.boardToToggle.pieces[block.id];
        let indexOfPieceIndex = pieceArray.indexOf(pieceIndex);
        pieceArray.splice(indexOfPieceIndex, indexOfPieceIndex + 1);

        if(pieceArray.length === 0){
          data.move = 'sunk';
        }

      }

      // app.set(req.boardName, req.boardToToggle);
    }
    return data;
    // user is who clicked and that decides which baord to update on front end
    // move says class information and index says where to change the class info   
  },

  changeScore(data){
    // change the score after board has been updated and turn has been updated
    // console.log(data);
    
    return data;
  }
};
