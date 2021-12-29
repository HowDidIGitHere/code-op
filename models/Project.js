const mongoose = require('mongoose');
const Validator = require('validator');
const Tag = require('../models/Tag');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please enter a project title']
  },
  featured: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    default: ''
  },
  liveLink: {
    type: String,
    default: ''
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  description: {
    type: String,
    required: [true, 'Please add a brief description']
  },
  github: {
    type: String,
    validate: {
      validator: Validator.isURL,
      message: 'Please enter a valid Github URL'
    }
  },
  collaborators: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  goals: [{ type: Schema.Types.ObjectId, ref: 'Goal' }],
  diagram: {
    type: Schema.Types.ObjectId,
    ref: 'Diagram'
  }
}, {
  timestamps: true
});

ProjectSchema.pre(/^find/, async function(next) {
  const { tags } = this._conditions;
  if (tags) {
    const tagDocs = await Tag.find({ name: tags, modelType: 'Project' });
    this._conditions._id = tagDocs.map( tagDoc => tagDoc.it)
    delete this._conditions.tags; 
  }
  next();
});
    
module.exports = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
