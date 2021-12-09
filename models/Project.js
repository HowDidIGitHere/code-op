const mongoose = require("mongoose");
const Validator = require("validator");
const Model = require('./BaseModel');
const Tag = require("../models/Tag");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: [true, "Please enter a project title"]
  },
  description: {
    type: String,
    required: [true, "Please add a brief description"]
  },
  github: {
    type: String,
    validate: {
      validator: Validator.isURL,
      message: "Please enter a valid Github URL"
    }
  },
  collaborators: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  goals: [{ type: Schema.Types.ObjectId, ref: 'Goal' }],
  diagrams: [{ type: Schema.Types.ObjectId, ref: "Diagram" }]
}, {
  timestamps: true
});

ProjectSchema.pre(/^find/, async function(next) {
  const { tags } = this._conditions;
  if (tags) {
    const tagsList = tags.split(',');
    const tagDocs = await Tag.find({ name: tagsList, modelType: 'Project' });
    this._conditions._id = tagDocs.map( tagDoc => tagDoc.it)
    delete this._conditions.tags; 
  }
  next();
});
    
module.exports = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
