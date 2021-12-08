const mongoose = require("mongoose");
const Validator = require("validator");
const Schema = mongoose.Schema;

class Tag {
  initSchema() {
    const insertion = {
      type: 'single'
    };

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
      const names = this.name.split(' ').splice(1);
      if (names.length > 1) {
        const tags = names.map( name => {
          return { name, it: this.it, modelType: this.modelType }
        });
        insertion.type = 'many';
        insertion.tags = tags;
        mongoose.models.Tag.insertMany(tags)
      }
      next();
    });

    TagSchema.post('save', function(next) {
      console.log(this);
    });
    
    return mongoose.models.Tag || mongoose.model("Tag", TagSchema);
  }

  getInstance() {
    return this.initSchema();
  }
}

module.exports = Tag;