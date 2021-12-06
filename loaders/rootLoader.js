const databaseLoader = require("./databaseLoader");
const { catchAsync } = require("../utils");
const middlewareLoaders = require("./middlewareLoaders/middlewareLoader");
const processErrorHandlingLoader = require("./processErrorHandlingLoader");

const init = catchAsync( async data => {
  await databaseLoader();
  await processErrorHandlingLoader();
  await middlewareLoaders.init(data.app);
});

module.exports = {
  databaseLoader,
  init,
  middlewareLoaders,
  processErrorHandlingLoader
};