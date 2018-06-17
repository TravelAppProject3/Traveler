var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is required",
    index: { unique: true }
  },
  password: {
    type: String,
    required: "Password is required"
  },

  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },

  userCreated: {
    type: Date,
    default: Date.now
  }

  // trips: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Trip"
  //   }
  // ]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
