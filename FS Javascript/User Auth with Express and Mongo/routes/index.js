const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mid = require('../middleware');


// GET /profile
router.get('/profile', mid.requiresLogin, function(req, res, next) {
  User.findById(req.session.userId)
      .exec(function (error, user) {
        if (error) {
          return next(error);
        } else {
          return res.render('profile', { title: 'Profile', name: user.name, favorite: user.favoriteBook });
        }
      });
});

// GET /logout
router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

// GET /login
router.get('/login', mid.loggedOut, function(req, res, next) {
  return res.render('login', { title: 'Log In'});
});

// POST /login
router.post('/login', function(req, res, next) {
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      }  else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('Email and password are required.');
    err.status = 401;
    return next(err);
  }
});

// GET /register
router.get('/register', function(req, res, next) {
  return res.render('register', { title: 'Sign Up'});
});

//POST /register
router.post('/register', function(req, res, next) {
  //The following validates the form fields are filled out
  if (req.body.email &&
      req.body.name &&
      req.body.favoriteBook &&
      req.body.password &&
      req.body.confirmPassword) {
        // error if passwords don't match
        if (req.body.password !== req.body.confirmPassword) {
          let err = new Error('Passwords do not match.');
          err.status = 400;
          return next(err);
        }

        // create object from form to store in Mongo DB
        let userData = {
          email: req.body.email,
          name: req.body.name,
          favoriteBook: req.body.favoriteBook,
          password: req.body.password
        };

        //use Schema's create method to insert the object document into Mongo
        User.create(userData, function (error, user) {
          if (error) {
            return next(error);
          } else {
            return res.redirect('/profile');
          }
        });
      } else {
        let err = new Error('All fields required.');
        err.status = 400; //400 bad request
        return next(err);
      }
});

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });
});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

module.exports = router;
