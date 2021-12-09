const mongoose = require("mongoose");
const Validator = require("validator");
const Model = require('./BaseModel');
const Schema = mongoose.Schema;

class Goal extends Model {
  initSchema() {
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
      tasks: [TaskSchema],
    }, {
      timestamps: true
    });
    
    return mongoose.models.Goal || mongoose.model("Goal", GoalSchema);
  }
}

module.exports = Goal;