const express = require("express");
const router = express.router();

const sessionController = require("../controllers/sessionController");

router.post("/login", sessionController.login);
router.post("/logout", sessionController.protect, sessionController.logout);

module.exports = router;