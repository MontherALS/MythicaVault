const express = require("express");
const router = express.Router();
const { addCreatures } = require("../controllers/addCreature");

router.post("/addcreature", addCreatures);

module.exports = router;
