var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TripLegScehma = new Schema({
  city: {
    type: String,
    trim: true,
    required: "City is required"
  },
  arrivalDate: {
    type: Date
  },
  departureDate: {
    type: Date
  },
  shelter: [
    {
      type: Schema.Types.ObjectId,
      ref: "Shelter"
    }
  ],
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activity"
    }
  ]
});

var TripLeg = mongoose.model("TripLeg", TripLegScehma);

module.exports = TripLeg;
