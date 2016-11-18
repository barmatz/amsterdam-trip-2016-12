var express = require('express')
  , morgan = require('morgan')
  , app = express()
  , port = 3000
  , server;

console.log('Running server..');

app
  .use(morgan('tiny'))
  .use(express.static('dist'));

server = app.listen(port, function () {
  var address = server.address();

  console.log('Serving on ' + address.address + ':' + address.port);
});