const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

const getPath = require("./helpers/getPath");
const errorController = require("./controllers/error");

const app = express();

// app.engine(
//   "hbs",
//   expressHbs({
//     extname: "hbs",
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout.hbs",
//   })
// );
app.set("view engine", "ejs"); // options pub, hbs, ejs
app.set("views", "views"); // default

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(getPath(["public"])));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
