import React       from 'react';
import { shallow } from 'enzyme';
import { expect }  from 'chai';
import socket      from 'socket.io';
import {App}       from '../../src/client/app/containers/App.jsx';
import {Score}     from '../../src/client/app/containers/Score.jsx';
import {Board}     from '../../src/client/app/containers/Board.jsx';
import {Block}     from '../../src/client/app/containers/Block.jsx';
import Row         from '../../src/client/app/components/Row.jsx';

describe('<App />', () =>{
  it('should render', () =>{
    const minProps ={
      userState: { turn: true },
      store: {
        getState: () => {},
        subscribe: () => {},
        dispatch: () => {},
      }
    };

    expect(
      shallow(
        <App {...minProps} />
      ).length
    ).to.equal(1);
  });
});

describe('<Score />', () =>{
  it('should render', () =>{
    const minProps ={
      score: { user1: 0, user2: 0},
      store: {
        getState: () => {},
        subscribe: () => {},
        dispatch: () => {},
      }
    };

    expect(
      shallow(
        <Score {...minProps} />
      ).length
    ).to.equal(1);
  });
});

describe('<Board />', () =>{
  it('should render', () =>{
    const minProps ={
      clickBoard: { board: [] },
      store: {
        getState: () => {},
        subscribe: () => {},
        dispatch: () => {}
      }
    };

    expect(
      shallow(
        <Board {...minProps} />
      ).length
    ).to.equal(1);
  });
});

describe('<Block />', () =>{
  it('should render', () =>{
    const minProps ={
      block: { class: 'off' },
      store: {
        getState: () => {},
        subscribe: () => {},
        dispatch: () => {}
      }
    };

    expect(
      shallow(
        <Block {...minProps} />
      ).length
    ).to.equal(1);
  });
});

describe('<Row />', () =>{
  it('should render', () =>{
    const minProps ={
      row: []
    };

    expect(
      shallow(
        <Row {...minProps} />
      ).length
    ).to.equal(1);
  });
});

