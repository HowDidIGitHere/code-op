const express = require("express");
const router = express.Router();

const { protect } = require("../controllers/authController");

const diagramController = require("../controllers/diagramController");

router.get("/", protect, diagramController.get);
router.post("/", protect, diagramController.create);
router.put("/:id", protect, diagramController.update);
router.delete("/:id", protect, diagramController.delete);