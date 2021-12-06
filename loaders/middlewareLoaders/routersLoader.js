const userRouter = require("../../routers/userRouter");
const projectRouter = require("../../routers/projectRouter");

module.exports = app => {
  app.use("/api/users", userRouter);
  app.use("/api/projects", projectRouter);
  return app;
};