const express = require("express");
const { protect } = require("../controllers/authController");
const router = express.Router();

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.get("/:id", userController.getSingle);
router.get("/:id/projects", userController.get)
router.put("/:id", protect, userController.update);
router.delete("/:id", protect, userController.delete);

module.exports = router;