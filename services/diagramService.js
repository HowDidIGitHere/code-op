const Service = require("./Service");
const Diagram = require('../models/Diagram');

class DiagramService extends Service {
  constructor(model) {
    super(model);
  }
}

module.exports = new DiagramService(Diagram);