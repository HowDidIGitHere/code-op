const Controller = require("./baseController");
const NotificationService = require("../services/NotificationService");
const Notification = require("../models/Notification");

const notificationService = new NotificationService(new Notification().getInstance());

class NotificationController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new NotificationController(notificationService);
