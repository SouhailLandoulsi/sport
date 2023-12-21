const mongoose= require("mongoose")

const playerSchema= mongoose.Schema({
    name: String,
    age: Number,
    number : Number,
    position: String,
    team:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Team"
    }
})

const player =mongoose.model("Player", playerSchema)

module.exports =player