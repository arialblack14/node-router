// This helped clear up things
// http://start.jcolemorrison.com/quick-tip-organizing-routes-in-large-express-4-x-apps/

var express = require('express'),
    bodyParser = require('body-parser');
var promotionsRouter = express.Router();

// Use the body-parser module to parse data sent
promotionsRouter.use(bodyParser.json());

//Routes for the root path of the application
promotionsRouter.route('/').all(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'type/plain' });
  next();
});

promotionsRouter.route('/').get(function(req, res, next) {
  res.end('Will send all the promotions to you!');
});

promotionsRouter.route('/').post(function(req, res, next) {
  res.end('Will add the promotions: ' + req.body.name + ' with details: ' + req.body.description);
});

promotionsRouter.route('/').delete(function(req, res, next) {
  res.end('Deleting all promotions');
});

// Routes for specific promotions
promotionsRouter.route('/:promotionsId').all(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'type/plain' });
  next();
});

promotionsRouter.route('/:promotionsId').get(function(req, res, next) {
  res.end('Will send details of the promotions: ' + req.params.promotionsId + ' to you!Will send details of the promotions: ' + req.params.promotionsId + ' to you!');
});

promotionsRouter.route('/:promotionsId').put(function(req, res, next) {
  res.write('Updating the promotions: '+ req.params.promotionsId + '.\n');
  res.end('Will update the promotions: ' + req.body.name + ' with details: ' + req.body.description);
});

promotionsRouter.route('/:promotionsId').delete(function(req, res, next) {
    res.end('Deleting promotions: ' + req.params.promotionsId);
});

module.exports = promotionsRouter;
