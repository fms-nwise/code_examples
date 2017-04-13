//REQUIRE SECTION
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
//initialize mongoose schemas
require('./models/models');
const index = require('./routes/index');
const api = require('./routes/api');
const authenticate = require('./routes/authenticate')(passport);
const mongoose = require('mongoose'); //Mongo Support
mongoose.connect('mongodb://localhost:27017/test-chirp'); //Connect to Mongo
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//MIDDLEWARE LOADER
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
//Authenticate secret. Normally should keep outside the github repo in enviornment variable.
app.use(session({
  secret: 'TeenageMutantDonkeyJammers',
  resave: true,
  saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/auth', authenticate);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//initialize passport
const initPassport = require('./passport-init'); //initialize Passport
initPassport(passport);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


//Export
module.exports = app;
