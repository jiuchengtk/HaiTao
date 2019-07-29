var express = require('express');
var router = express.Router();
var sql = require('./../sql/index');
var Product = require('./../sql/product');

router.get('/', function(req, res, next) {

  sql.find(Product, {}, { pic: 1}).then( data => {
    console.log(data);
    res.send(data);
  })

})


router.get('/detail', function(req, res, next) {
   
  sql.find(Product, {}, { pic: 1}).then( data => {
    console.log(data);
    res.send(data);
  })
})

module.exports = router;