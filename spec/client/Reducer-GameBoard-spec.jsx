import { expect }       from 'chai';
import _                from 'lodash';
import gameBoardReducer from '../../src/client/app/reducers/gameBoard';
import createBoard      from '../../src/client/app/createBoard';
import setBoardAction   from '../../src/client/app/actions/setBoard';
import resetBoardAction from '../../src/client/app/actions/resetBoards';

describe('Game Board Reducer', () =>{
  it('should return a blank board', () =>{
    const board = _.cloneDeep(createBoard);

    const reducerOutput = gameBoardReducer(board, {});

    const toggleArr = [];
    const classArr = [];

    for(let row of reducerOutput.board){
      for(let block of row){
        toggleArr.push(block.toggled);
        classArr.push(block.class);
      }
    }

    expect(toggleArr.indexOf(true)).to.equal(-1);
    expect(classArr.indexOf('on')).to.equal(-1);
  });

  it('should update board', () =>{
    const board = _.cloneDeep(createBoard);

    board.board[0][0].toggled = true;
    board.board[0][0].class = 'hit';

    const reducerOutput = gameBoardReducer(board, setBoardAction(board));

    const toggleArr = [];
    const classArr = [];

    for(let row of reducerOutput.board){
      for(let block of row){
        toggleArr.push(block.toggled);
        classArr.push(block.class);
      }
    }

    expect(toggleArr.indexOf(true)).to.equal(0);
    expect(classArr.indexOf('hit')).to.equal(0);
  });

  it('should return a reset board', () =>{
    const board = _.cloneDeep(createBoard);

    let reducerOutput = gameBoardReducer(board, {});

    reducerOutput.board[0][0].toggled = true;
    reducerOutput.board[0][0].class = 'on';

    reducerOutput = gameBoardReducer(reducerOutput, resetBoardAction());

    const toggleArr = [];
    const classArr = [];

    for(let row of reducerOutput.board){
      for(let block of row){
        toggleArr.push(block.toggled);
        classArr.push(block.class);
      }
    }

    expect(toggleArr.indexOf(true)).to.equal(-1);
    expect(classArr.indexOf('on')).to.equal(-1);
  });

  it('should fail with wrong action content', () =>{
    const board = _.cloneDeep(createBoard);

    const reducerOutput = gameBoardReducer(board, {});

    const toggleArr = [];
    const classArr = [];

    for(let row of reducerOutput.board){
      for(let block of row){
        toggleArr.push(block.toggled);
        classArr.push(block.class);
      }
    }

    expect(toggleArr.indexOf(true)).to.equal(-1);
    expect(classArr.indexOf('on')).to.equal(-1);
  });
});