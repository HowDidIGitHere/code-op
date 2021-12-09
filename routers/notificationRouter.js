const express = require("express");
const { protect, restrict } = require("../controllers/authController");
const NotificationController = require("../controllers/notificationController");

const router = express.Router();


// Restrict only to recipient
router.get("/", protect, restrict, NotificationController.get);
router.get("/:id", protect, restrict, NotificationController.getSingle);
router.delete("/:id", protect, restrict, NotificationController.delete);

// Anyone can post
router.post("/", protect, NotificationController.create);

module.exports = router;