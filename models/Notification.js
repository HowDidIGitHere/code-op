const mongoose = require("mongoose");
const Validator = require("validator");
const Model = require('./BaseModel');
const Schema = mongoose.Schema;


class Notification extends Model {
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
}

module.exports = Notification;