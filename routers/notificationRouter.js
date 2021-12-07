const express = require("express");
const router = express.Router();

const { protect } = require("../controllers/authController");

const NotificationController = require("../controllers/notificationController");

router.get("/", NotificationController.get);
router.get("/:id", NotificationController.getSingle);
router.post("/", NotificationController.create);
router.delete("/:id", NotificationController.delete);

module.exports = router;