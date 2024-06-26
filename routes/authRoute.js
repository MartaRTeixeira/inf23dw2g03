const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/", (req, res) => {
  res.send('<a href="/auth/google?scope=email">Login with Google</a>');
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
  }),
  (req, res) => {
    res.redirect(`/docs?token=${req.user.token}`);
  }
);

router.get("/auth/failure", (req, res) => {
  res.send("Something went wrong");
});

module.exports = router;