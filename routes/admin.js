const express = require("express");
const path = require("path");

const getPath = require("../helpers/getPath");
const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProducts);

router.get("/product-list", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
