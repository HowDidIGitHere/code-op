// const express = require("express");
// const app = express();

// const database = require("./config/keys").mongoURI;

// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const passport = require("passport");

// const users = require("./routes/api/users");

// mongoose
//   .connect(database, { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB successfully"))
//   .catch(error => console.log(error));

// // app.get("/", (req, res) => {
// //   res.send("Hello World");
// // });

// app.use(passport.initialize());
// require("./config/passport")(passport);

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use("/api/users", users);

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server is running on port ${port}`));

const express = require("express");
const app = express();

const loaders = require("./loaders/rootLoader");
const { catchAsync } = require("./utils");

const startServer = catchAsync( async () => {
  await loaders.init({ app });

  const port = process.env.SERVER_PORT || 5000;
  app.listen(port, () => console.log(`Server is runing on port ${port}`));
});

startServer();