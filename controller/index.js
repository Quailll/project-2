const router = require("express").Router();

const loginRoutes = require("./loginRoutes");
const apiRoutes = require("./api/");
const homeRoutes = require("./homeRoutes");
const feedRoutes = require("./feedRoutes");

router.use("/", loginRoutes);
router.use("/api", apiRoutes);
router.use("/home", homeRoutes);
router.use("/feed", feedRoutes);

module.exports = router;
