var express = require('express');
var router = express.Router();
var user = require("./api/controller/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user/add', function(req, res, next) {
  user.create();
});


module.exports = router;
