const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const middleWare = require('./middlewares/auth')
var cors = require('cors')
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
app.use(cors())
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Middleware modules
let except = function (path, middleware) {
  return function (req, res, next) {
    if (path.indexOf(req.path) > -1) {
      // Exclude 
      return next()
    }
    else {
      return middleware(req, res, next)
    }
  }
}
//app.use(except([''],middleWare.tokenVerification))

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, PATCH');
  next();
});

// Require our routes into the application
require('./server/routes')(app)

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the starting page.',
}));

const server = http.createServer(app);
server.listen(3000, function () {
  console.log('Listen 3000');
});

module.exports = app;
