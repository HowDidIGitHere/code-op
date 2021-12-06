const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");

router.get("/index", projectController.index);
router.get("/show", projectController.show);
router.post("/create", projectController.create);
router.put("/update", projectController.update);
router.delete("/delete", projectController.delete);

module.exports = router;