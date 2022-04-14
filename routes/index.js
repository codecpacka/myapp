var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//singn-up and login
router.get("/signup", function (req, res, next) {
  res.render("signup.ejs");
});
router.get("/login", function (req, res, next) {
  res.render("login.ejs");
});

module.exports = router;
