const express = require("express");
const router = express.router();

const userController = require("../controllers/userController");

router.post("/signup", userController.signup);

module.exports = router;