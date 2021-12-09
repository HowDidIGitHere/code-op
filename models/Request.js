const mongoose = require("mongoose");
const Validator = require("validator");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  recipient: {
    type: Schema.Types.ObjectId, ref: "User",
    required: true
  },
  senderId: {
    type: Schema.Types.ObjectId, ref: "User",
    required: true
  },
  senderName: {
    type: String,
    required: true
  },
  projectId: {
    type: Schema.Types.ObjectId, ref: "Project",
    required: true
  },
  projectName: {
    type: String,
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
