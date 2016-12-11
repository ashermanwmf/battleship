import React       from 'react';
import { shallow } from 'enzyme';
import { expect }  from 'chai';
import {App}       from '../../src/client/app/containers/App.jsx';
import socket      from 'socket.io';

describe('<App />', () =>{
  it('should render', () =>{
    const minProps ={
      userState: {},
      store: {
        getState: () => {},
        subscribe: () => {},
        dispatch: () => {},
        userState: {}
      }
    };

    expect(
      shallow(
        <App {...minProps} />
      ).length
    ).to.equal(1);
  });
});