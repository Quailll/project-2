const router = require("express").Router();
const { Shoe, User } = require("../models/");
const withAuth = require("../util/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const shoeData = await Shoe.findAll({
      where: { userId: req.session.userId },
    });

    const shoes = shoeData.map((shoe) => shoe.get({ plain: true }));
    res.render("user-shoes", { shoes });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
