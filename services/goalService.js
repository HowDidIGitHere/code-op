const Service = require('./Service');
const Goal = require('../models/Goal');

class GoalService extends Service {
  constructor(model) {
    super(model);
  }
}

module.exports = new GoalService(Goal);