const app = require('../../server.js').app;

console.log('test')

beforeEach(function() {
  this.app = app;
});