const userRouter = require("../../routers/userRouter");
const projectRouter = require("../../routers/projectRouter");
const goalRouter = require("../../routers/goalRouter");
const tagRouter = require("../../routers/tagRouter");

module.exports = app => {
  app.use("/api/users", userRouter);
  app.use("/api/projects", projectRouter);
  app.use("/api/goals", goalRouter);
  app.use("/api/tags", tagRouter);
  return app;
};