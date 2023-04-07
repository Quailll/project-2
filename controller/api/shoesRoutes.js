const router = require("express").Router();
const { Shoe } = require("../../models");
const withAuth = require("../../util/auth");


router.post("/", withAuth, async (req, res)=>{  
  try {
    const shoes = await Shoe.create({
      id: req.body.id,
      name: req.body.name,
      brand: req.body.brand,
      style: req.body.style
    });
    res.status(200).json(shoes)
  } catch(err){
    res.status(500).json(err)
}}); 

router.put("/:id", withAuth, async (req, res) => {
  try {
    const shoes = await Shoe.update({
      name: req.body.name,
      brand: req.body.brand,
      style: req.body.style
    },
    {
      where: {
        id: req.params.id, 
      }
    });
    res.status(200).json(shoes)
  } catch(err){
    res.status(500).json(err);
}
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const shoes = await Shoe.destroy({
      where: {
        id: req.params.id,
      }
    });
  res.status(200).json(shoes)
  } catch(err){
  res.status(500).json(err);
  }
});

module.exports = router