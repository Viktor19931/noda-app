const Product = require("../models/product");

exports.getProducts = (req, res) =>
  Product.fetchAll((products) =>
    res.render("shop/product-list", {
      products,
      pageTitle: "All products",
      path: "/products",
    })
  );

exports.getProduct = (req, res) => {
  const productId = req.params.productId;

  Product.findById(productId, (product) =>
    res.render("shop/product-detail", {
      product,
      pageTitle: "Product detail",
      path: "/products",
    })
  );
};

exports.getIndex = (req, res) =>
  Product.fetchAll((products) =>
    res.render("shop/index", {
      products,
      pageTitle: "Shop",
      path: "/",
    })
  );

exports.getCart = (req, res) =>
  res.render("shop/cart", {
    pageTitle: "Your cart",
    path: "/cart",
  });

exports.postCart = (req, res) => {
  const productId = req.body.productId;

  console.log("product ", productId);

  res.redirect("/cart");
  // res.render("shop/cart", {
  //   pageTitle: "Your cart",
  //   path: "/cart",
  // });
};

exports.getCheckout = (req, res) =>
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });

exports.getOrders = (req, res) =>
  res.render("shop/orders", {
    pageTitle: "Your orders",
    path: "/orders",
  });
