const express = require("express");
const router = express.Router();

const { protect } = require("../controllers/authController");

const projectController = require("../controllers/projectController");

router.get("/", projectController.get);
router.get("/:id", projectController.getSingle);
router.post("/", protect, projectController.create);
router.put("/:id", protect, projectController.update);
router.delete("/:id", protect, projectController.delete);

module.exports = router;