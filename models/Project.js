const mongoose = require("mongoose");
const Validator = require("validator");
const Schema = mongoose.Schema;

class Project {

  initSchema() {
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