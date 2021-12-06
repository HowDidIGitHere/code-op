const express = require("express");
const app = express();

const loaders = require("./loaders/rootLoader");
const { catchAsync } = require("./utils");

const startServer = catchAsync( async () => {
  loaders.init({ app });

  const port = process.env.SERVER_PORT || 5000;
  app.listen(port, () => console.log(`Server is runing on port ${port}`));
});

startServer();