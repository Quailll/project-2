const router = require("express").Router();
const shoesRoutes = require("./shoesRoutes");
const userRoutes = require("./userRoutes");
router.use("/shoes", shoesRoutes);
router.use("/user", userRoutes);

modules.exports = router; 
