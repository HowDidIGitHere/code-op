const Controller = require("./baseController");
const DiagramService = require("../services/DiagramService");
const Diagram = require("../models/Diagram");

const diagramService = new DiagramService(new Diagram().getInstance());

class DiagramController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new DiagramController(diagramService);