var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname + "/../ionic/ionic-test/www/index.html"));
});

module.exports = router;
