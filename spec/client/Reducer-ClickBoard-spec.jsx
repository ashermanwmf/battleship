import { expect }        from 'chai';
import _                 from 'lodash';
import clickBoardReducer from '../../src/client/app/reducers/clickBoard';
import createBoard       from '../../src/client/app/createBoard';
import toggleBlockAction from '../../src/client/app/actions/toggleBlock';
import resetBoardAction  from '../../src/client/app/actions/resetBoards';

describe('Game Board Reducer', () =>{
  it('should return a blank board', () =>{
    const board = _.cloneDeep(createBoard);

    const reducerOutput = clickBoardReducer(board, {});

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

  it('should return a reset board after setting a board', () =>{
    const board = _.cloneDeep(createBoard);

    board.board[0][0].toggled = false;
    board.board[0][0].class = 'miss';

    let reducerOutput = clickBoardReducer(board, {});

    reducerOutput = clickBoardReducer(reducerOutput, resetBoardAction());

    const toggleArr = [];
    const classArr = [];

    for(let row of reducerOutput.board){
      for(let block of row){
        toggleArr.push(block.toggled);
        classArr.push(block.class);
      }
    }

    expect(toggleArr.indexOf(false)).to.equal(0);
    expect(classArr.indexOf('miss')).to.equal(-1);
  });

  it('should return a board with one block toggled', () =>{
    const board = _.cloneDeep(createBoard);

    let reducerOutput = clickBoardReducer(board, toggleBlockAction([0,0], board, 'hit'));

    const toggleArr = [];
    const classArr = [];

    for(let row of reducerOutput.board){
      for(let block of row){
        toggleArr.push(block.toggled);
        classArr.push(block.class);
      }
    }

    expect(toggleArr.indexOf(false)).to.equal(0);
    expect(classArr.indexOf('hit')).to.equal(0);
  });

  it('should fail with wrong action content', () =>{
    const board = _.cloneDeep(createBoard);

    const actionContent = {
      type: 'TOGGLE_PIECE',
      board: board,
      index: [0,0],
      classNames: 'hit'
    };

    const reducerOutput = clickBoardReducer(board, actionContent);

    const toggleArr = [];
    const classArr = [];

    for(let row of reducerOutput.board){
      for(let block of row){
        toggleArr.push(block.toggled);
        classArr.push(block.class);
      }
    }

    expect(classArr.indexOf('hit')).to.equal(-1);
  });
});