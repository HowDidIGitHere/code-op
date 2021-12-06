// EXAMPLE FOR NOW

const userRouter = require("../../routers/userRouter");

module.exports = app => {
  app.use("/api/v1/users", userRouter);
  // app.use("/", viewRouter);
  return app;
};