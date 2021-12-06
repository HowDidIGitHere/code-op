const mongoose = require("mongoose");
require('../models/User');

const databaseURL = require("../config/keys").mongoURI;

const setDatabaseOptions = () => {
  mongoose.set("useNewUrlParser", true)
};

const connectToDatabase = (databaseURL) => {
  mongoose.connect(databaseURL);
};

module.exports = () => {
  setDatabaseOptions();
  connectToDatabase(databaseURL);
};