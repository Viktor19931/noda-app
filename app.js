const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const getPath = require("./helpers/getPath");

const app = express();

app.set("view engine", "pug");
app.set("views", "views"); // default

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(getPath(["public"])));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(3000);
