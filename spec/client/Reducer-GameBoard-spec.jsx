import { expect }       from 'chai';
import _                from 'lodash';
import gameBoardReducer from '../../src/client/app/reducers/gameBoard';
import createBoard       from '../../src/client/app/createBoard';

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

  it('should return a reset board', () =>{
    const board = _.cloneDeep(createBoard);

    let reducerOutput = gameBoardReducer(board, {});

    reducerOutput.board[0][0].toggled = true;
    reducerOutput.board[0][0].class = 'on';

    let toggleArr = [];
    let classArr = [];

    for(let row of reducerOutput.board){
      for(let block of row){
        toggleArr.push(block.toggled);
        classArr.push(block.class);
      }
    }

    expect(toggleArr.indexOf(true)).to.equal(0);
    expect(classArr.indexOf('on')).to.equal(0);

    const actionContent = {
      type: 'RESET_BOARD'
    };

    reducerOutput = gameBoardReducer(reducerOutput, actionContent);

    toggleArr = [];
    classArr = [];

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