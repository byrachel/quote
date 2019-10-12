// Modules imports
var express = require('express');
var router = express.Router();

// Controllers imports
var index = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = index.processData(req);
  res.send(data);
  res.end();
});

module.exports = router;
