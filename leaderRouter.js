// This helped clear up things
// http://start.jcolemorrison.com/quick-tip-organizing-routes-in-large-express-4-x-apps/

var express = require('express'),
    bodyParser = require('body-parser');
var leaderRouter = express.Router();

// Use the body-parser module to parse data sent
leaderRouter.use(bodyParser.json());

//Routes for the root path of the application
leaderRouter.route('/').all(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'type/plain' });
  next();
});

leaderRouter.route('/').get(function(req, res, next) {
  res.end('Will send all the leaderships to you!');
});

leaderRouter.route('/').post(function(req, res, next) {
  res.end('Will add the leaderships: ' + req.body.name + ' with details: ' + req.body.description);
});

leaderRouter.route('/').delete(function(req, res, next) {
  res.end('Deleting all leaderships');
});

// Routes for specific leaderships
leaderRouter.route('/:leadershipsId').all(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'type/plain' });
  next();
});

leaderRouter.route('/:leadershipsId').get(function(req, res, next) {
  res.end('Will send details of the leadership: ' + req.params.leadershipsId + ' to you!');
});

leaderRouter.route('/:leadershipsId').put(function(req, res, next) {
  res.write('Updating the leadership: '+ req.params.leadershipsId + '.\n');
  res.end('Will update the leadership: ' + req.body.name + ' with details: ' + req.body.description);
});

leaderRouter.route('/:leadershipsId').delete(function(req, res, next) {
    res.end('Deleting leadership: ' + req.params.leadershipsId);
});

module.exports = leaderRouter;
