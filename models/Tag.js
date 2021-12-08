const mongoose = require("mongoose");
const Validator = require("validator");
const Model = require('./BaseModel');
const Schema = mongoose.Schema;

class Tag extends Model{
  initSchema() {
    const TagSchema = new Schema({
      name: {
        type: String,
        required: [true, "Please enter a tag name"]
      },
      category: {
        type: String,
        required: [true, "Please enter a tag category"]
      },
      it: {
        type: Schema.Types.ObjectId,
        refPath: "modelType",
        required: true
      },
      modelType: {
        type: String,
        required: true,
        enum: ['Project', 'User']
      }
    }, {
      timestamps: true
    });
    
    return mongoose.models.Tag || mongoose.model("Tag", TagSchema);
  }
}

module.exports = Tag;