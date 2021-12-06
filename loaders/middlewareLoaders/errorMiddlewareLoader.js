const ServerError = require("../../utils/serverError");
const globalErrorHandler = require("../../controllers/errorsController");

module.exports = app => {
  app.use((req, res, next) => {
    if (!req.route) {
      next(new ServerError(`We could not find the page you are looking for`, 404));
    }
  });

  app.use(globalErrorHandler);

  return app;
};