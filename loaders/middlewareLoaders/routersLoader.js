const userRouter = require("../../routers/userRouter");
const projectRouter = require("../../routers/projectRouter");
const goalRouter = require("../../routers/goalRouter");

module.exports = app => {
  app.use("/api/users", userRouter);
  app.use("/api/projects", projectRouter);
  app.use("/api/goals", goalRouter);
  return app;
};