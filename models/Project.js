const mongoose = require("mongoose");
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
      // creator: {
      //   type: Schema.Types.ObjectId,
      //   ref: "users"
      // },
      title: {
        type: String,
        required: [true, "Please enter a project title"]
      },
      description: {
        type: String,
        required: [true, "Please add a brief description"]
      },
      github: {
        type: String
      },
      positions: [PositionSchema],
      collaborators: [{ type: Schema.Types.ObjectId, ref: 'users' }],
      goals: [{ type: Schema.Types.ObjectId, ref: 'Goal' }]
    }, {
      timestamps: true
    });
    
    mongoose.model("Project", ProjectSchema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("Project");
  }
}

module.exports = Project;

// module.exports = Project = mongoose.model("Project", ProjectSchema);