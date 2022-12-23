const express = require("express");
const router = express.Router();

const AnimaisController = require("../controllers/AnimaisControllers");




router.get("/all", AnimaisController.showAnimais);
router.get("/all", AnimaisController.showAnimaisNome);
router.get("/all/:id", AnimaisController.showAnimaisId);
router.post("/create", AnimaisController.createAnimais);
router.patch("/update/:id", AnimaisController.replaceAnimais)
router.delete("/delete/:id", AnimaisController.deleteAnimais)

module.exports = router;