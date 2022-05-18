const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    "inputstring":{
        type:String,
        required:true
    }
})

const Registerinput = new mongoose.model("Register", UsersSchema);

module.exports = Registerinput;