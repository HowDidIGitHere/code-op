const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  emptyPositions: [{ type: String }],
  collaborators: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  goals: [{ type: Schema.Types.ObjectId, ref: 'goals' }],

}, {
  timestamps: true
});

module.exports = Project = mongoose.model("projects", ProjectSchema);