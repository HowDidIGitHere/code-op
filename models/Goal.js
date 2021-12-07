const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const validateProjectInput = require("../validation/projects");
const Validator = require("validator");

class Goal {
  initSchema() {
    const GoalSchema = new Schema({
      title: {
        type: String,
        required: [true, "Please enter a goal title"]
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
      positions: [PositionSchema],
      collaborators: [{ type: Schema.Types.ObjectId, ref: 'users' }],
      goals: [{ type: Schema.Types.ObjectId, ref: 'Goal' }]
    }, {
      timestamps: true
    });
    
    mongoose.model("Goal", GoalSchema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("Goal");
  }
}

module.exports = Goal;