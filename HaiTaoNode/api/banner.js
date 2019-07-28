var express = require('express');
var router = express.Router();
var sql = require('./../sql/index');
// banner 是sql文件夹下创建的banner 的sql语句
var Banner = require('./../sql/banner');

router.get('/', function(req, res, next) {

  sql.find(Banner, {}, { pic: 1}).then( data => {
    console.log(data);
    res.send(data);
  })

})

module.exports = router;