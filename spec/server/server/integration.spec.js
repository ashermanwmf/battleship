const app = require('../../../server.js').app;
const request = require('supertest');

beforeEach(function() {
  this.app = app;
});

describe('/*', function() {
  it('should have access control headers', function(done) {
    request(this.app)
      .get('/api/setUser')
      .then((res) =>{
        expect(res.headers['access-control-allow-methods']).toEqual('GET, POST');
        expect(res.headers['access-control-allow-credentials']).toEqual('true');
        done();
      })
      .catch(done.fail);
  });
});

describe('/api/setUser', function() {
  it('should set user and return info', function(done) {
    request(this.app)
      .post('/api/setUser')
      .send({username: 'user1'})
      .then((res) =>{
        expect(res.body.username).toEqual('user1');
        expect(res.body.board).toBeDefined(); 
        expect(res.body.turn).toEqual(true);
        expect(res.body.board.pieces).toBeDefined();  
        expect(res.body.board.board).toBeDefined();        
        done();
      })
      .catch(done.fail);
  });
});

describe('/api/setUser', function() {
  it('should return 400 status when user already set', function(done) {
    this.app.set('userInfo', {
      user1: true,
      user2: false
    });

    request(this.app)
      .post('/api/setUser')
      .send({username: 'user1'})
      .then((res) =>{
        expect(res.status).toEqual(400);
        done();
      })
      .catch(done.fail);
  });
});

describe('/api/resetGame', function() {
  it('should rest userInfo', function(done) {
    this.app.set('userInfo', {
      user1: true,
      user2: true
    });

    request(this.app)
      .get('/api/resetGame')
      .then((res) =>{
        expect(res.body.user1).toEqual(false);
        expect(res.body.user2).toEqual(false);
        done();
      })
      .catch(done.fail);
  });
});
