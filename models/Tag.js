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
      const names = this.name.split(' ');
      if (names.length > 1) {
        const tags = names.map( name => {
          return { name, it: this.it, modelType: this.modelType }
        });
        insertion.type = 'many';
        insertion.tags = tags;
        mongoose.models.Tag.insertMany(tags)
        this.name = names[0];
      }
      next();
    });

    TagSchema.post('save', function(next) {
      console.log(this);
      this.test = 'testing';
    });
    
    return mongoose.models.Tag || mongoose.model("Tag", TagSchema);
  }

  getInstance() {
    return this.initSchema();
  }
}

module.exports = Tag;