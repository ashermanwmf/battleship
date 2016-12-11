import { expect }           from 'chai';
import userStateReducer     from '../../src/client/app/reducers/userState';
import userSetStateAction   from '../../src/client/app/actions/setUser';

describe('User State Reducer', () =>{
  it('should start with empty username and false turn', () =>{
    const data = {
      username: '',
      turn: false
    };

    expect(userStateReducer(data, {})).to.have.property('username').to.equal('');
    expect(userStateReducer(data, {})).to.have.property('turn').to.equal(false);
  });

  it('should update with a username and turn boolean', () =>{
    const data = {
      username: '',
      turn: false
    };

    expect(userStateReducer(data, {})).to.have.property('username').to.equal('');
    expect(userStateReducer(data, {})).to.have.property('turn').to.equal(false);

    const actionContent = userSetStateAction({
      username: 'user1',
      turn: true
    });

    expect(userStateReducer(data, actionContent)).to.have.property('username').to.equal('user1');
    expect(userStateReducer(data, actionContent)).to.have.property('turn').to.equal(true);
  });

  it('should fail with wrong action content', () =>{
    const data = {
      username: '',
      turn: false
    };

    expect(userStateReducer(data, {})).to.have.property('username').to.equal('');
    expect(userStateReducer(data, {})).to.have.property('turn').to.equal(false);

    const actionContent = {
      type: 'SET_STATE',
      payload: 'user1',
      turns: true
    };

    expect(userStateReducer(data, actionContent)).to.have.property('username').to.equal(undefined);
    expect(userStateReducer(data, actionContent)).to.have.property('turn').to.equal(undefined);
  });
});