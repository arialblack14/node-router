var express = require('express'),
    bodyParser = require('body-parser');
var dishRouter = express.Router();

// Use the body-parser module to parse data sent
dishRouter.use(bodyParser.json());

//Routes for the root path of the application
dishRouter.route('/').all(function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'type/plain' });
  next();
});

dishRouter.route('/').get(function(req, res, next) {
  res.end('Will send all the dishes to you!');
});

dishRouter.route('/').post(function(req, res, next) {
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

dishRouter.route('/').delete(function(req, res, next) {
  res.end('Deleting all dishes');
});

// Routes for specific dish

module.exports = dishRouter;

/* Note : I could also have written

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

module.exports = dishRouter;

etc....
*/
