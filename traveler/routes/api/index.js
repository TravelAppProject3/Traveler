const router = require("express").Router();
const tripRoutes = require("./trips");
const tripLegRoutes = require("./tripLegs");
const userRoutes = require("./users");

// Book routes
router.use("/trips", tripRoutes);
router.use("/tripLeg", tripLegRoutes);
router.use("/user", userRoutes);

module.exports = router;
