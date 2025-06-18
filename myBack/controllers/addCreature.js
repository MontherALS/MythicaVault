const Creatures = require("../models/Creatures");

exports.addCreatures = async (req, res, next) => {
  try {
    const {
      region,
      name,
      description,
      img,
      story,
      race,
      abilities,
      weaknesses,
    } = req.body;

    const creature = new Creatures({
      region: region,
      name: name,
      description: description,
      img: img,
      story: story,
      race: race,
      abilities: abilities,
      weaknesses: weaknesses,
    });

    await creature.save();
    console.log("DONE!" + creature);
    res.status(201).json({ message: "creature are created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong", error: err });
  }
};
