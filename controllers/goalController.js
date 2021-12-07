const Controller = require("./baseController");
const GoalService = require("../services/GoalService");
const Goal = require("../models/Goal");

const goalService = new GoalService(new Goal().getInstance());

class GoalController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new GoalController(goalService);