var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  name: {
    type: String,
    required: "Activity Name is required"
  },
  activityId: {
    type: String
  }
});

var Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;
