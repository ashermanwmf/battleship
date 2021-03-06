import { expect }         from 'chai';
import scoreReducer       from '../../src/client/app/reducers/score';
import changeScoreAction  from '../../src/client/app/actions/setScore';
import resetScoreAction   from '../../src/client/app/actions/resetScore';

describe('Score Reducer', () =>{
  it('should start with score of 0, 0', () =>{
    const data = {
      user1: 0,
      user2: 0
    };

    expect(scoreReducer(data, {})).to.have.property('user1').to.equal(0);
    expect(scoreReducer(data, {})).to.have.property('user2').to.equal(0);
  });

  it('should update with new score', () =>{
    const data = {
      user1: 0,
      user2: 0
    };

    expect(scoreReducer(data, {})).to.have.property('user1').to.equal(0);
    expect(scoreReducer(data, {})).to.have.property('user2').to.equal(0);

    const actionContent = changeScoreAction({
      user1: 1,
      user2: 2
    });

    expect(scoreReducer(data, actionContent)).to.have.property('user1').to.equal(1);
    expect(scoreReducer(data, actionContent)).to.have.property('user2').to.equal(2);
  });

  it('should reset score', () =>{
    const data = {
      user1: 1,
      user2: 2
    };

    expect(scoreReducer(data, {})).to.have.property('user1').to.equal(1);
    expect(scoreReducer(data, {})).to.have.property('user2').to.equal(2);

    const actionContent = resetScoreAction();

    expect(scoreReducer(data, actionContent)).to.have.property('user1').to.equal(0);
    expect(scoreReducer(data, actionContent)).to.have.property('user2').to.equal(0);
  });

  it('should fail with wrong action content', () =>{
    const data = {
      user1: 0,
      user2: 0
    };

    expect(scoreReducer(data, {})).to.have.property('user1').to.equal(0);
    expect(scoreReducer(data, {})).to.have.property('user2').to.equal(0);

    const actionContent = {
      type: 'CHANGE_SCORE',
      score: {
        user1: 1,
        user2: 2
      }
    };

    expect(scoreReducer(data, actionContent)).to.equal(undefined);
    expect(scoreReducer(data, actionContent)).to.equal(undefined);
  });
});