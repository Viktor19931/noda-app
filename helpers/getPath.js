const path = require("path");

const rootPath = path.dirname(process.mainModule.filename);

const getPath = (slugs) => path.join(__dirname, ...slugs);

module.exports = getPath;
