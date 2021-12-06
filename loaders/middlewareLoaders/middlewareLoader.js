module.exports = {
  customMiddlewareLoader: require("./customMiddlewareLoader"),
  errorMiddlewareLoader: require("./errorMiddlewareLoader"),
  routersLoader: require("./routersLoader"),
  // thirdPartyMiddlewareLoader: require("./thirdPartyMiddlewareLoader"),
  init: async (app) => {
    // await this.thirdPartyMiddlewareLoader(app);
    await this.customMiddlewareLoader(app);
    await this.customMiddlewareLoader(app);
    await this.errorMiddlewareLoader(app);
    return app;
  }
};