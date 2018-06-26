const passport = require("passport"),
  TwitterStrategy = require("passport-twitter").Strategy;
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

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitter.consumerKey,
      consumerSecret: keys.twitter.consumerSecret,
      callbackURL: "http://127.0.0.1:3000/auth/twitter/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      // check is user already exists in database
      User.findOne({ twitterId: profile.id }).then(currentUser => {
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
            twitterId: profile.id
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

module.exports = passport;
