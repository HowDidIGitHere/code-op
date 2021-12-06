const mongoose = require("mongoose");
const { catchAsync } = require("../utils");

const databaseURL = require("../config/keys").mongoURI;

const setDatabaseOptions = () => {
  mongoose.set("useNewUrlParser", true)
};

const connectToDatabase = async (databaseURL) => {
  return await mongoose.connect(databaseURL);
};

const getDatabaseObject = dbConnection => {
  return dbConnection.connection.db;
}

module.exports = catchAsync( async () => {
  setDatabaseOptions();
  const dbConnection = await connectToDatabase(databaseURL);
  return getDatabaseObject(dbConnection);
});