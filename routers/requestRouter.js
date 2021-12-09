const express = require("express");
const { protect, restrict } = require("../controllers/authController");
const RequestController = require("../controllers/requestController");

const router = express.Router();


// Restrict only to recipient
router.get("/", protect, restrict, RequestController.get);
router.delete("/:id", protect, restrict, RequestController.delete);

// Anyone can post
router.post("/", protect, RequestController.create);

module.exports = router;