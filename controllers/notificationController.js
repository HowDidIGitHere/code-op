const Controller = require("./baseController");
const notificationService = require("../services/notificationService");

class NotificationController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new NotificationController(notificationService);
