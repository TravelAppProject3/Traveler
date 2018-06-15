var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ActivitiesSchema = new Schema({
  name: {
    type: String,
    required: "Activity Name is required"
  },
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

var Activities = mongoose.model("Activites", ActivitiesSchema);

module.exports = Activities;
