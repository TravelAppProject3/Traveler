const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//two properties to use in each user record
const userSchema = new Schema({
  username: String,
  googleId: String,
  thumbnail: String
});

//creating the model or collection --> for every record define the structure of the records according to the userSchema
//exported at the bottom of the file.
const User = mongoose.model("user", userSchema);

module.exports = User;
