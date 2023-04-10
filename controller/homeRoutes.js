const router = require("express").Router();
const { Shoe, User } = require("../models/");
const withAuth = require("../util/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const shoeData = await Shoe.findAll({
      where: { user_id: req.session.userId },
      order: [["createdAt", "DESC"]],
    });

    const shoes = shoeData.map((shoe) => shoe.get({ plain: true }));
    res.render("user-shoes", { shoes });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post", withAuth, async (req, res) => {
  try {
    res.render("new-shoe");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
  
    res.render("edit", {id: req.params.id});
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
