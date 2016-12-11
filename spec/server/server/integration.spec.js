const request = require('supertest');

describe('/*', function() {
  it('should have access control headers', function(done) {
    request(this.app)
      .get('/*')
      .then((res) =>{
        console.log(res.headers);
      });
  });
});