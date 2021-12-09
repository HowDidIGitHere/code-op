const mongoose = require("mongoose");

class Model {
  initSchema() {}

  getInstance() {
    return this.initSchema();
  }
}

module.exports = Model;