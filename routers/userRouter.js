const express = require("express");
const { protect, restrict } = require("../controllers/authController");
const router = express.Router();

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// Auth
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// Anyone can view a user
router.get("/:id", userController.getSingle);

// Restrict to only respective User
router.put("/:id", protect, restrict, userController.update);
router.delete("/:id", protect, restrict, userController.delete);

module.exports = router;