// EXAMPLE FOR NOW

const userRouter = require("../../routers/userRouter");
const { catchAsync } = require("../../utils");

module.exports = app => {
  app.use("/api/v1/users", userRouter);
  // app.use("/", viewRouter);
  return app;
};