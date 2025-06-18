const Creatures = require("../models/Creatures");

exports.getCreatures = async (req, res, next) => {
  const allCreatures = await Creatures.find();

  res.status(200).json(allCreatures);
};
exports.getCreaturesId = async (req, res, next) => {
  const creature = await Creatures.findById(req.params.id);
  res.status(200).json(creature);
};

exports.updateCreature = async (req, res, next) => {
  const id = req.params.id;
  const {
    region,
    name,
    description,
    img,
    story,
    race,
    abilities,
    weaknesses,
    tale,
    symbolism,
  } = req.body;

  //! checking to not update and send empty strings
  const updateFields = {};
  if (region.trim() !== "") updateFields.region = region;
  if (name.trim() !== "") updateFields.name = name;
  if (description.trim() !== "") updateFields.description = description;
  if (img.trim() !== "") updateFields.img = img;
  if (story.trim() !== "") updateFields.story = story;
  if (race.trim() !== "") updateFields.race = race;
  if (abilities.trim() !== "") updateFields.abilities = abilities;
  if (weaknesses.trim() !== "") updateFields.weaknesses = weaknesses;
  if (tale.trim() !== "") updateFields.tale = tale;
  if (symbolism.trim() !== "") updateFields.symbolism = symbolism;
  try {
    const updatedCreature = await Creatures.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    );
    if (!updatedCreature) {
      return res.status(200).json({ message: "Creature not found" });
    }
    res.status(200).json({ message: "Done", creature: updatedCreature });
  } catch (err) {
    console.log("Update error:", err);
    res.status(500).json({ message: "Updated failed:", error: err.message });
  }
};

exports.deleteCreature = async (req, res, next) => {
  const id = req.params.id;
  const deletedCreature = await Creatures.findByIdAndDelete(id);
  if (!deletedCreature) {
    return res
      .status(404)
      .json({ message: "Something went wrong ,cant delete this Creature" });
  }
  res.status(200).json({ message: "deleted" });
};
