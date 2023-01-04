const mongoose = require('mongoose')

const PlayerSchema = mongoose.Schema({
    fullName:{
        type: String,
        minLength: [1, "User needs to provide a valid name"],
        maxLength: [15, "User needs to provide a valid name"]
    },
    highScore:{
        type: Number,
        validate : {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        },
        default: 0
    }
}, {timestamps: true})

module.exports = mongoose.model("Memory_Game_Player", PlayerSchema)
