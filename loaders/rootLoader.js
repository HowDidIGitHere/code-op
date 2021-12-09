require('dotenv').config({path: __dirname + '/../config/keys.env'});
const databaseLoader = require("./databaseLoader");
const middlewareLoader = require("./middlewareLoaders/middlewareLoader");
const processErrorHandlingLoader = require("./processErrorHandlingLoader");

const init = data => {
  databaseLoader();
  processErrorHandlingLoader();
  middlewareLoader.init(data.app);
};

module.exports = {
  databaseLoader,
  init,
  middlewareLoader,
  processErrorHandlingLoader
};