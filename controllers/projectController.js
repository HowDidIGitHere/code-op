const Controller = require("./baseController");
const projectService = require("../services/ProjectService");

class ProjectController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new ProjectController(projectService);
