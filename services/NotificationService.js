const Service = require('./Service');
const Notification = require('../models/Notification');

class NotificationService extends Service {
  constructor(model) {
    super(model);
  }
}

module.exports = new NotificationService(Notification);