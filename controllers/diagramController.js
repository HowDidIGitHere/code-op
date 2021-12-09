const Controller = require("./baseController");
const diagramService = require("../services/diagramService");

class DiagramController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new DiagramController(diagramService);