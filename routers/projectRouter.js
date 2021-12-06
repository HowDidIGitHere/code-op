const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");

router.get("/", projectController.get);
router.get("/:id", projectController.getSingle);
router.post("/", projectController.create);
router.put("/:id", projectController.update);
router.delete("/:id", projectController.delete);

module.exports = router;