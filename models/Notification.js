const mongoose = require("mongoose");
const Validator = require("validator");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  recipient: {
    type: Schema.Types.ObjectId, ref: "User",
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

module.exports = mongoose.models.Notification || mongoose.model("Notification", NotificationSchema);