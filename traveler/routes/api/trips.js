const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

// Matches with "/api/trips"
router
  .route("/")
  .get(tripsController.findAll)
  .post(tripsController.create);

// Matches with "/api/trips/:id"
router
  .route("/:id")
  .get(tripsController.findById)
  .put(tripsController.update)
  .delete(tripsController.remove);

router.route("/new/").post(tripsController.create);

module.exports = router;
