const express = require("express");
const router = express.Router();

const { protect, restrict } = require("../controllers/authController");

const projectController = require("../controllers/projectController");

// Anyone can view project 
router.get("/", projectController.get);
router.get("/:id", projectController.getSingle);

// Must be logged in to create a project
router.post("/", protect, projectController.create);

// Restrict to only Creator
router.put("/:id", protect, restrict, projectController.update);
router.delete("/:id", protect, restrict, projectController.delete);

module.exports = router;