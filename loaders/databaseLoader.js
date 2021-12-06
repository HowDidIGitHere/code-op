const mongoose = require("mongoose");

const databaseURL = require("../config/keys").mongoURI;

const setDatabaseOptions = () => {
  mongoose.set("useNewUrlParser", true)
};

const connectToDatabase = (databaseURL) => {
  mongoose.connect(databaseURL);
};

module.exports = async () => {
  setDatabaseOptions();
  connectToDatabase(databaseURL);
};