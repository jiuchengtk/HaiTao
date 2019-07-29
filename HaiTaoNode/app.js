var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 在app.js中引R入banner的api 文件
var apibannerouter = require('./api/banner');
var apiproductrouter = require('./api/product');

var app = express();

// 自定义中间件，设置跨域需要的响应头
var allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next(); 
  }; 

// cors跨域，运用跨域的中间件  
app.use(allowCrossDomain);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 使用banner的api   apibannerRouter
app.use('/api/banner', apibannerRouter);
app.use('/api/product', apiproductrouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
