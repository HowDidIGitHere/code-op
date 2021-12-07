const Controller = require("./baseController");
const ProjectService = require("../services/ProjectService");
const Project = require("../models/Project");

const projectService = new ProjectService(new Project().getInstance());

class ProjectController extends Controller {
  constructor(service) {
    super(service);
  }


}

module.exports = new ProjectController(projectService);
