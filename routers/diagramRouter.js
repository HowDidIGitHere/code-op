const express = require("express");
const { protect } = require("../controllers/authController");
const diagramController = require("../controllers/diagramController");

const router = express.Router();


router.get("/", protect, diagramController.get);
router.post("/", protect, diagramController.create);
router.put("/:id", protect, diagramController.update);
router.delete("/:id", protect, diagramController.delete);

module.exports = router;