const fs = require("fs");

const getPath = require("../helpers/getPath");
const pathToFile = getPath(["data", "product.json"]);

const getProductsFromFile = (cb) => {
  fs.readFile(pathToFile, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, description, imageUrl, price) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(pathToFile, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
