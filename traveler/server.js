const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const PORT = process.env.PORT || 3001;
const db = require("./models");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

//encrypts cookie
app.use(
  cookieSession({
    //maxage is the age of the cookie
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb --> pass connection string and then a second parameter to console log message
mongoose.connect(
  keys.mongodb.dbURI,
  () => {
    console.log("connected to mongoDB");
  }
);

db.User.create({ username: "jamiek", name: "Jamie", password: "jamie1" });

app // Start the API server
  .listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
