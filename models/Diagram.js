const mongoose = require("mongoose");
const Model = require('./BaseModel');
const Schema = mongoose.Schema;

const Validator = require("validator");

class Diagram extends Model {
  initSchema() {
    const DiagramSchema = new Schema({
      name: {
        type: String,
        required: [true, "Please enter a name for this diagram"]
      },
      content: {
        type: String
      }
    }, {
      timestamps: true
    });

    return mongoose.models.Diagram || mongoose.model("Diagram", DiagramSchema);
  }

  getInstance() {
    return this.initSchema();
  }
}

module.exports = Diagram;