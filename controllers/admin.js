const Product = require("../models/product");

exports.getAddProducts = (req, res) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res) => {
  const { title, description, imageUrl, price } = req.body;
  const product = new Product(title, description, imageUrl, price);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res) =>
  Product.fetchAll((products) =>
    res.render("admin/product-list", {
      products,
      pageTitle: "Admin products",
      path: "/admin/product-list",
    })
  );
