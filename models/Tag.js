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
        const names = name.split(',');
        const tags = names.map( name => {
          return { name, it: this.it, modelType: this.modelType }
        });
        mongoose.models.Tag.insertMany(tags)
        this.name = names[0];
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