/* mount server */

var express = require('express');
var path = require('path');
var fs = require('fs');
var https = require('https');
var _const = require('./system/system.js');

/* app epress */

var app = express();

// Credenciales de SSL
var credentials = {
    key: fs.readFileSync('/etc/ssl/certs/pengi.co.key'),
    cert: fs.readFileSync('/etc/ssl/certs/pengi.co.crt')
} ;

/* Static all routes */
app.use(express.static(path.join(__dirname, 'public')));


//adding all routes to path *
app.get('*', function(req, res) {
  //Response index
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* port and repo */
var PORT = global.url.PORT;
var server = https.createServer(credentials, app);

/* Server listen */

server.listen(PORT, function() {
  //Log iinit Server
  console.log('Server is running at ->> ' + global.url.BASE_URL + ' or port: '+ PORT);
});

server.on('error', onError);
server.on('listening', onListening);


function onError(error) {

  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof PORT === 'string'
    ? 'Pipe ' + PORT
    : 'Port ' + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}