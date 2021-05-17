const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></input></form>"
  );
});

router.post("/product", (req, res) => {
  console.log("/product route ", req.body.title);
  res.redirect("/");
});

module.exports = router;
