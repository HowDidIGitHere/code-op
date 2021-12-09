const mongoose = require("mongoose");
const Validator = require("validator");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  recipient: {
    type: Schema.Types.ObjectId, ref: "User",
    required: true
  },
  sender: {
    type: Schema.Types.ObjectId, ref: "User",
    required: true
  },
  project: {
    type: Schema.Types.ObjectId, ref: "Project",
    required: true
  },
  message: {
    type: String
  },
  read: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.Request || mongoose.model("Request", RequestSchema);