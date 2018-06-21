const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

//two properties to use in each user record
const userSchema = new Schema({
  username: String,
  googleId: String,
  thumbnail: String,
  name: String,
  local: {
    username: { type: String, unique: false, required: false },
    password: { type: String, unique: false, required: false }
  }
});

// Define schema methods
userSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
userSchema.pre("save", function(next) {
  if (!this.local.password) {
    console.log("=======NO PASSWORD PROVIDED=======");
    next();
  } else {
    this.local.password = this.hashPassword(this.local.password);
    next();
  }
  // this.password = this.hashPassword(this.password)
  // next()
});

//creating the model or collection --> for every record define the structure of the records according to the userSchema
//exported at the bottom of the file.
const User = mongoose.model("user", userSchema);

module.exports = User;
