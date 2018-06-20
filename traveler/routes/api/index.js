const router = require("express").Router();
const tripRoutes = require("./trips");
const userRoutes = require("./users");

// Book routes
router.use("/trips", tripRoutes);
router.use("/users", userRoutes);

module.exports = router;
