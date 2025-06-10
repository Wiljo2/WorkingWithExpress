const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  //router.get changing this to get, we avoid check the order in the app because is a exact match
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});

module.exports = router;
