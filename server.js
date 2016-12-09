const express           = require('express');
const bodyParser        = require('body-parser');
const fallback          = require('express-history-api-fallback');
const webpackMiddleWare = require('./webpackDevServer/config.js');
const app               = express();

const root = `${__dirname}/src/client/public`;

app.set('port', 3000);

app.set('userInfo', {
  user1: false,
  user2: false
});

console.log(app.get('userInfo'));

webpackMiddleWare(app);

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(root)); 

const server = app.listen(app.get('port'), () =>{
  console.log(`listening on port: ${app.get('port')}`);
});

// this is all set up for sockets within routeHelpers.js
module.exports = server;
const routes = require('./routes/routes.js');

routes(app);

app.use(fallback('index.html', {root}));

