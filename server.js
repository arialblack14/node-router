// Require needed modules
var express = require('express'),
    morgan = require('morgan');
// Set port and hostname of server
var port = 3000,
    hostname = 'localhost';

// Build our application
var app = express();

// Use morgan for logging stuff in the console
app.use(morgan('dev'));

// Define our routers
var dishRouter = require('./dishRouter');

// Use our routes
app.use('/dishes', dishRouter);

// Serve static files
app.use(express.static(__dirname + '/public'));
// Start the server
app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}`);
});
