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
    this.id = Date.now().toString();
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

  static findById(id, cb) {
    getProductsFromFile((products) => {

      console.log(typeof products[0].id, typeof id)
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
