// EXAMPLE FOR NOW

const userRouter = require("../../routers/userRouter");

module.exports = app => {
  app.use("/api/users", userRouter);
  // app.use("/", viewRouter);
  return app;
};