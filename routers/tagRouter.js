const express = require("express");
const { protect } = require("../controllers/authController");
const tagController = require("../controllers/tagController");

const router = express.Router();


router.get("/", tagController.get);
router.get("/:id", tagController.getSingle);
router.post("/", protect, tagController.create);
router.put("/:id", protect, tagController.update);
router.delete("/:id", protect, tagController.delete);

module.exports = router;