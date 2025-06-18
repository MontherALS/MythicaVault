const express = require("express");
const router = express.Router();
const Creatures = require("../models/Creatures");

const {
  getCreatures,
  getCreaturesId,
  updateCreature,
  deleteCreature,
} = require("../controllers/creatures");

router.get("/creatures", getCreatures);

router.get("/creatures/:id", getCreaturesId);

router.put("/creatures/:id", updateCreature);

router.delete("/creatures/:id", deleteCreature);

module.exports = router;
