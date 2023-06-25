const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require("mongoose")

const conductorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the conductor name "]
    },
    first_name: {
        type: String,
        required: [true, "Please add the conductor first_name "]
    },
    email:{
        type: String,
        required: [true, "Please add the conductor email "],
        unique : [true, "Please change email "]
    },
    phone: {
        type: String,
        required: [true, "Please add the conductor phone number "]
    },
    password:{
        type: String,
        required: [true, "Please add the conductor phone number "]
    },
    image: {
        type: String,
        required: [true, "Please add the ID's scan "]
    }
}, {
    timestamps: true,
})

conductorSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Conducteur", conductorSchema)