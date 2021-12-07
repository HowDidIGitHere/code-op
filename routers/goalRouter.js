const express = require("express");
const router = express.Router();

const { protect, restrict } = require("../controllers/authController");

const goalController = require("../controllers/goalController");

// Restrict to Collaborators
router.get("/", protect, restrict, goalController.get);
router.get("/:id", protect, restrict, goalController.getSingle);
router.post("/", protect, restrict, goalController.create);
router.put("/:id", protect, restrict, goalController.update);
router.delete("/:id", protect, restrict, goalController.delete);

module.exports = router;