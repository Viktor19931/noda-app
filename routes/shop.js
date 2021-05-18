const express = require("express");

const getPath = require("../helpers/getPath");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(getPath(["views", "shop.html"]));
});

module.exports = router;
