const mongoose = require("mongoose");
const Validator = require("validator");
const Schema = mongoose.Schema;

class Project {

  initSchema() {
    const PositionSchema = new Schema({
      role: {
        type: String,
        required: true
      },
      filled: {
        type: Boolean,
        required: true,
        default: false
      }
    });

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
        minlength: [100, 'Description must be at least 100'],
        maxlength: [200, 'Description must be equal to or less than 200'],
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
      collaborators: [{ type: Schema.Types.ObjectId, ref: 'User' }],
      goals: [{ type: Schema.Types.ObjectId, ref: 'Goal' }]
    }, {
      timestamps: true
    });
    
    return mongoose.models.Project || mongoose.model("Project", ProjectSchema);
  }

  getInstance() {
    return this.initSchema();
  }
}

module.exports = Project;