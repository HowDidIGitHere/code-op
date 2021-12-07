const express = require("express");
const router = express.Router();

const { protect } = require("../controllers/authController");

const NotificationController = require("../controllers/notificationController");

router.get("/", protect, NotificationController.get);
router.get("/:id", protect, NotificationController.getSingle);
router.post("/", protect, NotificationController.create);
router.delete("/:id", protect, NotificationController.delete);

module.exports = router;