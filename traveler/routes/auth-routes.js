//Creates an instance of a router and can attach routes to and use them in app.js
const router = require("express").Router();
const passport = require("passport");

//Auth login
// router.get("/login", (req, res) => {
//   res.render("login", { user: req.user });
// });

// this route is just used to get the user basic info
router.get("/user", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.body);
  console.log(req.user);
  if (req.user) {
    return res.json({ user: req.user });
  } else {
    console.log("no user");
    return res.json({ user: null });
  }
});

//auth logout
router.get("/logout", (req, res) => {
  //handle with passport - passport handles logging out
  req.logout();
  res.redirect("/");
});

//auth with google
//authenicate is a method and we're going to pass it a parameter google to use the google strategy
//2nd parameter is the scope property --> what we want from the profile.
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

//callback route for google to redirect to
//passport.authentic will exchange the code and get the profile information --> then fires the callback function in passport-setup
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  //access the user on this req object
  // res.send(req.user);
  res.redirect("/CreateTrip");
});

//attached all the routes to the instance of the router --> exports with all the handlers attached to it.
module.exports = router;
