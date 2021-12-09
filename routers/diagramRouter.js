const express = require("express");
const { protect } = require("../controllers/authController");
const diagramController = require("../controllers/diagramController");

const router = express.Router();

router.get("/:id", protect, diagramController.getSingle);
router.post("/", protect, diagramController.create);
router.put("/:id", protect, diagramController.update);
router.delete("/:id", protect, diagramController.delete);

module.exports = router;