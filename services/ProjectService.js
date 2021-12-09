const Service = require('./Service');
const Project = require('../models/Project');

class ProjectService extends Service {
  constructor(model) {
    super(model);
  }
}

module.exports = new ProjectService(Project);