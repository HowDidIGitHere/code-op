const express = require("express");
const router = express.Router();

const { protect } = require("../controllers/authController");

const goalController = require("../controllers/goalController");

router.get("/", goalController.get);
router.get("/:id", goalController.getSingle);
router.post("/", protect, goalController.create);
router.put("/:id", protect, goalController.update);
router.delete("/:id", protect, goalController.delete);

module.exports = router;