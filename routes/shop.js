const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  //router.get changing this to get, we avoid check the order in the app because is a exact match
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

module.exports = router;
