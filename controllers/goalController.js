const Controller = require("./baseController");
const GoalService = require("../services/GoalService");
const Goal = require("../models/Goal");

const projectService = new GoalService(new Goal().getInstance());

class GoalController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new GoalController(projectService);