var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TripSchema = new Schema({
  tripName: {
    type: String,
    trim: true,
    required: "Trip Name is required"
  },
  tripUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: "Username is required"
  },
  tripLegs: [
    {
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
    }
  ]
});

var Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
