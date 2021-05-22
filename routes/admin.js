const express = require("express");
const path = require("path");

const getPath = require("../helpers/getPath");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCss: true,
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  products.push(req.body);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
