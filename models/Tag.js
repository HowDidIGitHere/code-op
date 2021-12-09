const mongoose = require('mongoose');
const Validator = require('validator');
const tags = require('../utils/tags');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a tag name'],
    // enum: Object.values(tags).flatten()
  },
  category: {
    type: String,
    required: [true, 'Please enter a tag category'],
    enum: ['skill', 'platform', 'software']
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