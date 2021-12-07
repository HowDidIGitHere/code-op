const mongoose = require("mongoose");
const Validator = require("validator");
const Schema = mongoose.Schema;

class Tag {

  initSchema() {

    const TagSchema = new Schema({
      it: {
        // type: Schema.Types.ObjectId,
        // ref: "User",
        // required: true
      },
      name: {
        type: String,
        required: [true, "Please enter a tag name"]
      },
    }, {
      timestamps: true
    });
    
    return mongoose.models.Tag || mongoose.model("Tag", TagSchema);
  }

  getInstance() {
    return this.initSchema();
  }
}

module.exports = Tag;