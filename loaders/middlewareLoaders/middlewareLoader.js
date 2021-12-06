const customMiddlewareLoader = require("./customMiddlewareLoader");
const errorMiddlewareLoader = require("./errorMiddlewareLoader");
const routersLoader = require("./routersLoader");
const thirdPartyMiddlewareLoader = require("./thirdPartyMiddlewareLoader")

module.exports = {
  customMiddlewareLoader,
  errorMiddlewareLoader,
  routersLoader,
  thirdPartyMiddlewareLoader,
  init: app => {
    thirdPartyMiddlewareLoader(app);
    customMiddlewareLoader(app);
    routersLoader(app);
    errorMiddlewareLoader(app);
    return app;
  }
};