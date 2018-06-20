var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ShelterSchema = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  hotelId: {
    type: String
  }
});

var Shelter = mongoose.model("Shelter", ShelterSchema);

module.exports = Shelter;
