const express = require("express");
const path = require("path");
const loaders = require("./loaders/rootLoader");
const app = express();
require('./utils/tags');

const startServer = () => {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static("frontend/build"));
    app.get("/", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
  }
  loaders.init({ app });

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server is runing on port ${port}`));
};

startServer();