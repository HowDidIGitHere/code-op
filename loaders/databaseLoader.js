const mongoose = require("mongoose");
const { mongoUri } = require("../config/keys");

const setDatabaseOptions = () => {
  mongoose.set("useCreateIndex", true);
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useUnifiedTopology", true);
};

const connectToDatabase = (mongoUri) => {
  mongoose.connect(mongoUri);
};

module.exports = () => {
  setDatabaseOptions();
  connectToDatabase(mongoUri);
};