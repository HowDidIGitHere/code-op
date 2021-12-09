const express = require("express");
const { 
  login, 
  signup,
  protect, 
  restrict 
} = require("../controllers/authController");
const userController = require("../controllers/userController");
const router = express.Router();

// Auth
router.post("/signup", signup);
router.post("/login", login);

// Anyone can view a user
router.get("/", userController.get);
router.get("/:id", userController.getSingle);

// Restrict to only respective User
router.put("/:id", protect, restrict, userController.update);
router.delete("/:id", protect, restrict, userController.delete);

module.exports = router;