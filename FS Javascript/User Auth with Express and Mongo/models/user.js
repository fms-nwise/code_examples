const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    //trim removes whitespace before and after text data
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  favoriteBook: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});
// authenticate input against database documents
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email })
    .exec(function (error, user) {
      if (error) {
        return callback(error);
      } else if ( !user ) {
        let err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function(error, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}
// hash password using a pre-hook (before save to db). Next is for Express to know next middlware to run.
UserSchema.pre('save', function(next) {
  let user = this;
  //Mongo's hash function takes three args, the data, how many times to apply encryption algo, and finally a callback function
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err); //passing it on to our error handler
    }
    user.password = hash; //replacing the password with the hash
    next(); //calls next function in middlware stack
  })
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
