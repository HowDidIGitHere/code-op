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
        return tagCategoryNames ? tagCategoryNames.includes(val): false;
      },
      message: 'Tag names must match their category'
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

module.exports = mongoose.models.Tag || mongoose.model('Tag', TagSchema);