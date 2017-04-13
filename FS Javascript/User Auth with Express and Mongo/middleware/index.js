
//redirect users away from login and register forms if they are already logged in
function loggedOut(req, res, next) {
  if (req.session && req.session.userId) {
    return res.redirect('/profile');
  }
  return next();
}

//check if user is logged in and can view this page, if not redirect them
function requiresLogin(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    let err = new Error('You must be logged in to view this page.');
    err.status = 401;
    return next(err);
  }
}

//Have to export to make available to outside
module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;
