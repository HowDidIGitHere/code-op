const databaseLoader = require("./databaseLoader");
const { catchAsync } = require("../utils");
const middlewareLoader = require("./middlewareLoaders/middlewareLoader");
const processErrorHandlingLoader = require("./processErrorHandlingLoader");

const init = catchAsync( async data => {
  databaseLoader();
  processErrorHandlingLoader();
  middlewareLoader.init(data.app);
});

module.exports = {
  databaseLoader,
  init,
  middlewareLoader,
  processErrorHandlingLoader
};