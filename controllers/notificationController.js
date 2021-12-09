const Controller = require("./baseController");
const notificationService = require("../services/NotificationService");

class NotificationController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new NotificationController(notificationService);
