const Controller = require("./baseController");
const userService = require("../services/userService");
const User = require("../models/User");

class UserController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new UserController(userService);