const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const validateProjectInput = require("../validation/projects");
const Validator = require("validator");

class Goal {
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

  getInstance() {
    return this.initSchema();
  }
}

module.exports = Goal;