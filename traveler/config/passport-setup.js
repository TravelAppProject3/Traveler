const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("../models/user-model");

passport.serializeUser((user, done) => {
  //unique id created by mongo --> when its passed off we're going to put the id into a cookie
  //null represents if there is an error
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//telling the app to use google passport strategy - takes two parameters
//1st - new google strategy takes in an object
//2nd - callback function.
passport.use(
  new GoogleStrategy(
    {
      //options for the strategy - options go over in video #6
      //redirect also set in console.developers.google
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    //accessToken comes from google, refresh - refreshes because access will expire, profile is google profile, done is a function need to call when done with the cb function
    (accessToken, refreshToken, profile, done) => {
      // check is user already exists in database
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          //already have the user
          console.log("user is", currentUser);
          done(null, currentUser);
        } else {
          //if not, create user in database
          //create new user in mongo database
          //.save() is async --> .then takes a callback function and will fire when saving to the database is complete
          new User({
            username: profile.displayName,
            googleId: profile.id,
            thumbnail: profile._json.image.url
          })
            .save()
            .then(newUser => {
              console.log("new user created" + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
