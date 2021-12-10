const express = require("express");
const { protect, restrict } = require("../controllers/authController");
const goalController = require("../controllers/goalController");

const router = express.Router();


// Restrict to Collaborators
router.get("/", goalController.get);
router.get("/:id", protect, restrict, goalController.getSingle);
router.post("/", protect, restrict, goalController.create);
router.put("/:id", protect, restrict, goalController.update);
router.delete("/:id", protect, restrict, goalController.delete);

module.exports = router;