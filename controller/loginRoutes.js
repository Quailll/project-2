const router = require("express").Router();

// renders login page
router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/home");
  }
  res.render("login");
});

module.exports = router;
