const express           = require('express');
const bodyParser        = require('body-parser');
const fallback          = require('express-history-api-fallback');
const webpackMiddleWare = require('./webpackDevServer/config.js');
const app               = express();
const routes            = require('./routes/routes.js');

const root = `${__dirname}/src/client/public`;

app.set('port', 3000);

app.set('userInfo', {
  user1: false,
  user2: false
});

app.set('score', {
  user1: 0,
  user2: 0
});

// live updates while editing
webpackMiddleWare(app);

// middle ware for parsing data and serving public files
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(root)); 

// routes for API
routes(app);

app.use(fallback('index.html', {root}));

const server = app.listen(app.get('port'), () =>{
  console.log(`listening on port: ${app.get('port')}`);
});

module.exports.app = app;
module.exports.server = server;
require('./socketLogic');

