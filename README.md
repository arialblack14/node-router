# Instructions

### Assignment Overview

In this assignment you will continue the exploration of Node modules, Express and the REST API. At the end of this assignment, you should have completed the following tasks to update the server:

Created a Node module using Express router to support the routes for the dishes REST API.
Created a Node module using Express router to support the routes for the promotions REST API.
Created a Node module using Express router to support the routes for the leadership REST API.
Assignment Requirements

The REST API for our Angular and Ionic/Cordova application that we built in the previous courses requires us to support the following REST API end points:

`
http://localhost:3000/dishes
http://localhost:3000/promotions
http://localhost:3000/leadership
`

We need to support GET, PUT, POST and DELETE operations on each of the three endpoints mentioned above, including supporting the use of route parameters to identify a specific dish, promotion and leader. We have already constructed the REST API for the dishes route in the previous exercise.

This assignment requires you to complete the following three tasks. Detailed instructions for each task are given below.

### Task 1

In this task you will create a separate Node module implementing an Express router to support the REST API for the dishes. You can reuse all the code that you implemented in the previous exercise. To do this, you need to complete the following:

Create a Node module named `dishRouter.js` that implements the Express router for the `/dishes` REST API end point.
Require the Node module you create above within your Express application and mount it on the /dishes route.

### Task 2

In this task you will create a separate Node module implementing an Express router to support the REST API for the promotions. To do this, you need to complete the following:

Create a Node module named `promoRouter.js` that implements the Express router for the `/promotions` REST API end point.
Require the Node module you create above within your Express application and mount it on the `/promotions` route.

### Task 3

In this task you will create a separate Node module implementing an Express router to support the REST API for the leadership. To do this, you need to complete the following:

Create a Node module named `leaderRouter.js` that implements the Express router for the `/leadership` REST API end point.
Require the Node module you create above within your Express application and mount it on the `/leadership` route.
Review criterialess
Upon completion of the assignment, your submission will be reviewed based on the following criteria:

### Task 1:

The new Node module, dishRouter is implemented and used within your server to support the `/dishes` end point.
The REST API supports GET, POST and DELETE operations on /dishes and GET, PUT and DELETE operations on `/dishes/:id` end points.

### Task 2:

The new Node module, promoRouter is implemented and used within your server to support the `/promotions` end point.
The REST API supports GET, POST and DELETE operations on `/promotions` and GET, PUT and DELETE operations on `/promotions/:id` end points.

### Task 3:

The new Node module, leaderRouter is implemented and used within your server to support the `/leadership` end point.
The REST API supports GET, POST and DELETE operations on `/leadership` and GET, PUT and DELETE operations on `/leadership/:id` end points.
