const mongoose = require('mongoose');

class Model {
  constructor(schema) {
    return mongoose.models.Diagram || mongoose.model("Diagram", DiagramSchema);
  }
}