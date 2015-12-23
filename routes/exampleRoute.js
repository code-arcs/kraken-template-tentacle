var express = require('express');
var router = express.Router();

var exampleService = require('../services/exampleService');

router.get('/example-service', function(req, res, next) {
  res.send(exampleService.getResult());
});

module.exports = router;
