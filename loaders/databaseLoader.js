const mongoose = require("mongoose");
// Must load models here before loading routes
require('../models/User');

const databaseURL = require("../config/keys").mongoURI;

const setDatabaseOptions = () => {
  mongoose.set("useCreateIndex", true);
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useUnifiedTopology", true);
};

const connectToDatabase = (databaseURL) => {
  mongoose.connect(databaseURL);
};

module.exports = () => {
  setDatabaseOptions();
  connectToDatabase(databaseURL);
};