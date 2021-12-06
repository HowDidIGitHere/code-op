const databaseLoader = require("./databaseLoader");
const { catchAsync } = require("../utils");
const middlewareLoaders = require("./middlewareLoaders");
const processErrorHandlingLoader = require("./processErrorHandlingLoaders");

const init = catchAsync( async data => {
  await databaseLoader();
  await processErrorHandlingLoader();
  await thirdpartyMiddlewareLoader(data.app);
  await middlewareLoaders.init(data.app);
});

module.exports = {
  databaseLoader,
  init,
  middlewareLoaders,
  processErrorHandlingLoader
};