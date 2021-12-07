const express = require("express");
const { protect } = require("../controllers/authController");
const router = express.Router();

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// Auth
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// Anyone can view a user
router.get("/:id", userController.getSingle);

// Restrict to only respective User
router.put("/:id", protect, userController.update);
router.delete("/:id", protect, userController.delete);

module.exports = router;