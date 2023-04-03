const router = require("express").Router();

// renders login page
router.get("/", (req, res) => {
  res.render("login");
});

module.exports = router;
