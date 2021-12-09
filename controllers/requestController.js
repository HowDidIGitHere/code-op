const Controller = require("./baseController");
const requestService = require("../services/requestService");

class RequestController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new RequestController(requestService);
