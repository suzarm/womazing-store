var express = require('express');
var router = express.Router();
var OrderModel = require("../models/order");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
