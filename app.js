const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const getPath = require("./helpers/getPath");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    extname: "hbs",
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout.hbs",
  })
);
app.set("view engine", ".hbs"); // options pub, hbs
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
