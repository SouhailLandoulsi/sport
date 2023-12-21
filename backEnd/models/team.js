const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
  name: String,
  foundation: Number,
  stadium: String,
  owner: String,
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
});

const team = mongoose.model("Team", teamSchema);

module.exports = team;
