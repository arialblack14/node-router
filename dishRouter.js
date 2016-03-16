// This helped clear up things
// http://start.jcolemorrison.com/quick-tip-organizing-routes-in-large-express-4-x-apps/

var express = require('express'),
    bodyParser = require('body-parser');
var dishRouter = express.Router();

// Use the body-parser module to parse data sent
dishRouter.use(bodyParser.json());

//Routes for the root path of the application
dishRouter.route('/').all(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'type/plain' });
  next();
})
.get(function(req, res, next) {
  res.end('Will send all the dishes to you!');
})
.post(function(req, res, next) {
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next) {
  res.end('Deleting all dishes');
});

// Routes for specific dish
dishRouter.route('/:dishId').all(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'type/plain' });
  next();
})
.get(function(req, res, next) {
  res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
})
.put(function(req, res, next) {
  res.write('Updating the dish: '+ req.params.dishId + '.\n');
  res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next) {
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;
