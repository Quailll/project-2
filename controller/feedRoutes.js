const router = require("express").Router();
const { Shoe, User } = require("../models/");
const withAuth = require("../util/auth");

router.get("/feed", withAuth, async (req, res) => {
  try {
    const shoeData = await Shoe.findAll({
      include: [User],
    });
    const shoes = shoeData.map((shoe) => shoe.get({ plain: true }));

    res.render("all-shoes", { layout: "feed", shoes });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/feed");
    return;
  }
  res.render("login");
});

module.exports = router;
