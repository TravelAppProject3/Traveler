const router = require("express").Router();
const tripLegsController = require("../../controllers/tripLegsController");

// Matches with "/api/books"
router
  .route("/")
  .get(tripLegsController.findAll)
  .post(tripLegsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(tripLegsController.findById)
  .put(tripLegsController.update)
  .delete(tripLegsController.remove);

module.exports = router;
