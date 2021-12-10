const mongoose = require('mongoose');

class Model {
  constructor(schemaName, schema) {
    return mongoose.models[schemaName] || mongoose.model(schemaName, schema);
  }
}

module.exports = Model;