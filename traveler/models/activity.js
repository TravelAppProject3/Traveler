var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ActivitiesSchema = new Schema({
  name: {
    type: String,
    required: "Activity Name is required"
  }
});

var Activities = mongoose.model("Activites", ActivitiesSchema);

module.exports = Activities;
