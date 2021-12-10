const Model = require('./BaseModel');
const Schema = mongoose.Schema;

const Validator = require("validator");

const DiagramSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a name for this diagram"]
  },
  content: {
    type: String
  }
}, {
  timestamps: true
});

class Diagram extends Model {
  constructor(schema) {
    return super(schema);
  }
}

module.exports = new Diagram(DiagramSchema);