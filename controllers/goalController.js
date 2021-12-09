const Controller = require("./baseController");
const goalService = require("../services/goalService");

class GoalController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new GoalController(goalService);