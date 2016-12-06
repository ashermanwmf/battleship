const express           = require('express');
const bodyParser        = require('body-parser');
const routes            = require('./routes/routes.js');
const fallback          = require('express-history-api-fallback');
const webpackMiddleWare = require('./webpackDevServer/config.js');
const app               = express();

const root = `${__dirname}/src/client/public`;

app.set('port', 3000);

webpackMiddleWare(app);

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(root)); 

routes(app);
app.use(fallback('index.html', {root}));

app.listen(app.get('port'), () =>{
  console.log(`listening on port: ${app.get('port')}`);
});

module.exports = app;