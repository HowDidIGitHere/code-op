const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Validator = require("validator");

class Notification {
  initSchema() {
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

    return mongoose.models.Notification || mongoose.model("Notification", NotificationSchema);
  }

  getInstance() {
    return this.initSchema();
  }
}

module.exports = Notification;