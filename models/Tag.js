const mongoose = require('mongoose');
const validator = require('validator');
const tagNames = require('../utils/tags');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a tag name'],
    enum: Object.values(tagNames).flat(),
    validate: {
      validator: function(val) {
        const tagCategoryNames = tagNames[this.category];
        return tagCategoryNames.includes(tag.name);
      },
      message: 'Password confirmation failed'
    }
  },
  category: {
    type: String,
    required: [true, 'Please enter a tag category'],
    enum: ['position', 'platform', 'software']
  },
  it: {
    type: Schema.Types.ObjectId,
    refPath: 'modelType',
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

// TagSchema.pre('save', function(next) {
  // const tag = this;
  // const tagCategoryNames = tagNames[tag.category];
  // if (!tagCategoryNames.includes(tag.name))
//     return;
//   next();
// })

module.exports = mongoose.models.Tag || mongoose.model('Tag', TagSchema);