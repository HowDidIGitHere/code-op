const Service = require('./Service');
const Request = require('../models/Request');

class RequestService extends Service {
  constructor(model) {
    super(model);
  }
}

module.exports = new RequestService(Request);