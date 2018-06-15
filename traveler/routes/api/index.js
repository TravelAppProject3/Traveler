const router = require("express").Router();
const bookRoutes = require("./books");
const tripRoutes = require("./trips");
const tripLegRoutes = require("./tripLegs");
const userRoutes = require("./users");

// Book routes
router.use("/books", bookRoutes);
router.use("/trips", tripRoutes);
router.use("/tripLeg", tripLegRoutes);

module.exports = router;
