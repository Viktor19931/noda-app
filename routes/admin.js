const express = require("express");
const path = require("path");

const getPath = require("../helpers/getPath");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
  console.log(getPath(["..", "views", "add-product.html"]));
  res.sendFile(getPath(["..", "views", "add-product.html"]));
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  console.log(" body ", req.body);
  res.redirect("/");
});

module.exports = router;
