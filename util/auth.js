const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    req.redirect('/login');
  } else{
    next();
  }
};

module.exports = withAuth;