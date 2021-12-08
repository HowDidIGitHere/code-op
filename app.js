const express = require("express");
const app = express();

const path = require("path");

const loaders = require("./loaders/rootLoader");

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const startServer = () => {
  loaders.init({ app });

  const port = process.env.SERVER_PORT || 5000;
  app.listen(port, () => console.log(`Server is runing on port ${port}`));
};

startServer();