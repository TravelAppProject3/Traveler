const router = require("express").Router();
const sheltersController = require("../../controllers/sheltersController");

// Matches with "/api/shelter"
router
  .route("/")
  .get(sheltersController.findAll)
  .post(sheltersController.create);

// Matches with "/api/shelter/:id"
router
  .route("/:id")
  .get(sheltersController.findById)
  .put(sheltersController.update)
  .delete(sheltersController.remove);

router.route("/getHotelGuests/:hotelId").get(sheltersController.findByHotelId);

router.route("/addGuest/:userId/:shelterId").put(sheltersController.update);

module.exports = router;










