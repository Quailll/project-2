const router = require("express").Router();
const { Shoe } = require("../../models");
const withAuth = require("../../util/auth");

router.get("/", async (req, res) => {
  try {
    const shoesData = await Shoe.findAll();
    res.status(200).json(shoesData);
  } catch (err) {
    res.status(500).json(err);
  }

  // find all categories
  // be sure to include its associated Products
});

router.post("/", withAuth, async (req, res) => {

  try {
    const shoes = await Shoe.create({
      user_id: req.session.userId,
      name: req.body.name,
      brand: req.body.brand,
      style: req.body.style,
      image: req.body.img_url,
    });
    res.status(200).json(shoes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const shoes = await Shoe.update(
      {
        name: req.body.name,
        brand: req.body.brand,
        style: req.body.style,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(shoes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const shoes = await Shoe.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(shoes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
