const mongoose = require("mongoose");
const Model = require('./BaseModel');
const Schema = mongoose.Schema;

const Validator = require("validator");

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

module.exports = mongoose.models.Diagram || mongoose.model("Diagram", DiagramSchema);