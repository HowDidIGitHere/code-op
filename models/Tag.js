const mongoose = require("mongoose");
const Validator = require("validator");
const Schema = mongoose.Schema;

class Tag {
  initSchema() {
    const TagSchema = new Schema({
      name: {
        type: String,
        required: [true, "Please enter a tag name"]
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
    
    TagSchema.pre('save', function(next) {
      console.log(this);
      const { name } = this._conditions;
      const names = name.split(' ').splice(1);
      if (names.length > 1) {
        // const namesList = tags.split(',');
        // const insertions = tagsList.map( tag => {
        //   return { name: tag,  }
        // });
        // this._conditions._id = tagDocs.map( tagDoc => tagDoc.it)
        // delete this._conditions.tags; 
      }
      return;
      // next();
    });
    
    return mongoose.models.Tag || mongoose.model("Tag", TagSchema);
  }

  getInstance() {
    return this.initSchema();
  }
}

module.exports = Tag;