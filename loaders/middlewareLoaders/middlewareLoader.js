const customMiddlewareLoader = require("./customMiddlewareLoader");
const errorMiddlewareLoader = require("./errorMiddlewareLoader");
const routersLoader = require("./routersLoader");
const thirdPartyMiddlewareLoader = require("./thirdPartyMiddlewareLoader")

module.exports = {
  customMiddlewareLoader,
  errorMiddlewareLoader,
  routersLoader,
  thirdPartyMiddlewareLoader,
  init: async (app) => {
    await thirdPartyMiddlewareLoader(app);
    await customMiddlewareLoader(app);
    await routersLoader(app);
    await errorMiddlewareLoader(app);
    return app;
  }
};