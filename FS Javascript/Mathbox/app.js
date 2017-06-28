const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
//This is getting session passed in as an argument so it can access it
const MongoStore = require('connect-mongo')(session);
const expresshandlebars = require('express-handlebars');
const app = express();


//app.use syntax is for middleware. middleware typically takes three arguments, req, res and next. Next being the next middleware to run.

//mongodb connection
mongoose.connect("mongodb://localhost:27017/maths");
const db = mongoose.connection;

//mongo error handler
db.on('error', console.error.bind(console, 'connection error:'));

// use sessions for tracking logins
app.use(session({
  secret: 'flimFlamFlimJam',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// make current user global available in templates
app.use(function (req, res, next) {
  res.locals.currentUser = req.session.userId;
  next();
})

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// view engine setup //Defines the template view engine
app.engine('handlebars', expresshandlebars({
  layoutsDir: 'views',
  defaultLayout: 'layout'
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// include routes
const routes = require('./routes/index');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});
