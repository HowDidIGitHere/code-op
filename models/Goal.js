const mongoose = require("mongoose");
const Validator = require("validator");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  body: {
    type: String,
    maxlength: [50, 'Task body must be less than or equal to 50'],
    required: true
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  }
});

const GoalSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter a goal title"]
  },
  description: {
    type: String,
    required: [true, "Please add a brief description"]
  },
  upvotes: {
    type: Number,
    default: 0
  },
  tasks: [TaskSchema],
}, {
  timestamps: true
});
    
module.exports = mongoose.models.Goal || mongoose.model("Goal", GoalSchema);